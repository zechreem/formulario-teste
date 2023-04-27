const form = document.getElementById('formulario');

form.addEventListener('submit', (event) => {
    event.preventDefault();

const name = form.elements['nome'].value;
const servidor = form.elements['servidor'].value;
const email = form.elements['email'].value;

const result = `Nome: ${name}\nServidor: ${servidor}\nE-mail: ${email}`;
alert (result);
});