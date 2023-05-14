<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type,Access-Control-Allow-Headers, Authorization, X-Requested-With");

include 'connect.php';


$name = $_POST['name'];
$email = $_POST['email'];
$password = $_POST['pass'];
$age = $_POST['age'];
$gender = $_POST['gender'];


if($name && $email && $password && $age){
$sql = "INSERT INTO users (name,email,password,age,gender) VALUES ('$name','$email', '$password','$age','$gender')";
};

$result = mysqli_query($con,$sql);

if(!$result){
$response = http_response_code(404);
header($response);
}
else{
$response = http_response_code(200);
header($response);
}

$con->close();

?>


