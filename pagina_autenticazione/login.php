<?php
    session_start();

    include '../database_connessione.php';

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $password = $_POST['password'];
        $email = $_SESSION['email'];

        $sql = "SELECT UTENTI.* 
                FROM UTENTI 
                WHERE UTENTI.email = '$email' AND password = '$password'";
                
        $result = $conn->query($sql);

        if ($result->num_rows == 1) {
            $_SESSION['email'] = $email;
            
            setcookie('user_logged_in', true, 0, "/"); 
            header("Location: ../index.php");
            exit(); 
        } else {
            $error_message = "Credenziali non valide. Riprova.";
        }
    }

    include '../database_disconnessione.php';
?>