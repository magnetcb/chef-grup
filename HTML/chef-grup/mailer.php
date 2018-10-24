<?php

    // Only process POST reqeusts.
    if ($_SERVER["REQUEST_METHOD"] == "POST") {

        require("./mailphp/class.phpmailer.php");
        $mail = new PHPMailer();
        $mail->IsSMTP(true);
        $mail->From     = $_POST["email"];
        $mail->Sender   = $_POST["email"];
        $mail->AddReplyTo=($_POST["email"]);
        $mail->FromName = $_POST["name"];
        $mail->Host     = "mail.chefgrup.com";
        $mail->SMTPAuth = true;
        $mail->Port     = 587;
        $mail->CharSet = 'UTF-8';
        $mail->Username = "test@chefgrup.com";
        $mail->Password = "BMhq69O7";
        $mail->WordWrap = 50;
        $mail->IsHTML(true);
        $mail->Subject  = $_POST["konu"]." /PHP SMTP Ayarları/Mail Konusu";
        
        $body  = "Mail İçeriği Başlığı"."<br><br>";
        $body .= "Gönderen Adi		: ".$_POST["name"]."<br>";
        $body .= "Gönderen Soyadi	: ".$_POST["surname"]."<br>";
        $body .= "E-posta Adresi	: ".$_POST["email"]."<br>";
        $body .= "Telefonu          : ".$_POST["phone_number"]."<br>";
        $body .= "Mesaj             : ".$_POST["message"]."<br>";
        
        $textBody = $body;
        $mail->Body = $body;
        $mail->AltBody = $text_body;
        $mail->AddAddress("denizsimsek@magnetcb.com");
        
        // Send the email.
        if ($mail->Send()) {
            // Set a 200 (okay) response code.
            http_response_code(200);
        } else {
            // Set a 500 (internal server error) response code.
            http_response_code(500);
        }

        $mail->ClearAddresses();
        $mail->ClearAttachments();

    } else {
        // Not a POST request, set a 403 (forbidden) response code.
        http_response_code(403);
        echo "There was a problem with your submission, please try again.";
    }

?>