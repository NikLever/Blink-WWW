<?
	require_once ('connect.php');
	
	$user_gems = floatval($_REQUEST['gems']);
	$user_points = floatval($_REQUEST['points']);
	$userId = intval($_REQUEST['userId']);
	$user_traction = floatval($_REQUEST['traction']);
	$guid = $_REQUEST['guid'];
	$data = array();
	
	if (empty($guid)) $guid = "";
	
	$sql = "SELECT count FROM user_plays WHERE userId=$userId AND guid='$guid'";
	$result = mysql_query($sql);
	if (!$result){
		$data['success'] = false;
		$data['message'] = "Problem accessing user efficiency sql:$sql";
	}else{
		if (mysql_num_rows($result)==0){
			$user_efficiency = 1.0;
			$sql = "INSERT INTO user_plays ( guid, userId ) VALUES ('$guid', $userId)";
		}else{
			$row = mysql_fetch_row($result);
			$user_efficiency = floatval($row[0] + 1);
			$sql = "UPDATE user_plays SET count = count + 1 WHERE guid='$guid' AND userId=$userId";
		}
		$result = mysql_query($sql);
		
		if (!$result){
			$data['success'] = false;
			$data['message'] = "Problem updating user plays sql:$sql";
		}else{
			$sql = "SELECT * FROM community WHERE guid='$guid'";
			$result = mysql_query($sql);
			if (!$result){
				$data['success'] = false;
				$data['message'] = "Problem running query ".$sql;
			}else if(mysql_num_rows($result)==0){
				$sql = "INSERT INTO community ( guid, gems, points, efficiency, traction, count ) VALUES ( '$guid', $user_gems, $user_points, $user_efficiency, $user_traction, 1)";
				$result = mysql_query($sql);
				if (!$result){
					$data['success'] = false;
					$data['message'] = "Problem running query ".$sql;
				}else{
					$data = array();
					$data['success'] = true;
					$data['user_efficiency'] = $user_efficiency;
					$data['gems'] = $user_gems;
					$data['points'] = $user_points;
					$data['efficiency'] = $user_efficiency;
					$data['traction'] = $user_traction;
				}
			}else{ 
				 $row = mysql_fetch_assoc($result);
				 $count = intval($row['count']);
				 $gems = floatval($row['gems']);
				 $points = floatval($row['points']);
				 $efficiency = floatval($row['efficiency']);
				 $traction = floatval($row['traction']);
				 
				 $prop = floatval($count)/floatval($count + 1);
				 $user_prop = 1.0 - $prop;
				 
				 $gems = $gems * $prop + $user_gems * $user_prop; 
				 $points = $points * $prop + $user_points * $user_prop; 
				 $efficiency = $efficiency * $prop + $user_efficiency * $user_prop; 
				 $traction = $traction * $prop + $user_traction * $user_prop; 
				 $count++;
				 
				 $sql = "UPDATE community SET gems=$gems, points=$points, efficiency=$efficiency, traction=$traction WHERE guid='$guid'";
				 $result = mysql_query($sql);
				 if (!$result){
					$data['success'] = false;
					$data['message'] = "Problem running query ".$sql;
				}else{
					$data = array();
					$data['success'] = true;
					$data['user_efficiency'] = $user_efficiency;
					$data['gems'] = $gems;
					$data['points'] = $points;
					$data['efficiency'] = $efficiency;
					$data['traction'] = $traction;
				}
			}
		}
	}
	
	$json = json_encode($data);
	echo $json;
	
	mysql_close($conn);
?>