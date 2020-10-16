<?
	// Report all errors
	error_reporting(E_ALL);
	ini_set('display_errors', 1);
	ini_set('display_startup_errors', 1);
	
	if (empty($version)){
		// Initialization
		$conn = mysql_connect('10.16.16.2', "blink-3fm-u-084762", "93TdsEws!");
		if (empty($conn)) die("Could not connect ".$_SERVER['SERVER_ADDR']);
		mysql_select_db("blink-3fm-u-084762", $conn);
		if (empty($conn)) die("Wrong database");
	}else{
		error_reporting(E_ALL);
		ini_set('display_errors', 1);
		ini_set('display_startup_errors', 1);
		$conn = mysqli_connect("10.16.16.2", "blink-3fm-u-084762", "93TdsEws!", "blink-3fm-u-084762");
		$data = new stdClass;
		if (!$conn) {
			echo "Error: Unable to connect to MySQL." . PHP_EOL;
			echo "Debugging errno: " . mysqli_connect_errno() . PHP_EOL;
			echo "Debugging error: " . mysqli_connect_error() . PHP_EOL;
			echo "SERVER: ".$_SERVER['SERVER_ADDR'] . PHP_EOL;;
			exit;
		}
	}
	
	if (!$conn) die('Could not connect: ' . mysql_error());
	$imagePath = '../courses/images/';
	
function generateRandomString($nbLetters){
    $randString="";
    $charUniverse="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    for($i=0; $i<$nbLetters; $i++){
        $randInt=rand(0,61);
        $randChar=$charUniverse[$randInt];
        $randString=$randString.$randChar;
    }
    return $randString;
}

function sendWelcomeEmail($email){
	$subject = "Blink Training Systems - Welcome";
	$body = "Thanks for registering with Blink Training Systems. I'm sure you'll enjoy using our system.";
	$from = "support@blinktrainingsystems.com";
	$headers = 'From: '. $from . "\r\n" .'Reply-To: '. $from;
	mail($email, $subject, $body, $headers, '-f'.$from);
}
?>