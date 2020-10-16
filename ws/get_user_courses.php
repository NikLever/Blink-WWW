<? 
	require_once('connect.php');
	$msg = "";
	
	$userId = $_REQUEST['userId'];
	
	$data = array();
	$sql = "SELECT courseId FROM usercourse WHERE userId=$userId";
	$result = mysql_query($sql);
	if ($result){
		$courses = array();
		while($row=mysql_fetch_row($result)) $courses[] = $row[0];
		$data['success'] = true;
		$data['courses'] = $courses;
	}else{
		$data['success'] = false;
		$data['error'] = "Problem accessing database sql:$sql";
	}
	
	$json = json_encode($data);
	echo $json;
	
	mysql_close($conn);
?>
