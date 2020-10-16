<?
	$version = 1.0;
	require_once ('connect.php');
	
	$userId = $_REQUEST['userId'];
	$data = new stdClass;
	$data->finished = false;
	
	if (isset($userId)){
		$courseId = $_REQUEST['courseId'];
		$sql = "SELECT id FROM usercourse WHERE userId=$userId AND courseId=$courseId AND lite=0";
		$result = mysqli_query($conn, $sql);
		if (!$result){
			$data->success = false;
			$data->msg = mysqli_real_escape_string($conn, "Problem finding usercourse data '.$sql.'");
			$data->finished = true;
		}else if (mysqli_num_rows($result)>0){
			$data->spentcredits = true;
			$data->msg = "You already purchased this course.";
			$data->finished = true;
		}
		
		if (!$data->finished){
			$sql = "SELECT credits FROM course WHERE id=$courseId";
			$result = mysqli_query($conn, $sql);
			if (!$result){
				$data->success = false;
				$data->msg = mysqli_real_escape_string($conn, "Error:'.$sql.'");
				$data->finished = true;
			}
		}
		
		if (!$data->finished){
			$row = mysqli_fetch_row($result);
			$courseCreditCount = intval($row[0]);
			$sql = "SELECT credits FROM users WHERE id=$userId";
			$result = mysqli_query($conn, $sql);
			if (!$result){
				$data->success = false;
				$data->msg = mysqli_real_escape_string($conn, "Error:'.$sql.'");
				$data->finished = true;
			}
		}
		
		if (!$data->finished){
			$row = mysqli_fetch_row($result);
			$userCreditCount = $row[0];
			if ($userCreditCount<$courseCreditCount){
				$data->success = false;
				$data->msg = "Not enough credits left";
				$data->finished = true;
			}else{
				$sql = "UPDATE users SET credits=credits-$courseCreditCount WHERE id=$userId";
				$result = mysqli_query($conn, $sql);
				if (!$result){
					$data->success = false;
					$data->msg = mysqli_real_escape_string($conn, "Error:'.$sql.'");
					$data->finished = true;
				}
			}
		}
		
		if (!$data->finished){
			$sql = "INSERT INTO usercourse (userId, courseId, credits) VALUES( $userId, $courseId, $courseCreditCount)";
			$result = mysqli_query($conn, $sql);
			if (!$result){
				$data->success = false;
				$data->msg = mysqli_real_escape_string($conn, "Error:'.$sql.'");
				$data->finished = true;
			}
		}
		
		if (!$data->finished){
			$data->success = true;
			$data->spentcredits = true;
		}
		
		unset($data->finished);
	}else{
		$data->success = false;
		$data->msg = "No userId";
	}
	
	mysqli_close($conn);
	
	echo json_encode($data);
?>