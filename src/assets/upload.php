<?php
header('Access-Control-Allow-Origin: *'); 


if(isset($_FILES['uploadFile'])) {
    // detects
    $uploadName = $_FILES['uploadFile']['name'];
    $uploadName = mt_rand(100000,99999) . $uploadName; //making name unique
    $uploadTmp = $_FILES['uploadFile']['tmp_name'];
    $uploadType = $_FILES['uploadFile']['type'];
}
$uploadName = preg_replace("#[^a-z0-9.]#i","",$uploadName);
if(!$uploadTmp){
    die("no file selected / or found in payload");
}else {
    move_uploaded_file($uploadTmp,"/$uploadName");
    echo json_encode("http://www.electromediacell.co.za/assets/svr/uploads/$uploadName");
}

?>