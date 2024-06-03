// JavaScript per MAIN CONTENT

// Scorrimento Immagini degli Immobili
function cambiaImmagine(id, direzione) {
  var immagini = window['immagini' + id];
  var imgElem = document.querySelector('img[data-id="' + id + '"]');
  var alt = imgElem.alt;
  var indiceCorrente = immagini.indexOf(imgElem.src.split('/').pop());

  var nuovoIndice = indiceCorrente + direzione;
  if (nuovoIndice >= immagini.length) nuovoIndice = 0;
  if (nuovoIndice < 0) nuovoIndice = immagini.length - 1;

  imgElem.src = 'imgs_immobili_homepage/' + immagini[nuovoIndice];
  imgElem.alt = alt;
}

// Pulsante di Autenticazione / Pulsante di Aggiungi ai Preferiti
function isUserLoggedIn() {
  return document.cookie.split(';').some((item) => item.trim().startsWith('user_logged_in='));
}

document.addEventListener('DOMContentLoaded', function() {
  cuoreModale();
});

function cuoreModale() {
  var modalPreferiti = document.getElementById("preferiti-modale");
  var modalAutenticazione = document.getElementById("autenticazione-modale");
  var spanPreferiti = document.getElementsByClassName("pulsante-chiusura-preferiti")[0];
  var spanAutenticazione = document.getElementsByClassName("pulsante-chiusura-autenticazione")[0];

  document.querySelectorAll('.cuore-sovrapposto').forEach(function(cuoreSovrapposto) {
      cuoreSovrapposto.addEventListener('click', function(event) {
          var id = cuoreSovrapposto.dataset.id;
          console.log("Cuore sovrapposto cliccato, ID:", id);

          var loggedIn = isUserLoggedIn();

          if (loggedIn) {
              modalPreferiti.style.display = "block";
          } else {
              modalAutenticazione.style.display = "block";
          }

          event.preventDefault();
          document.body.classList.add("no-scroll");
      });
  });

  spanPreferiti.addEventListener('click', function() {
      modalPreferiti.style.display = "none";
      document.body.classList.remove("no-scroll");
  });

  spanAutenticazione.addEventListener('click', function() {
      modalAutenticazione.style.display = "none";
      document.body.classList.remove("no-scroll");
  });

  window.addEventListener('click', function(event) {
      if (event.target == modalPreferiti) {
          modalPreferiti.style.display = "none";
          document.body.classList.remove("no-scroll");
      } else if (event.target == modalAutenticazione) {
          modalAutenticazione.style.display = "none";
          document.body.classList.remove("no-scroll");
      }
  });
}

// Pulsante Visiona il Meteo
document.addEventListener("DOMContentLoaded", function() {
  var modal = document.getElementById('meteo-modale');

  var btn = document.getElementById("pulsante-visiona-il-meteo-main");

  btn.addEventListener("click", function() {
    modal.style.display = "block";
    document.body.classList.add("no-scroll");
  });

  var span = document.getElementsByClassName("pulsante-chiusura-meteo")[0];

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

// Pulsante Visiona il Calendario Festivita
document.addEventListener("DOMContentLoaded", function() {
  var modal = document.getElementById('calendario-festivita-modale');

  var btn = document.getElementById("pulsante-visiona-il-calendario-festivita-main");

  btn.addEventListener("click", function() {
    modal.style.display = "block";
    document.body.classList.add("no-scroll");
  });

  var span = document.getElementsByClassName("pulsante-chiusura-calendario-festivita")[0];

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

// Pulsante Ricerca di Brani Musicali
document.addEventListener("DOMContentLoaded", function() {
  var modal = document.getElementById('brani-musicali-modale');

  var btn = document.getElementById("pulsante-ricerca-brani-musicali-main");

  btn.addEventListener("click", function() {
    modal.style.display = "block";
    document.body.classList.add("no-scroll");
  });

  var span = document.getElementsByClassName("pulsante-chiusura-brani-musicali")[0];

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

