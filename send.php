<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;


require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/SMTP.php';

$mail = new PHPMailer(true);

try {
    //Server settings
    $mail->isSMTP();                                            //Send using SMTP
    $mail->Host       = 'smtp.gmail.com';                     //Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
    $mail->Username   = 'vedanajamesroland@gmail.com';                     //SMTP username
    $mail->Password   = 'gfkq coob lvwa gixm';                               //SMTP password
    $mail->SMTPSecure = 'ssl';            //Enable implicit TLS encryption
    $mail->Port       = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

    //Recipients
    $mail->setFrom($_POST['email'], $_POST['name']);
    $mail->addAddress('vedanajamesroland@gmail.com');
    $mail->addReplyTo($_POST['email'], $_POST['name']);

    //Content
    $mail->isHTML(true);
    $mail->Subject = $_POST['name'];
    $mail->Body    = $_POST['msg']; 

    $mail->send();
    echo '
    <script>
        alert("Message Sent");
    </script>
    
    ';
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}

?>