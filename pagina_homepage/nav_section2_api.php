<?php
    header("Content-Type: application/json");

    include '../database_connessione.php';

    $sql = "SELECT TIPOLOGIE_ALLOGGIO.*
            FROM TIPOLOGIE_ALLOGGIO";

    $result = $conn->query($sql);

    $data = array();

    if ($result->num_rows > 0) {
        while($row = $result->fetch_assoc()) {
            $data[] = $row;
        }
    }

    header('Content-Type: application/json');
    echo json_encode($data);
?>


