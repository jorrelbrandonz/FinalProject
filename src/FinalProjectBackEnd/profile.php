<?php
session_start();
header("Access-Control-Allow-Origin: *");

    $response = array(
        "email" => $_SESSION['email'],
        "pass" => $_SESSION['password']
    );
    echo json_encode($response);
    http_response_code(200);

?>