<?
	require_once ('connect.php');
	
	$userId = $_REQUEST['userId'];
	$platform = $_REQUEST['platform'];
	$itemId = $_REQUEST['itemId'];
	$transactionId = $_REQUEST['transactionId'];
	//$testing = (empty($_REQUEST['testing'])) ? false : true;
	$testing = false;
	
	$data = array();
	$success = false;
	$message = "Trying to authorise itemId:$itemId transactionId:$transactionId platform:$platform user:$userId";
	
	if ($platform == 'ios'){
		$result = checkIOS($testing);
		if (!$result->success) $result = checkIOS(true);
		$success = $result->success;
		$message = $result->message;	
	}else if ($platform == 'android'){
		$packageName = 'com.blinktrainingsytem.blink';
		$sql = "SELECT packageId FROM iap_package WHERE id=$itemId";
		$result = mysql_query($sql);
		if (!$result){
			$message = "Problem getting packageId error:".mysql_error($result)." sql:".$sql;
		}else{
			$row = mysql_fetch_row($result);
			$packageId = $row[0];
			$url = "https://www.googleapis.com/androidpublisher/v2/applications/$packageName/purchases/products/$productId/tokens/$transactionId";
			$result = file_get_contents($url);
			if ($result){
				$json = json_decode($result);
				if ($json->purchaseState==1){
					$success = true;
				}else{
					$message = "Google API return purchase state false";
				}
			}else{
				$message = "Google API returned false for url:$url";
			}
		}
	}
	
	//Debug 
	//$success = true;
	
	if ($success){
		$receiptId = (empty($_REQUEST['receiptId'])) ? "" : $_REQUEST['receiptId'];
		$alreadyAllocated = false;
		
		if ($receiptId != ""){
			$sql = "SELECT * FROM receipts WHERE receiptId='$receiptId'";
			$result = mysql_query($sql);
			if ($result && mysql_num_rows($result)>0){
				$alreadyAllocated = true;
				$success = false;
				$message = "Purchase already allocated";
			}
		}
		
		if (!$alreadyAllocated){
			$sql = "SELECT credits FROM iap_package WHERE id = $itemId";
			$result = mysql_query($sql);
			if (!$result){
				$message = "Problem getting credits for item:".mysql_error($result)." sql:".$sql;
			}else{
				$row = mysql_fetch_row($result);
				$credits = intval($row[0]);
				$sql = "UPDATE users SET credits = credits + $credits WHERE id=$userId";
				$result = mysql_query($sql);
				if ($result){
					$success = true;
					$message = "$credits credits added to the users account";
				}else{
					$message = "Problem adding credits to account error:".mysql_error($result)." sql:".$sql;
				}
				$sql = "INSERT INTO receipts (receiptId) VALUES ('$receiptId')";
				$result = mysql_query($sql);
				if (!$result){
					$message = "Problem updating the receipts table error:".mysql_error($result)." sql:".$sql;
				}
			}
		}
	}else{
		$data['params'] = $data_string;
		$data['url'] = $url;
	}
	
	$data['success'] = $success;
	$data['message'] = $message;
	
	if ($success){
		$data['itemId'] = $itemId;
		$data['currentTime'] = time();
	}
	
	$json = json_encode($data);
	echo $json;
	
	mysql_close($conn);
	
function checkIOS($sandbox){
	global $transactionId, $data_string, $url;
	
	$url = ($sandbox) ?  'https://sandbox.itunes.apple.com/verifyReceipt' : 'https://buy.itunes.apple.com/verifyReceipt';
	
	$params = array('receipt-data' => $transactionId);
	//$params = array('receipt-data' => base64_decode ($transactionId));
															  
	$data_string = json_encode($params);                                                                                   
	 
	$ch = curl_init($url);                                                                      
	curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");                                                                     
	curl_setopt($ch, CURLOPT_POSTFIELDS, $data_string);                                                                  
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);                                                                      
	curl_setopt($ch, CURLOPT_HTTPHEADER, array(                                                                          
		'Content-Type: application/json',                                                                                
		'Content-Length: ' . strlen($data_string))                                                                       
	);                                                                                                                   
	 
	$result = curl_exec($ch);
	
	$json = json_decode($result);
	
	switch ($json->status){
		case 0:
		$success = true;
		$message = "Credit sale approved";
		break;
		case 21000:
		$message = 'The App Store could not read the JSON object you provided.';
		break;
		case 21002:
		$message = 'The data in the receipt-data property was malformed or missing.';
		break;
		case 21003:
		$message = 'The receipt could not be authenticated.';
		break;
		case 21004:
		$message = 'The shared secret you provided does not match the shared secret on file for your account. Only returned for iOS 6 style transaction receipts for auto-renewable subscriptions.';
		break;
		case 21005:
		$message = '
		The receipt server is not currently available.';
		break;
		case 21006:
		$message = 'This receipt is valid but the subscription has expired. When this status code is returned to your server, the receipt data is also decoded and returned as part of the response. Only returned for iOS 6 style transaction receipts for auto-renewable subscriptions.';
		break;
		case 21007:
		$message = 'This receipt is from the test environment, but it was sent to the production environment for verification. Send it to the test environment instead.';
		break;
		case 21008:
		$message = 'This receipt is from the production environment, but it was sent to the test environment for verification. Send it to the production environment instead.';
		break;
	}
	
	$result = new stdClass;
	$result->success = (empty($success)) ? false : $success;
	$result->errorCode = $json->status;
	$result->message = $message;
	
	return $result; 
}
?>