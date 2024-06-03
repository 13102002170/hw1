<?php
    include '../database_connessione.php';

    $username = $_POST['username'];
    $nome = $_POST['nome'];
    $cognome = $_POST['cognome'];
    $data_di_nascita = $_POST['data_di_nascita'];
    $email = $_POST['email'];
    $password = $_POST['password'];

    $sql = "INSERT INTO UTENTI (username, nome, cognome, data_di_nascita, email, password) 
            VALUES ('$username', '$nome', '$cognome', '$data_di_nascita', '$email', '$password')";

    if ($conn->query($sql) === TRUE) {
        echo "<div class='success'>Registrazione effettuata con successo! <a href='login.html'>Clicca qui</a> per effettuare il Login!</div>";
    } else {
        echo "<div class='error'>Errore durante la registrazione! Torna alla <a href='../index.php'>HomePage</a> per effettuare nuovamente la registrazione!</div>";
    }

    include '../database_disconnessione.php';
?>
