<?php
session_start();
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: *");
header("Access-Control-Allow-Headers: Content-Type,Access-Control-Allow-Headers, Authorization, X-Requested-With");

include 'connect.php';

$email = $_POST['email'];
$data = array();

$sql = "SELECT flightNumber FROM booked WHERE email = '$email'";
$result = mysqli_query($con, $sql);

while ($row = mysqli_fetch_assoc($result)) {
    $flightNumber = (int)$row['flightNumber'];
    array_push($data, $flightNumber);
}
array_push($data, 54780);//TESTING

$sqlFlights = 'SELECT * FROM flights WHERE FlightNumber IN (' . implode(',', $data) . ')';

$result = mysqli_query($con, $sqlFlights);

// die if SQL statement failed
if (!$result) {
    http_response_code(404);
    die(mysqli_error($con));
  }
       
echo '[';
for ($i=0 ; $i<mysqli_num_rows($result) ; $i++) {
    echo ($i>0?',':'').json_encode(mysqli_fetch_object($result));
}
echo ']';

// if($_SESSION['email']!= NULL){
//     $response = array(
//         "email" => $_SESSION['email'],
//         "pass" => $_SESSION['password']
//     );
//     echo json_encode($response);
//     http_response_code(200);
// }

$con->close();
?>