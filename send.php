<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;


require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/SMTP.php';

// if(isset($_POST['send'])){


//     $mail->isSMTP();
//     $mail->Host = 'stmp.gmail.com';
//     $mail->SMTPAuth = true;
//     $mail->Username = 'vedanajamesroland@gmail.com';
//     $mail->Password = 'gfkq coob lvwa gixm';
//     $mail->SMTPSecure = 'ssl';
//     $mail->Port = 465;
//     $mail->setFrom('vedanajamesroland@gmail.com');
//     $mail->addAddress($_POST['email']);
//     $mail->isHTML(true);
//     $mail->Subject = $_POST['name'];
//     $mail->Body = $_POST['msg'];
//     $mail->send();

//     echo
//     '
//     <script>
//         alert("Sent Succesfully");
//         document.location.href = "index.html";
//     </script>
//     ';
// }
$mail = new PHPMailer(true);

try {
    //Server settings
    $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
    $mail->isSMTP();                                            //Send using SMTP
    $mail->Host       = 'smtp.gmail.com';                     //Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
    $mail->Username   = 'vedanajamesroland@gmail.com';                     //SMTP username
    $mail->Password   = 'gfkq coob lvwa gixm';                               //SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
    $mail->Port       = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

    //Recipients
    $mail->setFrom('vedanajamesroland@gmail.com');
    $mail->addAddress($_POST['email']);     //Add a recipient

    //Content
    $mail->isHTML(true);                                  //Set email format to HTML
    $mail->Subject = $_POST['name'];
    $mail->Body    = $_POST['msg'];

    $mail->send();
    echo 'Message has been sent';
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}

?>