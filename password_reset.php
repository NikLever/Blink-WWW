<?
	$version = 1.0;
	require_once('ws/connect.php');
	$email = "";
	
	if (isset($_REQUEST['method'])){
		$email = $_REQUEST['email'];
		$guid = $_REQUEST['guid'];
		$password = $_REQUEST['password'];
		$sql = "SELECT * FROM password_reset WHERE email='$email' AND guid='$guid'";
		$result = mysqli_query($conn, $sql);
		if (!$result){
			$error = "There was a problem connecting to our database please try later";
		}else if (mysqli_num_rows($result)==0){
			$error = "The email used does not match our records. Please request again from the Blink app";
		}else{
			//OK to reset
			$sql = "SELECT id, salt FROM users WHERE email='$email'";
			$result = mysqli_query($conn, $sql);
			if (!$result){
				$error = "There was a problem accessing your user account, please try later";
			}else{
				$row = mysqli_fetch_assoc($result);
				$id = $row['id'];
				$salt = $row['salt'];
				if ($salt==""){
					$salt = generateRandomString(28);
					$pwd = sha1($salt.$password);
					$sql = "UPDATE users SET salt='$salt', password='$pwd' WHERE id=$id"; 
				}else{
					$pwd = sha1($salt.$password);
					$sql = "UPDATE users SET password='$pwd' WHERE id=$id"; 
				}
				$result = mysqli_query($conn,$sql);
				if (!$result){
					$error = "There was a problem updating your password, please try later";
				}else{
					$message = "Your password has been reset";
				}
			}
		}
	}
	mysqli_close($conn);
?>
<!doctype html>
<html>
<head>
<meta charset="UTF-8">
<title>Blink - password reset</title>
<link href="css/bootstrap.css" rel="stylesheet">
</head>

<body>
<? if (isset($error)){ ?>
<div class="alert alert-danger"><? echo $error; ?></div>
<? }else if(isset($message)){ ?>
<div class="alert alert-info"><? echo $message; ?></div>
<? } ?>
<div class="container">
	<div class="row">
    	<div class="col-sm-5">
    	<h3>Blink Training System - reset password</h3>
        <form role="form" action="password_reset.php" method="get">
            <input type="hidden" name="method" value="reset" >
            <input type="hidden" name="guid" value="<? echo $_REQUEST['guid']; ?>">
            Email<input class="form-control" type="text" name="email" placeholder="Enter your email" value="<? echo $email; ?>"><br>
            Password<input class="form-control" type="password" name="password" placeholder="Enter new password, then press Reset"><br>
            <input class="form-control" type="submit" value="Reset">
        </form>
        </div>
     </div>
</div>
<script src="js/jquery-1.11.3.min.js"></script>
<!-- Include all compiled plugins (below), or include individual files as needed --> 
<script src="js/bootstrap.js"></script>
</body>
</html>