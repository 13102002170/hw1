<?php
    session_start();
    // Controlla se l'utente è loggato
    if(isset($_SESSION['email'])) {
        // Recupera l'email dell'utente dalla sessione
        $email = $_SESSION['email'];

        include '../database_connessione.php';

        // Prepara la query per recuperare gli immobili preferiti dell'utente
        $query_immobili = "SELECT IMMOBILI.*
                           FROM IMMOBILI
                           INNER JOIN PREFERITI ON IMMOBILI.id = PREFERITI.id_immobile
                           INNER JOIN UTENTI ON PREFERITI.id_utente = UTENTI.id
                           WHERE UTENTI.email = ?";
        $stmt_immobili = $conn->prepare($query_immobili);
        $stmt_immobili->bind_param("s", $email);
        $stmt_immobili->execute();
        $result_immobili = $stmt_immobili->get_result();

        // Array per memorizzare i dati degli immobili
        $immobili = array();

        // Verifica se sono presenti immobili nei preferiti
        if ($result_immobili->num_rows > 0) {
            // Cicla attraverso i risultati e memorizza i dati degli immobili nell'array
            while($row_immobile = $result_immobili->fetch_assoc()) {
                $immobili[] = $row_immobile;
            }
        }

        // Restituisci i dati degli immobili in formato JSON
        header('Content-Type: application/json');
        echo json_encode($immobili);
    } else {
        // Se l'utente non è loggato, restituisci un messaggio di errore
        echo json_encode(array('error' => 'Non hai effettuato l\'accesso.'));
    }
?>