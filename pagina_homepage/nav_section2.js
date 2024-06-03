// JavaScript per NAVIGATION BAR (Section 2)

// Barra di Scorrimento 
document.addEventListener('DOMContentLoaded', function() {
    var container = document.getElementById('flex-container1-nav-section2');
    var leftButton = document.getElementById('pulsante-scorrimento-a-sinistra');
    var rightButton = document.getElementById('pulsante-scorrimento-a-destra');
    var scrollStep = 750; 

    leftButton.addEventListener('click', function() {
        var currentPosition = container.scrollLeft;
        var newPosition = currentPosition - scrollStep;

        container.scrollTo({
            left: newPosition,
            behavior: 'smooth'
        });
    });

    rightButton.addEventListener('click', function() {
        var currentPosition = container.scrollLeft;
        var newPosition = currentPosition + scrollStep;
        var maxScroll = container.scrollWidth - container.clientWidth;

        if (newPosition > maxScroll) {
            newPosition = maxScroll;
        }
        
        container.scrollTo({
            left: newPosition,
            behavior: 'smooth'
        });
    });
});

// Pulsante Filtri
document.addEventListener("DOMContentLoaded", function() {
    var modal = document.getElementById('filtri-modale');
  
    var btn = document.getElementById("pulsante-filtri");
  
    btn.addEventListener("click", function() {
      modal.style.display = "block";
      document.body.classList.add("no-scroll");
    });
  
    var span = document.getElementsByClassName("pulsante-chiusura-filtri")[0];
  
    span.addEventListener("click", function() {
      modal.style.display = "none";
      document.body.classList.remove("no-scroll");
    });
  
    window.addEventListener("click", function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
        document.body.classList.remove("no-scroll");
      }
    });
});
