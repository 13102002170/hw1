<!DOCTYPE html>
<html lang="it"> 

<!-- HEAD -->
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name='author' content="Stefano Caramagno">

    <title>Le tue liste · Preferiti - Airbnb</title>
    
    <link href="https://fonts.google.com/specimen/Anybody" rel="stylesheet"> 
    <link rel="shortcut icon" href="imgs_loghi_homepage/favicon.ico" type="image/x-icon"> 

    <!-- Collegamento ai File CSS -->
    <link rel="stylesheet" href="pagina_preferiti/preferiti.css">
    <link rel="stylesheet" href="header.css">
    <link rel="stylesheet" href="main.css">
    <link rel="stylesheet" href="footer.css">
    
    <!-- Collegamento ai File JavaScript -->
    <script src="header.js" defer></script>
    <script src="pagina_homepage/header.js" defer></script>
    <script src="footer_section1.js" defer></script>
    <script src="pagina_preferiti/main_api.js" defer></script> 
    <script src="footer.js" defer></script>
</head>

<!-- BODY -->
<body>

    <?php

        session_start();
    
        include 'database_connessione.php';
        include 'header.php';
        include 'pagina_preferiti/main.php';
        include 'footer.php';
        include 'database_disconnessione.php';

    ?>
    
</body>

</html> 
