<?
	require_once ('connect.php');
	
	$courseId = $_REQUEST['courseId'];
	$userId = $_REQUEST['userId'];
	$str = $_REQUEST['guids'];
	$guids = json_decode($str);
	$data = array();
	$error = false;
	
	foreach($guids as $guid){
		$sql = "SELECT data FROM userdata WHERE courseId=$courseId AND userId=$userId AND guid='$guid'";
		//echo $sql.' ';
		$result = mysql_query($sql);
		if (!$result){
			$error = true;
			echo '{ "success":false, "msg":"Problem running query '.$sql.'"}';
			break;
		}else{
			//Update required
			$row = mysql_fetch_row($result);
			$item = array("guid"=>$guid, "data"=>$row[0]);
			$data[] = $item;
		}
	}
	
	if (!$error){
		$json = array( "success"=>true, "data"=>$data);
		$str = json_encode($json);
		echo $str;
	}
	
	mysql_close($conn);
?>