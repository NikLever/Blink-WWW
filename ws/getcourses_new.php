<?
	require_once ('connect.php');
	
	$userId = $_REQUEST['userId'];
	
	$all = array();
	$user = array();
	$units = array();
	$admin = false;
	
	$log = "Userid=$userId-";
	
	if (isset($userId)){
		$sql = "SELECT admin FROM users WHERE id=$userId";
		$result = mysql_query($sql);
		if ($result){
			$row = mysql_fetch_row($result);
			$admin = ($row[0]==1);
		}else{
			$log .= "Problem getting admin from users ".mysql_error($result)."-";
		}
	}else{
		$log .= "No userId-";
	}
	
	$sql = "SELECT groupId FROM group_user WHERE userId=$userId";
	$result = mysql_query($sql);
	if (!$result){
		$log .= "Can't get users group list-";
	}
	
	$sql = "SELECT * FROM course WHERE buildAvailable AND id IN (SELECT courseId FROM group_course WHERE groupId IN (SELECT groupId FROM group_user WHERE userId = $userId))";
	//$sql = "SELECT * FROM course WHERE buildAvailable=1";
	if (!$admin) $sql .= " AND published=1";
	
	$log .= $sql."-";//echo $sql."<br>";
	
	$result = mysql_query($sql);
	if ($result){
		$log .= "adding ".mysql_num_rows($result)." courses-";
		while($row = mysql_fetch_assoc($result)){
			$all[] = $row;
		}
	}else{
		$log .= "Problem getting courses ".mysql_error($result)."-";
	}
	
	if (isset($userId)){
		$sql = "SELECT title, iconURL FROM course WHERE id=(SELECT courseId FROM usercourse WHERE userId=$userId)";
		//echo $userId;
		$result = mysql_query($sql);
		if ($result){
			$log .= "adding ".mysql_num_rows($result)." user courses-";
			while($row = mysql_fetch_assoc($result)){
				$user[] = $row;
			}
		}
	}else{
		$log .= "Problem getting user courses ".$sql."-";
	}
	
	if ($admin){
		$sql = "SELECT * FROM units";
		$result = mysql_query($sql);
		if ($result) while($row = mysql_fetch_assoc($result)) $units[] = $row;
	}
	
	$data = array();
	
	$data['all'] = $all;
	$data['user'] = $user;
	$data['units'] = $units;
	$data['log'] = $log;
	
	$json = json_encode($data);
	echo $json;
	
	mysql_close($conn);
?>