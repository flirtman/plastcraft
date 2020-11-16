<?php
$data = json_decode(file_get_contents("php://input"), true);

$to = 'info@plastacraft.ca';
//$to = 'biramediagroup@gmail.com';
$fullName = $data['name'];
$email = $data['email'];
$phone = $data['phone'];
$company = $data['company'];
$serviceName = $data['serviceName'];
$messageTxt = $data['message'];
$mailSubject = 'Plastacraft.ca Proposal Form';

$fromEmail = 'no-reply@plastcraft.ca';
$headers = 'MIME-Version: 1.0' . '\r\n';
$headers .= "From: " . $fromEmail . '\r\n';
$headers .= "Reply-To: $email" . '\r\n';
$headers .= 'Content-type: text/html; charset=iso-8859-1' . '\r\n';
$headers .= "X-Mailer: PHP/" . phpversion();

$message = '<table style="width:100%">
        <tr><td>Full Name: '.$fullName.'</td></tr>
        <tr><td>Email: '.$email.'</td></tr>
        <tr><td>Phone: '.$phone.'</td></tr>
        <tr><td>Company: '.$company.'</td></tr>
        <tr><td>Products offered for sale: '.$serviceName.'</td></tr>
        <tr><td>Message: '.$messageTxt.'</td></tr>
    </table>';

if (@mail($to, $mailSubject, $message, $headers)) {
    echo json_encode( 'The message has been sent.');
} else {
    echo json_encode( 'failed' );
}
