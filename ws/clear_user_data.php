<?
	require_once ('connect.php');
	
	$courseId = $_REQUEST['courseId'];
	$userId = $_REQUEST['userId'];
	
	$sql = "DELETE FROM userdata WHERE courseId=$courseId AND userId=$userId";
	$result = mysql_query($sql);
	if (!$result){
		echo '{ "success":false, "msg":"Problem running query '.$sql.'"}';
	}else{
		echo '{ "success":true, "msg":"User data cleared", "sql":"'.$sql.'"}';
	}
	
	mysql_close($conn);
?>