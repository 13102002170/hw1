 <!-- PHP per AGGGIUNGERE ai PREFERITI un IMMOBILE -->
 <?php

    session_start();
    
    include '../database_connessione.php';

    if(isset($_SESSION['email']) && isset($_COOKIE['immobile_id'])) {
        // Recupera l'email dell'utente dalla sessione
        $email = $_SESSION['email'];

        // Recupera l'ID dell'immobile dalla cookie
        $immobile_id = $_COOKIE['immobile_id'];

        // Prepara la query per inserire i dati nella tabella PREFERITI
        $sql = "INSERT INTO PREFERITI (id_utente, id_immobile) VALUES (?, ?)";

        // Prepara l'istruzione SQL
        $stmt = $conn->prepare($sql);

        // Associa i parametri
        $stmt->bind_param("ii", $id_utente, $id_immobile);

        // Ottieni l'ID dell'utente dalla tabella UTENTI
        $query_utente = "SELECT id FROM UTENTI 
                         WHERE email = ?";
        $stmt_utente = $conn->prepare($query_utente);
        $stmt_utente->bind_param("s", $email);
        $stmt_utente->execute();
        $result_utente = $stmt_utente->get_result();

        // Verifica se è stato trovato un utente con quell'email
        if ($result_utente->num_rows > 0) {
            // Ottieni l'ID dell'utente
            $row_utente = $result_utente->fetch_assoc();
            $id_utente = $row_utente['id'];

            // Associa l'ID dell'immobile
            $id_immobile = $_COOKIE['immobile_id'];

            // Esegui l'istruzione SQL per inserire l'associazione nella tabella PREFERITI
            if ($stmt->execute()) {
                echo "L'immobile è stato aggiunto ai preferiti.";
            } else {
                echo "Si è verificato un errore durante l'aggiunta dell'immobile ai preferiti.";
            }
        } else {
            echo "Nessun utente trovato con quell'email.";
        }

        // Chiudi le connessioni e le istruzioni preparate
        $stmt->close();
        $stmt_utente->close();
    } else {
        echo "Non hai effettuato l'accesso o non hai selezionato alcun immobile.";
    }

    include '../database_disconnessione.php';

?>