<?
	$version = 2;
	require_once('connect.php');
	
	$data = new stdClass;
	
	if (empty($_REQUEST['courseId'])){
		$data->success = false;
		$data->error = "No courseId";
	}else{
		$courseId = $_REQUEST['courseId'];
		$sql = "SELECT credits FROM course WHERE id=$courseId";
		$result = mysqli_query($conn, $sql);
		
		if (!$result){
			$data->success = false;
			$data->error = "SQL Error:$sql ".mysqli_error($conn);
		}else if (mysqli_num_rows($result)==0){
			$data->success = false;
			$data->error = "Course $courseId not found";
		}else{
			$row = mysqli_fetch_row($result);
			$data->success = true;
			$data->credits = intval($row[0]);
		}
	}
	
	mysqli_close($conn);
	
	echo json_encode($data);
?>