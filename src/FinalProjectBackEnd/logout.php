<?php
session_start();
header("Access-Control-Allow-Origin: *");
echo $_SESSION['username'];

if(session_destroy()){
    http_response_code(200);
    exit; // Exit the script after sending the response
} else {
    http_response_code(404); 
    exit; // Exit the script after sending the response
}
?>