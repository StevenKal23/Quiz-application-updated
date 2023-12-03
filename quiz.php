<?php
  $username = $_POST["username"];
  $email = $_POST["email"];
  $password = password_hash($_POST['password'], PASSWORD_DEFAULT);
  
  $connection = mysqli_connect("localhost", "root", "", "form") or die("connection failed");
  
  if ($username != NULL && $email != NULL && $password != NULL) {
  
      $mysql = "INSERT INTO quiz(username,email,password) VALUES ('{$username}','{$email}','{$password}')";
      $result = mysqli_query($connection, $mysql) or die("query Failed");
  
      // Redirect to welcome page
      header("location: index.html");
  } else {
      // Redirect to error page
      header("location: error.html");
  }
  
  mysqli_close($connection);
  ?>