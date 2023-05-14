<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: *");
header("Access-Control-Allow-Headers: Content-Type,Access-Control-Allow-Headers, Authorization, X-Requested-With");

include 'connect.php';

$email = $_POST['email'];
$password = $_POST['pass'];
$success = false;
$data[] = array();

$sql = "SELECT * FROM users WHERE email = '$email' AND password = '$password'";
$result = mysqli_query($con, $sql);


if (mysqli_num_rows($result)) { 
    $row = mysqli_fetch_assoc($result); //this already gets the row therefore, get all the data in the row and header it
    if ($row['email'] === $email && $row['password'] === $password) {
        while(($row)) {
            $data[] = $row;
        }
        $success = true;
    }
}


if ($success) {
    header($data);
    http_response_code(200);
} else {
    http_response_code(404);
}

$con->close();
?>