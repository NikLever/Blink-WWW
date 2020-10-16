<?
	require_once('connect.php');
	
	$courseId = $_REQUEST['courseId'];
	
	$sql = "SELECT summary, json FROM blink WHERE courseId=$courseId";
	$result = mysql_query($sql);
	$data = array();
	
	if ($result){
		while($row = mysql_fetch_assoc($result)){
			$json = json_decode($row['json']);
			$blink = array();
			$blink['summary'] = $row['summary'];
			$blink['json'] = json_encode($json);
			$data[] = $blink;
		}
	}else{
		$data['error'] = "A problem occurred";
	}
	
	$json = json_encode($data);
	echo $json;
	
	mysql_close($conn);
?>