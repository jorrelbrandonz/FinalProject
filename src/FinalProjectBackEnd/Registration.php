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

echo $name;
echo $email;

if($name && $email && $password && $age){
$sql = "INSERT INTO users (name,email,password,age) VALUES ('$name','$email', '$password','$age')";
};

$result = mysqli_query($con,$sql);

if ($result) {
$response = array('status' => 'invalid');
echo json_encode($response);
}
else{
    $response = array('status' => 'valid');
    echo json_encode($response);
}

$con->close();

?>


