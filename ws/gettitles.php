<?
	require_once('connect.php');
	$titles = new stdClass;
	$sql = "SELECT * FROM titles WHERE type<3";
	$result = mysql_query($sql);
	if ($result){
		while($row=mysql_fetch_assoc($result)){
			if ($row['type']==1) $titles->all = $row['title'];
			if ($row['type']==2) $titles->my = $row['title'];
		}
	}else{
		$titles->all = $titles->my = "";
	}
	echo json_encode($titles);
?>