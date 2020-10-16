<?
	require_once('connect.php');
	require '../PHPMailer/PHPMailerAutoload.php';
	
	$data = new stdClass;
	$data->success = false;
	$data->msg = "";
	
	$email = $_REQUEST['email'];
	$firstname = (isset($_REQUEST['firstname'])) ? $_REQUEST['firstname'] : "";
	$lastname = (isset($_REQUEST['lastname'])) ? $_REQUEST['lastname'] : "";
	$username = $firstname.$lastname;
	$userId = 0;
	$sql = "SELECT id FROM users WHERE email='$email' AND username='$username'";
	$result = mysql_query($sql);
	if ($result){
		if (mysql_num_rows($result)>0){
			if ($username=="" && substr($email, 0, 6)=="guest_"){
				$row = mysql_fetch_row($result);
				$data->userId = $row[0];
				$data->success = true;
				$data->msg = "ok";
				$data->debug = false;
			}else{
				$data->msg = "A user with that email address and username already exists in the database. Please choose another email address";
			}
		}else if (empty($_REQUEST['password'])){
			$data->msg = "No password supplied";
		}else{
			$uuid = (isset($_REQUEST['uuid'])) ? $_REQUEST['uuid'] : "";
			if ($uuid!=""){
				$sql = "SELECT id FROM users WHERE email='$uuid'";
				$result = mysql_query($sql);
				if ($result){
					if (mysql_num_rows($result)>0){
						$row = mysql_fetch_row($result);
						$id = $row[0];
					}
				}
			}
			$salt = generateRandomString(28);
			$password = sha1($salt.$_REQUEST['password']);
			$gender = (isset($_REQUEST['gender'])) ? $_REQUEST['gender'] : "";		
			$country = (isset($_REQUEST['country'])) ? $_REQUEST['country'] : "";	
			if (isset($id)){
				$sql = "UPDATE users SET email='$email', firstname='$firstname', lastname='$lastname', username='$username', salt='$salt', password='$password', gender='$gender', country='$country' WHERE id=$id";
			}else{
				$sql = "INSERT INTO users (email, firstname, lastname, username, salt, password, gender, country, credits) VALUES ('$email',  '$firstname', '$lastname', '$username', '$salt', '$password', '$gender', '$country', 0)";
			}
			$result = mysql_query($sql);
			if ($result){
				$userId = (isset($id)) ? $id : mysql_insert_id();
				$data->userId = $userId;
				$data->success = true;
				$data->msg = "ok";
				$data->debug = false;
				$username = "$firstname $lastname,<br><br>";
				if (strlen($username)<11) $username = "";
				$html = "$username";
				$html .= "Thanks for registering with Blink Training: the new way to learn.<br><br>";
 				$html .= "Whether your goal is self improvement, getting better on the job or just learning something new, Blink is the most engaging way to get there.<br><br>";
 				//$html .= "To discover more about this new learning system, launch Blink on your iPad or iPhone and download the \"What is Blink Training?\" course.<br><br>";
 				$html .= "Our courses are fun and you'll get hooked. Try some free samples to get started.<br><br>";
 				$html .= "A few tips:<br><ul>";
				$html .= "<li>Navigation Menu: When you're in a course, touch the three blue lines in the upper left and the Navigation Menu will open. From this menu, you can exit the course, edit your dossier, and more.</li>";
				$html .= "<li>Score Menu: To see how you're doing in a course, touch the Blink eye in the bottom left to open and close the Score Menu. That will also show you the Target Score - the number of points you need to unlock the next section of that course.</li></ul><br>";
 				$html .= "If you have questions, comments, or anything else, you can respond to this email or email us at <a href=\"mailto:support@blinktrainingsystem.com\">support@blinktrainingsystem.com</a>.<br><br>";
				$html .= "And thanks for giving Blink Training a try!<br><br>";
 				$html .= "Best,<br><br>";
 				$html .= "Your Blink Support Team<br><br>";
				$html .= "<hr><a href=\"mailto:support@blinktrainingsystem.com\">support@blinktrainingsystem.com</a><br>";
				$html .= "<a href=\"http://blinktrainingsystem.com\">www.blinktrainingsystem.com</a><br>";
				$html .= "Blink Training Systems, LLC<br>";
           		$html .= "<img src=\"http://blinktrainingsystem.com/images/blink1.png\">";
				str_replace("<br>", "\n", $username);
				$body = "$username";
				$body .= "Thanks for registering with Blink Training: the new way to learn.\n";
 				$body .= "Whether your goal is self improvement, getting better on the job or just learning something new, Blink is the most engaging way to get there.\n";
 				//$body .= "To discover more about this new learning system, launch Blink on your iPad or iPhone and download the \"What is Blink Training?\" course.\n";
 				$body .= "Our courses are fun and you'll get hooked. Try some free samples to get started.\n";
 				$body .= "A few tips:\n";
				$body .= "    Navigation Menu: When you're in a course, touch the three blue lines in the upper left and the Navigation Menu will open. From this menu, you can exit the course, edit your dossier, and more.\n";
				$body .= "    Score Menu: To see how you're doing in a course, touch the Blink eye in the bottom left to open and close the Score Menu. That will also show you the Target Score - the number of points you need to unlock the next section of that course.\n";
 				$body .= "If you have questions, comments, or anything else, you can respond to this email or email us at support@blinktrainingsystem.com.\n";
				$body .= "And thanks for giving Blink Training a try!\n";
 				$body .= "Best,\n";
 				$body .= "Your Blink Support Team\n";
				$body .= "support@blinktrainingsystem.com\n";
				$body .= "www.blinktrainingsystem.com\n";
				$body .= "Blink Training Systems, LLC\n";
				sendMail($email, "$firstname $lastname", "Welcome to Blink Training!", $body, $html, true);
			}else{
				$data->msg = mysql_real_escape_string(mysql_error($conn));
			}
		}
	}else{
		$data->msg = "Problem connecting to database";
	}
	
	mysql_close($conn);
	
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