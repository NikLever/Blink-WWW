<?
	require_once ('connect.php');
	
	$courseId = $_REQUEST['courseId'];
	$userId = $_REQUEST['userId'];
	$json = $_REQUEST['data'];
	$items = json_decode($json);
	//var_dump($items);
	//echo count($items);
	$error = false;
	$guids = "";
	
	foreach($items as $item){
		//echo $item->guid;
		$guid = $item->guid;
		if ($guids!="") $guids .= ", ";
		$guids .= $guid;
		$sql = "SELECT id FROM userdata WHERE courseId=$courseId AND userId=$userId AND guid='$guid'";
		$result = mysql_query($sql);
		if (!$result){
			$error = true;
			echo '{ "success":false, "msg":"Problem running query '.$sql.'"}';
			break;
		}else{
			$data = mysql_real_escape_string($item->text);
			if (mysql_num_rows($result)>0){
				//Update required
				$row = mysql_fetch_row($result);
				$id = $row[0];
				$sql = "UPDATE userdata SET data='$data' WHERE id=$id";
			}else{
				//Insert required
				$sql = "INSERT INTO userdata (courseId, userId, guid, data) VALUES ($courseId, $userId, '$guid', '$data')";
			}
			//echo $sql;
			$result = mysql_query($sql);
			if (!$result){
				$error = true;
				echo '{ "success":false, "msg":"Problem saving user data", "sql":"'.$sql.'"}';
				break;
			}
		}
	}
	
	if (!$error){
		echo '{ "success":true, "msg":"User data saved modified count is '.count($items).' guids:'.$guids.'"}';
	}else{
		echo '{ "success":false, "msg":"Problem saving user data", "sql":"'.$sql.'"}';
	}
	
	mysql_close($conn);
?>