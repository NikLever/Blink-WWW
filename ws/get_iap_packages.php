<?
	require_once ('connect.php');
	
	$data = array();
	
	$sql = "SELECT * FROM iap_package";
	$result = mysql_query($sql);
	$courseId = (isset($_REQUEST['courseId'])) ? $_REQUEST['courseId'] : 0;
	
	if ($result){
		$data['success'] = true;
		$packages = array();
		while($row = mysql_fetch_assoc($result)){
			$row['iconUrl'] = 'http://blinktrainingsystem.com/images/'.$row['icon'];
			if ($courseId!=0) $row['packageId'] .= ".course$courseId";
			$packages[] = $row;
		}
		$data['packages'] = $packages;
	}else{
		$data['success'] = false;
		$data['error'] = 'SQL error: '.mysql_error($result);
	}
	
	$json = json_encode($data);
	echo $json;
	
	mysql_close($conn);
?>