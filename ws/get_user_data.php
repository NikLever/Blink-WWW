<?
	require_once ('connect.php');
	
	$courseId = $_REQUEST['courseId'];
	$userId = $_REQUEST['userId'];
	$guid = $_REQUEST['guid'];
	
	$sql = "SELECT data FROM userdata WHERE courseId=$courseId AND userId=$userId AND guid='$guid'";
	$result = mysql_query($sql);
	if (!$result){
		echo '{ "success":false, "msg":"Problem running query '.$sql.'"}';
	}else{
		//Update required
		$row = mysql_fetch_row($result);
		$data = $row[0];
		echo '{ "success":true, "data":"'.$data.'", "sql":"'.$sql.'"}';
	}
	
	mysql_close($conn);
?>