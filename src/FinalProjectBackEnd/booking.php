<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type,Access-Control-Allow-Headers, Authorization, X-Requested-With");

include 'connect.php';


$email = $_POST['email'];
$flightNumber = $_POST['flightNumber'];


if($email && $flightNumber){
$sql = "INSERT INTO booked (email,flightNumber) VALUES ('$email', '$flightNumber')";
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


