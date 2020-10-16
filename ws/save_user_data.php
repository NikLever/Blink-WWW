<?
	require_once ('connect.php');
	
	$courseId = $_REQUEST['courseId'];
	$userId = $_REQUEST['userId'];
	$guid = $_REQUEST['guid'];
	$data = mysql_real_escape_string($_REQUEST['data']);
	
	$sql = "SELECT id FROM userdata WHERE courseId=$courseId AND userId=$userId AND guid='$guid'";
	$result = mysql_query($sql);
	if (!$result){
		echo '{ "success":false, "msg":"Problem running query '.$sql.'"}';
	}else{
		 if (mysql_num_rows($result)>0){
			//Update required
			$row = mysql_fetch_row($result);
			$id = $row[0];
			$sql = "UPDATE userdata SET data='$data' WHERE id=$id";
		}else{
			//Insert required
			$sql = "INSERT INTO userdata (courseId, userId, guid, data) VALUES ($courseId, $userId, '$guid', '$data')";
		}
		
		$result = mysql_query($sql);
		if ($result){
			echo '{ "success":true, "msg":"User data saved", "sql":"'.$sql.'"}';
		}else{
			echo '{ "success":false, "msg":"Problem saving user data", "sql":"'.$sql.'"}';
		}
	}
	
	mysql_close($conn);
?>