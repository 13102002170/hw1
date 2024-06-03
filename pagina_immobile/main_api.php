<?php
    header('Content-Type: application/json');

    // Connessione al database
    include '../database_connessione.php';

    $id = isset($_GET['id']) ? intval($_GET['id']) : 0;
    $response = [];

    if ($id > 0) {
        $sql = "SELECT * FROM IMMOBILI WHERE id = " . $conn->real_escape_string($id);
        $result = $conn->query($sql);

        if ($result->num_rows > 0) {
            $response['data'] = $result->fetch_assoc();
        } else {
            $response['error'] = "Immobile non trovato";
        }
    } else {
        $response['error'] = "ID immobile non valido";
    }

    echo json_encode($response);
?>
