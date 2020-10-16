<?
	$version = 1.0;
	require_once ('connect.php');
	require '../PHPMailer/PHPMailerAutoload.php';
	
	if (isset($_REQUEST['email'])){
		$email = $_REQUEST['email'];
		$sql = "SELECT * FROM users WHERE email='$email'";
		$result = mysqli_query($conn, $sql);
		if ($result){
			if (mysqli_num_rows($result)==0){
				$data->success = false;
				$data->msg = "We could\'t find your email address in our database";
			}else{
				$row = mysqli_fetch_assoc($result);
				$name = $row['firstname'].' '.$row['lastname'];
				if (empty($name)) $name = $row['username'];
				$to      = $email;
				$subject = 'Password reset request from Blink Training Systems';
				$guid = generateRandomString(28);
				$sql = "INSERT INTO password_reset (email, guid) VALUES('$email', '$guid')";
				$result = mysqli_query($conn, $sql);
				$password_reset = "http://blinktrainingsystem.com/password_reset.php?guid=$guid&email=$email";
				$html = "Hi $name<br><br>";
				$html .= "You requested a password reset for this email address.<br><br>";
				$html .= "Please follow <a href=\"$password_reset\">this link</a>.<br><br>";
				$html .= "Thanks for using the Blink Training System.<br><br>";
				$html .= "Best,<br><br>";
 				$html .= "Your Blink Support Team<br><br>";
				$html .= "support@blinktrainingsystem.com<br>";
				$html .= "www.blinktrainingsystem.com<br>";
				$html .= "Blink Training Systems, LLC<br>";	
				$html .= "<img src=\"http://blinktrainingsystem.com/images/blink1.png\">";
				$message = "Hi $name\n";
				$message .= "You requested a password reset for this email address.\n";
				$message .= "Please follow this link $password_reset .\n";
				$message .= "Thanks for using the Blink Training System.\n";
				$message .= "Best,\n";
 				$message .= "Your Blink Support Team\n";
				$message .= "support@blinktrainingsystem.com\n";
				$message .= "www.blinktrainingsystem.com\n";
				$message .= "Blink Training Systems, LLC\n";
				$sent = sendMail($to, $name, $subject, $message, $html, true);
				if ($sent){
					$data->success = true;
					$data->method = "forgotten";
					$data->msg = "An email has been sent to your email address.";
					$data->sent = $sent;
				}else{
					$data->success = false;
				}
			}
		}else{
			$data->success = false;
			$data->msg = "Error:$sql";
		}
	}else{
		$data->success = false;
		$data->msg = "No email";
	}
	
	mysqli_close($conn);
	
	echo json_encode($data);

function sendMail($to, $name, $subject, $message, $html, $usePHPMailer){
	global $data;
	
	if ($usePHPMailer){
		$mail = new PHPMailer;
		
		//$mail->SMTPDebug = 3;                               // Enable verbose debug output
		$mail->isSMTP();                                      // Set mailer to use SMTP
		$mail->Host = 'secure.emailsrvr.com';  // Specify main and backup SMTP servers
		$mail->SMTPAuth = true;                               // Enable SMTP authentication
		$mail->Username = 'support@blinktrainingsystem.com';                 // SMTP username
		$mail->Password = 'b!1Nk2016';                           // SMTP password
		$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
		$mail->Port = 465;                                    // TCP port to connect to
		
		$mail->setFrom('support@blinktrainingsystem.com', 'Blink Support');
		$mail->addAddress($to, $name);     				 	  // Add a recipient
		$mail->addReplyTo('support@blinktrainingsystem.com', 'Blink Support');
		
		$mail->isHTML(true);                                  // Set email format to HTML
		
		$mail->Subject = $subject;
		$mail->Body    = $html;
		$mail->AltBody = $message;
		
		if(!$mail->send()) {
			$sent = false;
			$data->error = 'Mailer Error: ' . $mail->ErrorInfo;
		} else {
			$sent = true;
		}
	}else{
		$crlf = "\r\n";
		//$crlf = "\n";
		$headers = 'From: support@blinktrainingsystem.com' . $crlf .
			'Reply-To: support@blinktrainingsystem.com' . $crlf .
			'X-Mailer: PHP/' . phpversion();
		//echo $headers;
		ini_set ( "sendmail_from" , "support@blinktrainingsystem.com" );
		//ini_set ( "sendmail_path" , "/var/qmail/bin/sendmail" );
		//ini_set ( "sendmail_path" , "/var/qmail/bin/qmail-inject" );
		$sent = (mail($to, $subject, $message, $headers)) ? "true" : "false";
	}
	
	return $sent;
}
?>