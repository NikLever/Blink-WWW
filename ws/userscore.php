<?
	$version = 2.0;
	require_once('connect.php');
	
	$method = (empty($_REQUEST['method'])) ? '' : $_REQUEST['method'];
	switch($method){
		case 'set':
		saveUserScore();
		break;
		case 'set_state':
		saveCourseState();
		break;
		case 'get':
		getUserScore();
		break;
		default:
		$data->success = false;
		$data->error = "Method not supported";
		break;
	}
	
	mysqli_close($conn);
	
	//$data->success = true;
	//$data->message = "Hello";
	echo json_encode($data);
	
function addLog($str){
	global $data;
	if (empty($data->log)) $data->log = array();
	$data->log[] = $str;
}
	
function getUserScore(){
	global $data;
	global $conn;
	
	$courseId = $_REQUEST['courseId'];
	$userId = $_REQUEST['userId'];
	
	$scores = array();
	$sql = "SELECT `key`, type, value, json FROM userscore WHERE userId=$userId AND courseId=$courseId";
	$result = mysqli_query($conn, $sql);
	if (!$result){
		$data->success = false;
		$data->error = "SQL Error:$sql";
		return;
	}
	
	while($row=mysqli_fetch_assoc($result)) $scores[] = $row;
	
	$data->success = true;
	$data->state = $scores;
}

function saveCourseState(){
	global $data;
	global $conn;
	
	$courseId = $_REQUEST['courseId'];
	$userId = $_REQUEST['userId'];
	$key = $_REQUEST['key'];
	$state = mysqli_real_escape_string($conn, urldecode($_REQUEST['state']));
	addLog("key:$key data:$state");
	
	$sql = "SELECT id FROM userscore WHERE userId=$userId AND courseId=$courseId AND `key`='$key'";
	$result = mysqli_query($conn, $sql);
	if (!$result){
		$data->success = false;
		$data->error = "SQL Error:$sql";
		return;
	}
	if (mysqli_num_rows($result)==0){
		//Insert
		$sql = "INSERT INTO userscore (courseId, userId, `key`, type, json) VALUES($courseId, $userId, '$key', 1, '$state')";
	}else{
		//Update
		$row = mysqli_fetch_assoc($result);
		$id = $row['id'];
		$sql = "UPDATE userscore SET json='$state' WHERE id=$id";
	}
	$result = mysqli_query($conn, $sql);
	if (!$result){
		$data->success = false;
		$data->error = "SQL Error:$sql";
		return;
	}
	
	$data->success = true;
	$data->message = $sql;
}

function saveUserScore(){
	global $data;
	global $conn;
	
	$courseId = $_REQUEST['courseId'];
	$userId = $_REQUEST['userId'];
	$json = urldecode($_REQUEST['scores']);
	addLog($json);
	$scores = json_decode($json);
	$insertcount = 0;
	$updatecount = 0;
	
	if (!empty($scores)) addLog(count($scores)." scores supplied");
	
	foreach($scores as $key=>$val){
		$sql = "SELECT id FROM userscore WHERE userId=$userId AND courseId=$courseId AND `key`='$key'";
		$result = mysqli_query($conn, $sql);
		if (!$result){
			$data->success = false;
			$data->error = "SQL Error:$sql";
			return;
		}
		if (mysqli_num_rows($result)==0){
			//Insert
			$sql = "INSERT INTO userscore (courseId, userId, `key`, value) VALUES($courseId, $userId, '$key', $val)";
			$insertcount++;
		}else{
			//Update
			$row = mysqli_fetch_assoc($result);
			$id = $row['id'];
			$sql = "UPDATE userscore SET value=$val WHERE id=$id";
			$updatecount++;
		}
		$result = mysqli_query($conn, $sql);
		if (!$result){
			$data->success = false;
			$data->error = "SQL Error:$sql";
			return;
		}
	}
	
	$data->success = true;
	$data->message = "$insertcount scores added. $updatecount scores updated.";
}
?>