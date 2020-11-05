<?php
$data = json_decode(file_get_contents("php://input"), true);

//$to = 'info@plastacraft.ca';
$to = 'iliasvinin@gmail.com';
$fullName = $data['fullName'];
$email = $data['email'];
$phone = $data['phone'];
$projectSelected = $data['projectSelected'];
$subscription = $data['subscription'];
$mail_subject = "Plastacraft.ca - Business plan [". $projectSelected ."]";

$headers = 'MIME-Version: 1.0' . "\r\n";
$headers .= "From: " . $email . "\r\n";
$headers .= "Reply-To: $email" . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
$headers .= 'X-Mailer: PHP/' . phpversion();

$message = '<table style="width:100%">
        <tr><td>Full Name: '.$fullName.'</td></tr>
        <tr><td>Email: '.$email.'</td></tr>
        <tr><td>Phone: '.$phone.'</td></tr>
        <tr><td>Project Selected: '.$projectSelected.'</td></tr>
        <tr><td>Subscription: '.$subscription.'</td></tr>
        <tr><td><a href="mechanical_recycling_business_plan_final.pdf" target="_blank">Click to download PDF</a></td></tr>
    </table>';

if (@mail($to, $mail_subject, $message, $headers)) {
    echo json_encode( 'The email has been sent.');
} else {
    echo json_encode( 'failed' );
}
