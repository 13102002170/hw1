// Immobili del Main Content
document.addEventListener("DOMContentLoaded", function() {
    const items = document.querySelectorAll('.flex-item1-nav-section2');
    items.forEach(item => {
        item.addEventListener('click', function(event) {
            event.preventDefault(); 
            const tipologia = this.getAttribute('data-tipologia');
            aggiornaImmobili(tipologia);
        });
    });

    aggiornaImmobili('Sull\'acqua');
});

function aggiornaImmobili(tipologia) {
    fetch(`pagina_homepage/main_api.php?tipologia=${encodeURIComponent(tipologia)}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(onJSON)
        .catch(error => {
            console.error('Errore nel recuperare i dati:', error);
            document.getElementById('flex-container-main-section1').innerHTML = 'Errore nel caricamento dei dati.';
        });
}

function onJSON(json) {
    const container = document.getElementById('flex-container-main-section1');
    container.innerHTML = '';

    json.forEach(row => {
        const immagini = [
            row.immagine1, row.immagine2, row.immagine3,
            row.immagine4, row.immagine5, row.immagine6,
            row.immagine7, row.immagine8, row.immagine9
        ];

        const a = document.createElement('a');
        a.href = `immobile.php?id=${row.id}`;
        a.className = 'link-immagine';

        const divFlexItem = document.createElement('div');
        divFlexItem.className = 'flex-item-main-section1';

        const divImmagine = document.createElement('div');
        divImmagine.className = 'immagine';

        const img = document.createElement('img');
        img.src = `imgs_immobili_homepage/${row.immagine1}`;
        img.alt = row.alt;
        img.dataset.id = row.id;
        img.className = 'immagine-attiva';

        const divPulsanti = document.createElement('div');
        divPulsanti.className = 'pulsanti-scorrimento';

        const btnSinistra = document.createElement('button');
        btnSinistra.className = 'pulsante-scorrimento sinistra';
        btnSinistra.addEventListener('click', (event) => {
            event.preventDefault();
            event.stopPropagation();
            cambiaImmagine(row.id, -1);
        });
        btnSinistra.innerHTML = '&lt;';

        const btnDestra = document.createElement('button');
        btnDestra.className = 'pulsante-scorrimento destra';
        btnDestra.addEventListener('click', (event) => {
            event.preventDefault();
            event.stopPropagation();
            cambiaImmagine(row.id, 1);
        });
        btnDestra.innerHTML = '&gt;';

        divPulsanti.appendChild(btnSinistra);
        divPulsanti.appendChild(btnDestra);

        divImmagine.appendChild(img);
        divImmagine.appendChild(divPulsanti);

        if (row.amato_dagli_ospiti == 1) {
            const divSovrapposizione = document.createElement('div');
            divSovrapposizione.className = 'sovrapposizione';

            const divEtichetta = document.createElement('div');
            divEtichetta.className = 'etichetta-sovrapposta';
            divEtichetta.innerHTML = 'Amato dagli ospiti';

            divSovrapposizione.appendChild(divEtichetta);
            divImmagine.appendChild(divSovrapposizione);
        }

        const cuoreSovrapposto = document.createElement('div');
        cuoreSovrapposto.className = 'cuore-sovrapposto';
        cuoreSovrapposto.dataset.id = row.id;
        cuoreSovrapposto.dataset.loggedIn = isUserLoggedIn();
        cuoreSovrapposto.innerHTML = '&hearts;';
        divImmagine.appendChild(cuoreSovrapposto);

        cuoreModale();

        divFlexItem.appendChild(divImmagine);

        const divInfo = document.createElement('div');
        const pLuogo = document.createElement('p');
        pLuogo.id = 'luogo-immobile';
        pLuogo.className = 'luogo-immobile';
        pLuogo.innerHTML = row.luogo;

        const pTipologiaHost = document.createElement('p');
        pTipologiaHost.id = 'tipologia-host';
        pTipologiaHost.innerHTML = row.tipologia_host;

        const pIntervalloDate = document.createElement('p');
        pIntervalloDate.id = 'intervallo-date';
        pIntervalloDate.innerHTML = row.intervallo_date;

        const pPrezzo = document.createElement('p');
        pPrezzo.id = 'prezzo-a-notte';
        pPrezzo.innerHTML = `<strong>${row.prezzo} €</strong> notte`;

        divInfo.appendChild(pLuogo);
        divInfo.appendChild(pTipologiaHost);
        divInfo.appendChild(pIntervalloDate);
        divInfo.appendChild(pPrezzo);

        divFlexItem.appendChild(divInfo);

        a.appendChild(divFlexItem);
        container.appendChild(a);

        const script = document.createElement('script');
        script.innerHTML = `var immagini${row.id} = ${JSON.stringify(immagini)};`;
        document.body.appendChild(script);

        document.querySelectorAll('.cuore-sovrapposto').forEach(heart => {
            heart.addEventListener('click', (event) => {
                let idImmobile = heart.getAttribute('data-id');
                document.querySelector('.aggiungi-footer-preferiti').setAttribute('data-id', idImmobile);
            });
        });
    
        document.querySelector('.aggiungi-footer-preferiti').addEventListener('click', () => {
            let idImmobile = document.querySelector('.aggiungi-footer-preferiti').getAttribute('data-id');
            document.cookie = "immobile_id=" + idImmobile + "; path=/";
            window.location.href = 'preferiti.php';
        }); 
    });
}
