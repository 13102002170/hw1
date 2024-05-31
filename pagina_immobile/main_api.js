// Dati Immobile del Main Content
document.addEventListener('DOMContentLoaded', function() {
    const id = new URLSearchParams(window.location.search).get('id');

    if (id) {
        aggiornaImmobile(id);
    } else {
        document.getElementById('flex-container-main-section1').innerText = 'ID immobile non valido';
    }
});

function aggiornaImmobile(id) {
    fetch(`pagina_immobile/main_api.php?id=${encodeURIComponent(id)}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            if (data.error) {
                document.getElementById('flex-container-main-section1').innerText = data.error;
            } else {
                onJSON(data.data);
            }
        })
        .catch(error => {
            console.error('Errore nella richiesta API:', error);
            document.getElementById('flex-container-main-section1').innerText = 'Errore nel caricamento dei dati.';
        });
}

function onJSON(immobile) {
    const container = document.getElementById('flex-container-main-section1');
    container.innerHTML = '';

    const immagini = [
        immobile.immagine1, immobile.immagine2, immobile.immagine3,
        immobile.immagine4, immobile.immagine5, immobile.immagine6,
        immobile.immagine7, immobile.immagine8, immobile.immagine9
    ];

    immagini.forEach(immagine => {
        if (immagine) {
            const divFlexItem = document.createElement('div');
            divFlexItem.className = 'flex-item-main-section1';

            const divImmagine = document.createElement('div');
            divImmagine.className = 'immagine';

            const img = document.createElement('img');
            img.src = `imgs_immobili_homepage/${immagine}`;
            img.alt = immobile.alt;

            divImmagine.appendChild(img);
            divFlexItem.appendChild(divImmagine);
            container.appendChild(divFlexItem);
        }
    });

    const divDettagli = document.createElement('div');
    divDettagli.className = 'dettagli-immobile';

    const pLuogo = document.createElement('p');
    pLuogo.innerHTML = `<strong>Luogo:</strong> ${immobile.luogo}`;

    const pTipologiaHost = document.createElement('p');
    pTipologiaHost.innerHTML = `<strong>Tipologia Host:</strong> ${immobile.tipologia_host}`;

    const pIntervalloDate = document.createElement('p');
    pIntervalloDate.innerHTML = `<strong>Intervallo Date:</strong> ${immobile.intervallo_date}`;

    const pPrezzo = document.createElement('p');
    pPrezzo.innerHTML = `<strong>Prezzo a Notte:</strong> ${immobile.prezzo} €`;

    divDettagli.appendChild(pLuogo);
    divDettagli.appendChild(pTipologiaHost);
    divDettagli.appendChild(pIntervalloDate);
    divDettagli.appendChild(pPrezzo);

    container.appendChild(divDettagli);
}