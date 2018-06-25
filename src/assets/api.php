<?php

header("Access-Control-Allow-Origin: *");


$name = $_GET["name"];
$num = $_GET["num"];
$em = $_GET["email"];
$message = $_GET["message"];

$to = "webmaster@mahadeeni.co.za;subreyya@mahadeeni.co.za";

$subject = "Web Enquiry : " . $_GET["subject"];
$headers .= "From: Website Enquiry <webmaster@mahadeeni@.co.za> \r\n";
$headers .=  "Reply-To: " . $em . "\r\n";

// TODO VALIDATE (already validating through angular though)
if (isset($name) && isset($num) && isset($em) && isset($subject) && isset($message)) {
    $message = "User Enquiry @ www.mahadeeni.co.za \n Who " 
               . $name 
               . "\n Subject " 
               . $subject .
                " message " 
                . $message;
    if(mail($to,$subject,$message,$headers)) {
       echo json_encode("complete");
    } else {
        echo json_encode("error sending enquiry");
    }
    
} else {
    echo json_encode("Validation : check fields"); 
}


?>