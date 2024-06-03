// JavaScript per HEADER

// Menu a Tendina 
document.addEventListener("DOMContentLoaded", function() {
    var dropdownMenu = document.getElementById("menu-a-tendina-header");
    var dropdownContent = document.getElementById("contenuto-menu-a-tendina-header");

    dropdownMenu.addEventListener("click", function() {
        dropdownContent.classList.toggleContent("show");
    });

    window.addEventListener("click", function(event) {
        if (!dropdownMenu.contains(event.target)) {
            dropdownContent.classList.remove("show");
        }
    });
});

// Pulsante Autenticazione 
document.addEventListener('DOMContentLoaded', function() {
    var modal = document.getElementById("autenticazione-modale");

    var span = document.getElementsByClassName("pulsante-chiusura-autenticazione")[0];

    document.getElementById('pulsante-accedi').addEventListener('click', function(event) {
        modal.style.display = "block";
        event.preventDefault(); 
        document.body.classList.add("no-scroll");
    });

    document.getElementById('pulsante-registrati').addEventListener('click', function(event) {
        modal.style.display = "block";
        event.preventDefault(); 
        document.body.classList.add("no-scroll");
    });

    span.addEventListener('click', function() {
        modal.style.display = "none";
        document.body.classList.remove("no-scroll");
    });

    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            document.body.classList.remove("no-scroll");
        }
    });
});