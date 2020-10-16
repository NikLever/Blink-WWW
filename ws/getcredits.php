<?
	require_once ('connect.php');
	
	$userId = $_REQUEST['userId'];
	
	if (isset($userId)){
		$sql = "SELECT credits FROM users WHERE id=$userId";
		$result = mysql_query($sql);
		if ($result){
			$row = mysql_fetch_assoc($result);
			$row['success'] = true;
			$json = json_encode($row);
			echo $json;
		}else{
			echo '{ "success":false, "msg":"Error:'.$sql.'"}';
		}
	}else{
		echo '{ "success":false, "msg":"No userId"}';
	}
	
	mysql_close($conn);
?>