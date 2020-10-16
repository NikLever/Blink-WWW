<?php
 //$to = "nik.j.lever@gmail.com";
 $to = "nik@catalystpics.co.uk";
 $subject = "Blink Training Systems - Support";
 $body = "You requested your password it is 5!*321Q^";
 $crlf = "\r\n";
 //$from = "nik.j.lever@gmail.com";
 $from = "support@blinktrainingsystems.com";
 $headers = 'From: '. $from . $crlf .
					'Reply-To: '. $from;
 //ini_set ( "sendmail_from" , $from );
 if (mail($to, $subject, $body, $headers, '-f'.$from)) {
   echo("<p>Email successfully sent!</p>");
  } else {
   echo("<p>Email delivery failed…</p>");
  }
?>
