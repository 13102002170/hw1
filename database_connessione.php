<?php

    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "hw1";

    $conn = new mysqli($servername, $username, $password, $dbname);

    if ($conn->connect_error) {
        die("Connessione al database fallita: " . $conn->connect_error);
    }

?>