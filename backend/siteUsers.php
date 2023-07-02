<?php

// Database configuration
$servername = "localhost";
$username = "root";
$password = "";
$database = "AnywareWebsite";

// Create a connection
$conn = new mysqli($servername, $username, $password, $database);

// Check the connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// SQL query to fetch data from the table
$fullName = $_POST['fullName'];
$email = $_POST['email'];
$mobile=$_POST['mobile'];
$referalCode=$_POST['referalCode'];
$restaurantName=$_POST['restaurantName'];


$sql = "INSERT INTO siteusers(email,mobile,fullName,referalCode,restaurantName) VALUES ($email,$mobile,$fullName,$referalCode,$restaurantName)";

// Execute the query
$result = $conn->query($sql);

// Check if the query was successful
if ($result===TRUE) {
    // Fetch the data
    echo "success";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// Close the connection
$conn->close();

?>
