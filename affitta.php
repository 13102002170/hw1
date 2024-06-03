<!DOCTYPE html>
<html lang="it"> 

<!-- HEAD -->
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name='author' content="Stefano Caramagno">

    <title>Affitta il  tuo alloggio su Airbnb</title>
    
    <link href="https://fonts.google.com/specimen/Anybody" rel="stylesheet"> 
    <link rel="shortcut icon" href="imgs_loghi_homepage/favicon.ico" type="image/x-icon">  

    <!-- Collegamento ai File CSS -->
    <link rel="stylesheet" href="pagina_affitta/affitta.css">
    <link rel="stylesheet" href="pagina_affitta/header.css">
    <link rel="stylesheet" href="pagina_affitta/main.css">
    <link rel="stylesheet" href="footer.css">
    
    <!-- Collegamento ai File JavaScript -->
    <script src="header.js" defer></script>
    <script src="pagina_affitta/main.js" defer></script>
    <script src="footer.js" defer></script>
   
    <script async src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAQ2MCQfgrmA5Q3-Vhac7MZQDZoXb3BHCk&callback=console.debug&libraries=maps,marker&v=beta"></script>
</head>

<!-- BODY -->
<body>

    <?php

        include 'database_connessione.php';
        include 'pagina_affitta/header.php';
        include 'pagina_affitta/main.php';
        include 'footer.php';
        include 'database_disconnessione.php';
        
    ?>
    
</body>

</html> 
