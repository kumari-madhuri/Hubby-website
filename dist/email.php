<?php
//fetching data from the form  
$Name = $_POST['name'];
$Email= $_POST['email'];
$Subject = $_POST['subject'];
$Message= $_POST['message'];
$to = "kaushal.kumar224@gmail.com";
$txt ="Name = " . $Name . "\r\n  Email = " . $Email . "\r\n  Subject = " . $Subject . "\r\n Message =" . $message;
$headers = "From:noreply@k-kumar.netlify.app";
if($email!=NULL){
    mail($to,$subject,$txt,$headers);
}
//redirect
header("Location:thankyou.html");
?>