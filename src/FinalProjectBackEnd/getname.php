<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: *");
header("Access-Control-Allow-Headers: Content-Type,Access-Control-Allow-Headers, Authorization, X-Requested-With");

include 'connect.php';

if(isset($_POST)){
    $data = file_get_contents("php://input");
    $email = json_decode($data, true);
     $email2 = $email['email'];
}
$data = array();

$sql = "SELECT name,age,gender FROM users WHERE email = '$email2'";
$result = mysqli_query($con, $sql);

while ($row = mysqli_fetch_assoc($result)) {
    $data = $row;
}
echo json_encode($data);

$con->close();
?>