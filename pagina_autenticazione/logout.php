<?php
    // Avvia la sessione
    session_start();
    
    // Distruggi tutte le variabili di sessione
    session_unset();
    
    // Distruggi la sessione
    session_destroy();
    
    // Elimina il cookie di autenticazione
    setcookie('user_logged_in', '', time() - 3600, '/');
    
    // Reindirizza l'utente alla homepage
    header("Location: ../index.php"); 
    exit();
?>
