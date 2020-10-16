<?
	require_once ('connect.php');
	
	$data = new stdClass;
	$data->success = false;
	
	if (isset($_REQUEST['fb'])){
		if (empty($_REQUEST['email'])){
			$data->msg = "No fb email " + json_encode($_REQUEST);
		}else{
			$email = $_REQUEST['email'];
			$sql = "SELECT * FROM users WHERE email='$email'";
			$result = mysql_query($sql);
			$data->request = $_REQUEST;
			if (!$result){
				$data->msg = mysql_real_escape_string("Problem running query $sql");
			}else if (mysql_num_rows($result)==0){
				//New user
				$fbId = $_REQUEST['id'];
				$name = $_REQUEST['name'];
				$locale = $_REQUEST['locale'];
				$gender = $_REQUEST['gender'];
				$tokens = explode(' ', $name);
				$firstname = $tokens[0];
				$lastname = $tokens[count($tokens)-1];
				$sql = "INSERT INTO users (email, fbId, firstname, lastname, locale, gender) VALUES('$email', '$fbId', '$firstname', '$lastname', '$locale', '$gender')";
				$result = mysql_query($sql);
				if (!$result){
					$data->msg = mysql_real_escape_string("Problem running query $sql");
				}else{
					$data->success = true;
					$data->userId = mysql_insert_id($conn);
					$data->debug = false;
					$data->fb = true;
					sendWelcomeEmail($email);
				}
			}else{
				$row = mysql_fetch_assoc($result);
				$userId = $row['id'];
				$debug = ($row['admin']==1) ? 'true' : 'false';
				$fbId = $row['fbId'];
				$locale = $_REQUEST['locale'];
				$gender = $_REQUEST['gender'];
				if (empty($fbId)){
					//This user has never logged in using FB before
					$fbId = $_REQUEST['id'];
					$sql = "UPDATE users SET fbId='$fbId', gender='$gender', locale='$locale' WHERE id=$userId";
					$result = mysql_query($sql);
					if (!$result){
						$data->msg = mysql_real_escape_string("Problem running query $sql");
					}else{
						$data->success = true;
						$data->userId = $userId;
						$data->debug = $debug;
						$data->fb = true;
					}
				}else if ($fbId!=$row['fbId']){
					//Wrong fbId
					$data->msg = "The stored user does not match your FB info, please use the email and password panel below";
				}else{
					//Good login
					$data->success = true;
					$data->userId = $userId;
					$data->debug = $debug;
					$data->fb = true;
				}
			}
		}
	}else{
		if (empty($_REQUEST['email'])){
			$data->msg = "No email " + json_encode($_REQUEST);
		}else if (empty($_REQUEST['password'])){
			$data->msg = "No password";
		}else{
			$email = $_REQUEST['email'];
			$password = $_REQUEST['password'];
			$sql = "SELECT * FROM users WHERE email='$email'";
			$result = mysql_query($sql);
			if (!$result){
				$error = mysql_error($conn);
				$data->msg = mysql_real_escape_string("Problem running query $sql error:$error");
			}else if (mysql_num_rows($result)>0){
				$row = mysql_fetch_assoc($result);
				$userId = $row['id'];
				$debug = ($row['admin']==1) ? 'true' : 'false';
				$salt = $row['salt'];
				$ok = false;
				if (empty($salt) || $salt==""){
					if ($password == $row['password']){
						//Need to update the password
						$salt = generateRandomString(28);
						$pwd = sha1($salt.$row['password']);
						$sql = "UPDATE users SET salt ='$salt', password='$pwd' WHERE id=$userId";
						$result = mysql_query($sql);
						$ok = $result;
						$data->log = 'Updating password to use salt';
					}else{
						$data->log = 'Wrong password '.$password.'!='.$row['password'];
					}
				}else{
					$ok = (sha1($salt.$password)==$row['password']);	
					$pwd_ok = ($ok) ? 'true' : 'false';
					$data->log = "Checked password $pwd_ok";
				}
				if ($ok){
					$data->success = true;
					$data->userId = $userId;
					$data->debug = $debug;
				}else{
					$error = mysql_error($conn);
					$data->msg = mysql_real_escape_string("The password used did not match our records.");
				}
			}else{
				$data->msg = "The email supplied was not found";
				$data->sql = $sql;
			}
		}
	}
	
	mysql_close($conn);
	
	echo json_encode($data);
?>