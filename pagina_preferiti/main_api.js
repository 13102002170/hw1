// Immobili del Main Content
document.addEventListener('DOMContentLoaded', function() {
    aggiornaImmobiliPreferiti();
});

function onJSON(json) {
    const container = document.getElementById('flex-container-main-section1');
    container.innerHTML = '';

    if (json.length > 0) {
        json.forEach(immobile => {
            const divFlexItem = document.createElement('div');
            divFlexItem.className = 'flex-item-main-section1';

            const divImmagine = document.createElement('div');
            divImmagine.className = 'immagine';

            const img = document.createElement('img');
            img.src = `imgs_immobili_homepage/${immobile.immagine1}`;
            img.alt = immobile.alt;
            img.dataset.id = immobile.id;
            img.classList.add('immagine-attiva');

            if (immobile.amato_dagli_ospiti == 1) {
                const divSovrapposizione = document.createElement('div');
                divSovrapposizione.className = 'sovrapposizione';

                const divEtichetta = document.createElement('div');
                divEtichetta.className = 'etichetta-sovrapposta';
                divEtichetta.innerHTML = 'Amato dagli ospiti';

                divSovrapposizione.appendChild(divEtichetta);
                divImmagine.appendChild(divSovrapposizione);
            }

            divImmagine.appendChild(img);
            divFlexItem.appendChild(divImmagine);

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

            divFlexItem.appendChild(divDettagli);
            container.appendChild(divFlexItem);
        });
    } else {
        container.innerText = 'Nessun immobile presente nei preferiti.';
    }
}

function aggiornaImmobiliPreferiti() {
    fetch('pagina_preferiti/main_api.php')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(onJSON)
        .catch(error => {
            console.error('Errore nella richiesta API:', error);
            const container = document.getElementById('flex-container-main-section1');
            container.innerText = 'Errore nel caricamento dei dati.';
        });
}
