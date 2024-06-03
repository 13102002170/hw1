// JavaScript per PAGINA di LOGIN

// Validazione Form di Login
function validateLoginForm(event) {
    const form = event.target;
    if(form.email.value.trim() === '' || form.password.value.trim() === '') {
        alert("Compilare tutti i campi.");
        event.preventDefault();
    }
}

const loginForm = document.forms['login_form'];
loginForm.addEventListener('submit', validateLoginForm);
