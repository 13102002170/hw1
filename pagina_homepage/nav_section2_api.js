// Loghi del Naavigation Bar (Section 2)
function aggiornaLoghi() {
    fetch('pagina_homepage/nav_section2_api.php')
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById('flex-container1-nav-section2');
        container.innerHTML = '';

        data.forEach(item => {
            const div = document.createElement('div');
            div.classList.add('flex-item1-nav-section2');
            div.setAttribute('data-tipologia', item.tipologia);

            const linkImg = document.createElement('a');
            linkImg.setAttribute('href', '#');

            const img = document.createElement('img');
            img.setAttribute('src', 'imgs_loghi_homepage/' + item.immagine);
            img.setAttribute('alt', item.alt);
            img.classList.add('logo');

            const linkTipologia = document.createElement('a');
            linkTipologia.setAttribute('href', '#');
            linkTipologia.classList.add('tipologia');
            linkTipologia.textContent = item.tipologia;

            div.addEventListener('click', function() {
                const tipologia = this.getAttribute('data-tipologia');
                aggiornaImmobili(tipologia);
            });

            linkImg.appendChild(img);
            div.appendChild(linkImg);
            div.appendChild(linkTipologia);

            container.appendChild(div);
        });
    })
    .catch(error => {
        console.error('Errore durante il caricamento dei dati:', error);
    });
}

aggiornaLoghi();