<?php
    header("Content-Type: application/json");

    include '../database_connessione.php';

    $tipologia = isset($_GET['tipologia']) ? $_GET['tipologia'] : '';

    $sql = "SELECT IMMOBILI.* 
            FROM IMMOBILI";
    if (!empty($tipologia)) {
        $sql .= " WHERE tipologia = '" . $conn->real_escape_string($tipologia) . "'";
    }

    $result = $conn->query($sql);

    if (!$result) {
        echo json_encode(['error' => 'Errore nella query: ' . $conn->error]);
        exit;
    }

    $immobili = array();
    if ($result->num_rows > 0) {
        while($row = $result->fetch_assoc()) {
            $immobili[] = $row;
        }
    }

    echo json_encode($immobili);
?>