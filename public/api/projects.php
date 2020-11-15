<?php
$data = json_decode(file_get_contents("php://input"), true);

$root=  $_SERVER['DOCUMENT_ROOT'];
$client = 'asalheen1997@gmail.com';

$filename = 'mechanical_recycling_business_plan_final.pdf';
$path = $root . '/pdf';
$file = $path . "/" . $filename;

$content = file_get_contents($file);
$content = chunk_split(base64_encode($content));

$eol = "\r\n";
$separator = md5(time());

$fullName = $data['fullName'];
$email = $data['email'];
$phone = $data['phone'];
$projectSelected = $data['projectSelected'];
$subscription = $data['subscription'];
$mail_subject = "Plastacraft.ca - Business plan [". $projectSelected ."]";

$from_email = 'noreply@blastcraft.ca';

$headers .= "From: $from_email" . "\r\n";
$headers .= "Reply-To: $from_email" . "\r\n";
$headers .= "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-Type: multipart/mixed; boundary=\"" . $separator . "\"" . "\r\n";
$headers .= "Content-Transfer-Encoding: 7bit" . "\r\n";
$headers .= "This is a MIME encoded message." . "\r\n";
$headers .= 'X-Mailer: PHP/' . phpversion();


$user_message ='Thank you for your interest in Plastcraft. Attached PDF file is Mechanical Recycling business plan.';

$body = "--" . $separator . "\r\n";
$body .= "Content-Type: text/plain; charset=\"iso-8859-1\"" . "\r\n";
$body .= "Content-Transfer-Encoding: 8bit" . "\r\n";
$body .= $user_message . "\r\n";

$body .= "--" . $separator . "\r\n";
$body .= "Content-Type: application/octet-stream; name=\"" . $filename . "\"" . "\r\n";
$body .= "Content-Transfer-Encoding: base64" . "\r\n";
$body .= "Content-Disposition: attachment" . "\r\n";
$body .= $content . "\r\n";
$body .= "--" . $separator . "--";


$client_message = '<table style="width:100%"><tr><td>Full Name: '.$fullName.'</td></tr><tr><td>Email: '.$email.'</td></tr><tr><td>Phone: '.$phone.'</td></tr><tr><td>Project Selected: '.$projectSelected.'</td></tr><tr><td>Subscription: '.$subscription.'</td></tr></table>';

$clientHeaders = 'MIME-Version: 1.0' . "\r\n";
$clientHeaders .= "From: " . $from_email . "\r\n";
$clientHeaders .= "Reply-To: $from_email" . "\r\n";
$clientHeaders .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
$clientHeaders .= 'X-Mailer: PHP/' . phpversion();


if($projectSelected == 'mechanical-recycling'){
    mail($email,$mail_subject,$body,$headers);
}
else{
    $user_message='<div>Thank you for your interest in Plastcraft. Chemical Recycling business plan currently unavailable. We will keep you posted.</div>';
    mail($email,$mail_subject,$user_message,$clientHeaders);
}

mail($client,$mail_subject,$client_message,$clientHeaders);




