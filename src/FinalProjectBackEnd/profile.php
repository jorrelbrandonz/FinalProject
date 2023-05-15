<?php
session_start();
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: *");
header("Access-Control-Allow-Headers: Content-Type,Access-Control-Allow-Headers, Authorization, X-Requested-With");

include 'connect.php';

$email = $_POST['email'];
$data[] = array();

$sql = "SELECT * FROM booked WHERE email = '$email'";
$result = mysqli_query($con, $sql);

if (mysqli_num_rows($result)) { 
    $row = mysqli_fetch_assoc($result); //this already gets the row therefore, get all the data in the row and header it
    if ($row['email'] == $email) {
        $sqlFlights = "SELECT * FROM flights";
        $flightRow = mysqli_query($con, $sqlFlights);
            if (!$id) echo '[';
            for ($i=0 ; $i<mysqli_num_rows($flightRow) ; $i++) {
            echo ($i>0?',':'').json_encode(mysqli_fetch_object($flightRow));
            }
            if (!$id) echo ']';
    else {
        echo mysqli_affected_rows($con);
    }
    }
}

$response = array(
        "email" => $_SESSION['email'],
        "pass" => $_SESSION['password']
    );
    echo json_encode($response);
    http_response_code(200);

$con->close();
?>