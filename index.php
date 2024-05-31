<!DOCTYPE html>
<html lang="it"> 

<!-- HEAD -->
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name='author' content="Stefano Caramagno">

    <!-- Impostiamo l'intestazione Referrer-Policy in modo da poter utilizzare http e localhost -->
    <meta name="referrer" content="no-referrer-when-downgrade" />

    <title>Airbnb</title>
    
    <link href="https://fonts.google.com/specimen/Anybody" rel="stylesheet"> 
    <link rel="shortcut icon" href="imgs_loghi_homepage/favicon.ico" type="image/x-icon"> 

    <!-- Collegamento ai File CSS -->
    <link rel="stylesheet" href="pagina_homepage/homepage.css">
    <link rel="stylesheet" href="pagina_homepage/homepage_mobile.css">
    <link rel="stylesheet" href="header.css">
    <link rel="stylesheet" href="main.css">
    <link rel="stylesheet" href="nav_section1.css">
    <link rel="stylesheet" href="pagina_homepage/nav_section2.css">
    <link rel="stylesheet" href="footer.css">
    
    <!-- Collegamento ai File JavaScript -->
    <script src="header.js" defer></script>
    <script src="nav_section1.js" defer></script>
    <script src="pagina_homepage/nav_section2.js" defer></script>
    <script src="pagina_homepage/main.js" defer></script>
    <script src="footer.js" defer></script>
    <script src="pagina_homepage/main_api.js" defer></script> 
    <script src="pagina_homepage/api_esterne.js" defer></script>

    <script async src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAQ2MCQfgrmA5Q3-Vhac7MZQDZoXb3BHCk&callback=console.debug&libraries=maps,marker&v=beta"></script>

    <!-- Caricameto della libreria client -->
    <script src="https://accounts.google.com/gsi/client" async></script>
</head>

<!-- BODY -->
<body>
    
    <?php

        session_start();

        include 'database_connessione.php';
        include 'header.php';
        include 'pagina_homepage/nav.php';
        include 'pagina_homepage/main.php';
        include 'footer.php';
        include 'database_disconnessione.php';

    ?>

</body>

</html> 
