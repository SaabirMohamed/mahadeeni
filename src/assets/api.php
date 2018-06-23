<?php

header("Access-Control-Allow-Origin: *");


$fn = $_GET["fn"];
$ln = $_GET["ln"];
$em = $_GET["em"];
$txt = $_GET["txt"];
$cat = $_GET["cat"];
$cit = $_GET["cit"];
$tel = $_GET["tel"];
$to = "consulate@kuwaitembassy.co.za,saabir@kuwaitembassy.co.za";
// $to = "saabir@kuwaitembassy.co.za";
$subject = "Web Enquiry : " . $_GET["cat"];
$headers .= "From: Web Enquiry <webmaster@kuwaitembassy@.co.za> \r\n";
$headers .=  "Reply-To: " . $em . "\r\n";

// TODO VALIDATE (already validating through angular though)
if (isset($fn) && isset($ln) && isset($em) && isset($txt) && isset($cat) && isset($cit) && isset($tel)) {
    $message = "Attn: Consular Department \n\n My name is " . $fn . "\n This is a " . $cat . " enquiry, \n I am a " . $cit . ". \nYou may reach me via: \n" . $em . "\nor call me on: " . $tel . "\nFuther to this please elaborate on the following: \n" . $txt . "\n\n\nThank you and Regards \n \n \n " . $fn . " " . $ln;
    if(mail($to,$subject,$message,$headers)) {
       echo json_encode("complete");
    } else {
        echo json_encode("error sending enquiry");
    }
    
} else {
    echo json_encode("check fields"); 
}


?>