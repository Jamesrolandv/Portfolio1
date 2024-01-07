<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;


require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/SMTP.php';

if(isset($_POST['send'])){
    $mail = new PHPMailer(true);

    $mail->isSMTP();
    $mail->Host = 'stmp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'vedanajamesroland@gmail.com';
    $mail->Password = 'gfkq coob lvwa gixm';
    $mail->SMTPSecure = 'ssl';
    $mail->Port = 465;
    $mail->setFrom('vedanajamesroland@gmail.com');
    $mail->addAddress($_POST['email']);
    $mail->isHTML(true);
    $mail->Subject = $_POST['name'];
    $mail->Body = $_POST['msg'];
    $mail->send();

    echo
    '
    <script>
        alert("Sent Succesfully");
        document.location.href = "index.html";
    </script>
    ';
}

?>