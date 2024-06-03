// JavaScript per FOOTER 

// Barra di Ispirazione Viaggi
document.addEventListener("DOMContentLoaded", function() {
    var initialContent = document.getElementById('contenuto1-pulsante-barra-ispirazione-viaggi');
    if (initialContent) {
        initialContent.classList.add('active');
    }
});

function toggleContent(contentId) {
    var contents = document.querySelectorAll('.flex-container-footer-section1');
    contents.forEach(function(content) {
        content.classList.remove('active');
    });

    var selectedContent = document.getElementById(contentId);
    selectedContent.classList.add('active');

    var buttons = document.querySelectorAll('.pulsante-barra-ispirazione-viaggi');
    buttons.forEach(function(button) {
        button.style.fontWeight = 'normal';
    });
    var selectedButton = document.getElementById('pulsante-' + contentId);
    selectedButton.style.fontWeight = 'bold';
}

document.addEventListener('DOMContentLoaded', function() {
    var firstContentId = 'contenuto1-pulsante-barra-ispirazione-viaggi';
    toggleContent(firstContentId);
});

// Mostra Altro del Contenuto della di Barra di Ispirazione Viaggi
document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.getElementById("pulsante-mostra-altro-footer");
    const hiddenElements = document.querySelectorAll(".lista-visibile .elemento-nascosto");
    
    toggleButton.addEventListener("click", function() {

        hiddenElements.forEach(function(element) {
            element.classList.toggle("elemento-nascosto");
        });

        toggleButton.style.display = "none";
    });
});
