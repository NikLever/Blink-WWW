<?
	require_once ('connect.php');
	
	$userId = $_REQUEST['userId'];
	
	$all = array();
	$user = array();
	$units = array();
	$admin = false;
	
	$log = array();
	$log[] = "Userid=$userId-";
	
	if (isset($userId)){
		$sql = "SELECT admin FROM users WHERE id=$userId";
		$result = mysql_query($sql);
		if ($result){
			$row = mysql_fetch_row($result);
			$admin = ($row[0]==1);
		}else{
			$log[] = "Problem getting admin from users ".mysql_error($result)."-";
		}
	}else{
		$log[] = "No userId-";
	}
	
	$sql = "SELECT groupId FROM group_user WHERE userId=$userId";
	$result = mysql_query($sql);
	if (!$result){
		$log[] = "Can't get users group list-";
	}
	
	//Is this user in a group? If so then show them the list of courses from those groups
	$sql = "SELECT courseId FROM group_course WHERE groupId IN (SELECT groupId FROM group_user WHERE userId = $userId)";
	$result = mysql_query($sql);
	
	$published = ($admin) ? "" : " AND published=1";
	$listOrder = " ORDER BY listOrder ASC, editDate DESC";
	
	if (!$result){
		$log[] = "Problem checking the courses that this user has in groups-";
		$sql = "SELECT * FROM course WHERE buildAvailable=1$published$listOrder";
	}else{
		if (mysql_num_rows($result)>0){
			$sql = "SELECT * FROM course WHERE buildAvailable=1$published AND id IN (SELECT courseId FROM group_course WHERE groupId IN (SELECT groupId FROM group_user WHERE userId = $userId))$listOrder";
		}else{
			$sql = "SELECT * FROM course WHERE buildAvailable=1$published AND id NOT IN (SELECT courseId FROM group_course)$listOrder";
		}
	}
	
	$log[] = $sql."-";//echo $sql."<br>";
	
	$result = mysql_query($sql);
	if ($result){
		$log[] = "adding ".mysql_num_rows($result)." courses-";
		while($row = mysql_fetch_assoc($result)){
			$all[] = $row;
		}
	}else{
		$log[] = "Problem getting courses ".mysql_error($result)."-";
	}
	
	if (isset($userId)){
		$sql = "SELECT courseId FROM usercourse WHERE userId=$userId AND lite=0";
		//echo $userId;
		$result = mysql_query($sql);
		if ($result){
			$log[] = "adding ".mysql_num_rows($result)." user courses-";
			while($row = mysql_fetch_assoc($result)){
				$id = $row['courseId'];
				$row['id'] = $id;
				$sql = "SELECT title, iconURL, credits FROM course WHERE id=$id";
				$resultb = mysql_query($sql);
				if ($resultb){
					$rowb = mysql_fetch_assoc($resultb);
					$row['title'] = $rowb['title'];
					$row['iconURL'] = $rowb['iconURL'];
					$row['credits'] = intval($rowb['credits']);
				}else{
					$row['sql'] = $sql;//mysqli_real_escape_string($conn, $sql);
				}
				$row['lite'] = false;
				$row['cloud'] = true;
				unset($row['courseId']);
				$user[] = $row;
			}
			$sql = "SELECT * FROM course WHERE authorId=$userId AND authorId!=0";
			$result = mysql_query($sql);
			if ($result){
				while($row = mysql_fetch_assoc($result)){
					$found = false;
					foreach($all as $course){
						if ($course['id']==$row['id']){
							$found = true;
							break;
						}
					}
					if (!$found){
						$row['cloud'] = true;
						$all[] = $row;
					}
				}
			}else{
				$log[] = "Problem getting user courses where this user is author ".$sql."-";
			}
		}
	}else{
		$log[] = "Problem getting user courses ".$sql."-";
	}
	
	if ($admin){
		$sql = "SELECT * FROM units";
		$result = mysql_query($sql);
		if ($result) while($row = mysql_fetch_assoc($result)) $units[] = $row;
	}
	
	$titles = new stdClass;
	$sql = "SELECT * FROM titles WHERE type<3";
	$result = mysql_query($sql);
	if ($result){
		while($row=mysql_fetch_assoc($result)){
			if ($row['type']==1) $titles->all = urlencode($row['title']);
			if ($row['type']==2) $titles->my = urlencode($row['title']);
		}
	}else{
		$titles->all = $titles->my = "";
	}
	
	$data = array();
	
	$data['all'] = $all;
	$data['user'] = $user;
	$data['units'] = $units;
	$data['titles'] = $titles;
	$data['log'] = $log;
	
	$json = json_encode($data);
	echo $json;
	
	mysql_close($conn);
?>