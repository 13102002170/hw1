<?php
    include '../database_connessione.php';

    $email = $_POST['email'];

    $sql = "SELECT UTENTI.* 
            FROM UTENTI 
            WHERE UTENTI.email = '$email'";

    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        session_start();
        $_SESSION['email'] = $email;
        header("Location: login.html");
    } else {
        header("Location: registrazione.html");
    }

    include '../database_disconnessione.php';
?>
