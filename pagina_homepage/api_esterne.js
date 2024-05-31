// JavaScript per API ESTERNE

// Funzione API Google Maps
document.addEventListener("DOMContentLoaded", function() {
    const center = { lat: 37.7749, lng: -122.4194 };

    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 14, 
        center: center, 
    });
    const marker = new google.maps.Marker({
        position: center,
        map: map,
        title: "San Francisco",
    });
});

// Google (mappe)
document.addEventListener("DOMContentLoaded", function() {
    var modal = document.getElementById('mappa-modale');
    var btn = document.getElementById("pulsante-mostra-la-mappa-main");
  
    btn.addEventListener("click", function() {
        modal.style.display = "block";
        document.body.classList.add("no-scroll");
        initMap();

        
    });
  
    var span = document.getElementsByClassName("pulsante-chiusura-mappa")[0];
  
    span.addEventListener("click", function() {
        modal.style.display = "none";
        document.body.classList.remove("no-scroll");
    });
  
    window.addEventListener("click", function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            document.body.classList.remove("no-scroll");
        }
    })
});

function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 51.505, lng: -0.09}, 
        zoom: 8
    });

    fetch('https://api.example.com/endpoint')
        .then(response => response.json())
        .then(data => {
            data.forEach(location => {
                var marker = new google.maps.Marker({
                    position: {lat: location.latitude, lng: location.longitude},
                    map: map
                });
            });
        })
        .catch(error => {
            console.error('Errore nel recupero dei dati:', error);
        });
}


// Google (autenticazione)
function parseJwt (token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
}

function handleCredentialResponse(response) {
    const token = response.credential;
    const decoded = parseJwt(token); 

    console.log(decoded);

    console.log("ID: " + decoded.sub);
    console.log('Full Name: ' + decoded.name);
    console.log('Given Name: ' + decoded.given_name);
    console.log('Family Name: ' + decoded.family_name);
    console.log("Image URL: " + decoded.picture);
    console.log("Email: " + decoded.email);
}

// OpenWeather (meteo)
document.getElementById('form-meteo').addEventListener('submit', function(event) {
    event.preventDefault();
    getWeather();
});

function getWeather() {
    const apiKey = '579fbb29bed44ebf5a2ec23389868c80';
    const cityInput = document.getElementById('input-citta');
    const dateInput = document.getElementById('input-data');
    const city = cityInput.value.trim();
    const date = dateInput.value;

    if (!city && !date) {
        alert('Per favore, inserisci il nome della città e seleziona una data.');
        cityInput.focus();
        return;
    } else if (!city) {
        alert('Per favore, inserisci il nome della città.');
        cityInput.focus();
        return;
    } else if (!date) {
        alert('Per favore, seleziona una data.');
        dateInput.focus();
        return;
    }

    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`)
    .then(response => {
        if (!response.ok) {
            throw new Error('Errore nella richiesta meteo. Assicurati di inserire una città valida.');
        }
        return response.json();
    })
    .then(data => {
        const filteredData = data.list.filter(entry => entry.dt_txt.startsWith(date));
        if (filteredData.length === 0) {
            throw new Error('Nessuna previsione trovata per la data specificata.');
        }

        const weatherInfo = document.getElementById('informazioni-meteo');
        const currentWeather = filteredData[0];
        weatherInfo.innerHTML = `
            <h2>Meteo di ${city} in data ${date}</h2>
            <p>Temperatura Media: ${kelvinToCelsius(currentWeather.main.temp)}°C</p>
            <p>Temperatura Massima: ${kelvinToCelsius(currentWeather.main.temp_max)}°C</p>
            <p>Temperatura Minima: ${kelvinToCelsius(currentWeather.main.temp_min)}°C</p>
            <p>Umidità: ${currentWeather.main.humidity}%</p>
            <p>Velocità del Vento: ${currentWeather.wind.speed} m/s</p>
            <p>Direzione del Vento: ${degToCompass(currentWeather.wind.deg)}</p>
            <p>Descrizione: ${currentWeather.weather[0].description}</p>
        `;
    })
    .catch(error => {
        console.error('Si è verificato un errore:', error);
        alert(error.message);
    });
}

function kelvinToCelsius(kelvin) {
    return (kelvin - 273.15).toFixed(1);
}

function degToCompass(deg) {
    const val = Math.floor((deg / 22.5) + 0.5);
    const directions = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'];
    return directions[(val % 16)];
}

// Spotify (ricerca brani)
document.getElementById('form-brani-musicali').addEventListener('submit', function(event) {
    event.preventDefault();

    const nomeArtista = document.getElementById('input-nome-artista').value;

    if (!nomeArtista.trim()) {
        alert('Per favore, inserisci il nome dell\'artista.');
        document.getElementById('input-nome-artista').focus();
        return;
    }

    fetchTracks(nomeArtista);
});

function fetchTracks(nomeArtista) {
    const clientId = '5f6edb081f674701b24e429720c8ef9f';
    const clientSecret = 'cff63dc4d4dc491b877ff2c10abf6400';

    const basicAuth = btoa(`${clientId}:${clientSecret}`);
    const authHeader = `Basic ${basicAuth}`;

    const authUrl = 'https://accounts.spotify.com/api/token';

    const authParams = new URLSearchParams();
    authParams.append('grant_type', 'client_credentials');

    fetch(authUrl, {
        method: 'POST',
        headers: {
            'Authorization': authHeader,
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: authParams.toString() 
    })
    .then(response => response.json())
    .then(data => {
        const accessToken = data.access_token;
        
        const searchUrl = `https://api.spotify.com/v1/search?q=${encodeURIComponent(nomeArtista)}&type=artist`;

        fetch(searchUrl, {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        })
        .then(response => response.json())
        .then(data => {
            const idArtista = data.artists.items[0].id;

            const tracksUrl = `https://api.spotify.com/v1/artists/${idArtista}/top-tracks?country=US`;

            fetch(tracksUrl, {
                headers: {
                    'Authorization': `Bearer ${accessToken}`
                }
            })
            .then(response => response.json())
            .then(data => {
                const outputDiv = document.getElementById('lista-brani');
                outputDiv.innerHTML = ''; 

                data.tracks.forEach(track => {
                    const branoElemento = document.createElement('div');
                    branoElemento.classList.add('brano');

                    const titoloBrano = document.createElement('p');
                    titoloBrano.textContent = track.name;
                    branoElemento.appendChild(titoloBrano);

                    if (track.album.images.length > 0) {
                        const copertinaImmagine = document.createElement('img');
                        copertinaImmagine.src = track.album.images[0].url;
                        copertinaImmagine.alt = 'Copertina del brano';
                        branoElemento.appendChild(copertinaImmagine);
                    }

                    outputDiv.appendChild(branoElemento);
                });
            })
            .catch(error => console.error('Errore nella richiesta dei brani dell\'artista:', error));
        })
        .catch(error => console.error('Errore nella ricerca dell\'artista:', error));
    })
    .catch(error => console.error('Errore durante l\'autenticazione:', error));
}


// Calendarific (calendario festività)
document.getElementById('form-calendario-festivita').addEventListener('submit', function(event) {
    event.preventDefault();

    const country = document.getElementById('input-codice-paese').value;
    const year = document.getElementById('input-anno').value;

    if (!country || !year) {
        alert('Per favore, inserisci il codice del Paese e seleziona un anno.');
        return;
    }

    fetchHolidays(country, year);
});

function fetchHolidays(country, year) {
    const formData = new FormData();
    formData.append('country', country);
    formData.append('year', year);

    fetch('pagina_homepage/api_esterne.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        displayHolidays(data.response.holidays);
    })
    .catch(error => {
        console.error('Errore durante il recupero delle festività:', error);
        alert('Impossibile recuperare le vacanze: ' + error.message);
    });
}

function displayHolidays(holidays) {
    const holidaysList = document.getElementById('lista-vacanze');
    holidaysList.innerHTML = '';

    holidays.forEach(holiday => {
        const listItem = document.createElement('li');
        listItem.textContent = `${holiday.date.iso} - ${holiday.name}`;
        holidaysList.appendChild(listItem);
    });
}