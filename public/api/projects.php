<?php
$data = json_decode(file_get_contents("php://input"), true);

$to = 'info@plastcraft.ca';
//$to = 'biramediagroup@gmail.com';
$fullName = $data['fullName'];
$email = $data['email'];
$phone = $data['phone'];
$projectSelected = $data['projectSelected'];
$subscription = $data['subscription'];
$mailSubject = "Plastacraft.ca Business Plan View - Projects";

$from_email = 'no-reply@plastcraft.ca';
$headers = 'MIME-Version: 1.0' . "\r\n";
$headers .= "From: " . $from_email . "\r\n";
$headers .= "Reply-To: $email" . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
$headers .= 'X-Mailer: PHP/' . phpversion();

$message = '<table style="width:100%">
        <tr><td>Full Name: '.$fullName.'</td></tr>
        <tr><td>Email: '.$email.'</td></tr>
        <tr><td>Phone: '.$phone.'</td></tr>
        <tr><td>Project Selected: '.$projectSelected.'</td></tr>
        <tr><td>Subscription: '.$subscription.'</td></tr>
    </table>';

if (@mail($to, $mailSubject, $message, $headers)) {
    echo json_encode( 'The message has been sent.');
} else {
    echo json_encode( 'failed' );
}

