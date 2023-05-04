<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type,Access-Control-Allow-Headers, Authorization, X-Requested-With");

include 'connect.php';

$email = $_POST['email'];
$password = $_POST['pass'];

$sql = "SELECT * FROM users WHERE email = '$email' AND password = '$password'";
$result = mysqli_query($con, $sql);

if(mysqli_num_rows($result)){
   $row = mysqli_fetch_assoc($result);
   if ($row['email'] === $email && $row['password'] === $password){
    $response = http_response_code(200);
    header($response);
}
}
else{
    $response = http_response_code(404);
    header($response);
}

$con->close();
?>


