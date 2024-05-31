// JavaScript per PAGINA di REGISTRAZIONE

// Validazione Form di Registrazione
function validateRegistrazioneForm(event) {
    const form = event.target;
    if(form.username.value.trim() === '' ||
       form.nome.value.trim() === '' ||
       form.cognome.value.trim() === '' ||
       form.data_nascita.value.trim() === '' ||
       form.email.value.trim() === '' ||
       form.password.value.trim() === '') {
        alert("Compilare tutti i campi.");
        event.preventDefault();
    }
}

const registrazioneForm = document.forms['registrazione_form'];
registrazioneForm.addEventListener('submit', validateRegistrazioneForm);
