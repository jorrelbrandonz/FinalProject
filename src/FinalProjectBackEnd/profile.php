<?php
error_reporting (E_ALL ^ E_NOTICE);

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: *");
header("Access-Control-Allow-Headers: Content-Type,Access-Control-Allow-Headers, Authorization, X-Requested-With");

include 'connect.php';

if(isset($_POST)){
    $data = file_get_contents("php://input");
    $email = json_decode($data, true);
    $email2 = $email["email"];
}

$data = array();

$sql = "SELECT flightNumber FROM booked WHERE email ='$email2'";
$result = mysqli_query($con, $sql);

while ($row = mysqli_fetch_assoc($result)) {
    $flightNumber = (int)$row['flightNumber'];
    array_push($data, $flightNumber);
}

$sqlFlights = 'SELECT * FROM flights WHERE FlightNumber IN (' . implode(',', $data) . ')';

$resultFlights = mysqli_query($con, $sqlFlights);

// die if SQL statement failed
if (!$result) {
    http_response_code(404);
    die(mysqli_error($con));
  }
       
echo '[';
for ($i=0 ; $i<mysqli_num_rows($resultFlights) ; $i++) {
    echo ($i>0?',':'').json_encode(mysqli_fetch_object($resultFlights));
}
echo ']';

$con->close();
?>