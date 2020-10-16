<?
	$version = 1.0;
	require_once ('connect.php');
	
	$data->success = true;
	
	if (empty($_REQUEST['userId'])){
		$data->success = false;
		$data->error = "No user id";
	}
	
	if ($data->success){
		if (empty($_REQUEST['courseId'])){
			$data->success = false;
			$data->error = "No course id";
		}
	}
	
	if ($data->success){
		if (empty($_REQUEST['lite'])){
			$data->success = false;
			$data->error = "No lite";
		}
	}
	
	if ($data->success){
		$userId = $_REQUEST['userId'];
		$courseId = $_REQUEST['courseId'];
		$lite = $_REQUEST['lite'];
		$sql = "INSERT INTO usercourse (userId, courseId, lite, credits) VALUES($userId, $courseId, $lite, 0)";
		$result = mysqli_query($conn, $sql);
		if (!$result){
			$data->success = false;
			$data->error = "Problem running query:$sql";
		}else{
			$id = mysqli_insert_id($conn);
			$sql = "DELETE FROM usercourse WHERE userId=$userId AND courseId=$courseId AND lite=$lite AND id<>$id";
			$result = mysqli_query($conn, $sql);
			$data->message = "Table updated";
		}
	}
	
	mysqli_close($conn);
	
	echo json_encode($data);
?>