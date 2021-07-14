const client = new Cliente ('Test', '', '', '', 0, '', carrito);
const clientName = document.getElementById('client-name');
const clientSurname = document.getElementById('client-surname');
const clientEmail = document.getElementById('client-email');
const clientPassword = document.getElementById('client-password');
const notification = document.getElementById('warnings');
const navClientName = document.getElementById('name-nav');

// Variables para ejercicio complementario CreateElement
var makeParagraph = document.createElement('p');
var texto = document.createTextNode('Verifique los datos ingresados.');


form.addEventListener("submit", e =>{
    e.preventDefault();
    let warnings = "";
    let entry = false;
    // Javascript email validation
    // https://www.w3resource.com/javascript/form/email-validation.php
    let regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    // Restablezco el elemento notification a vacío cada vez que se realiza un nuevo submit
    notification.innerHTML = "";
    // Valido que el nombre sea mayor a 3 caracteres
    if(clientName.value.length < 3){
        entry = true;
    }
    // Valido que el apellido sea mayor a 3 caracteres
    if(clientSurname.value.length < 3){
        entry = true;
    }
    // Valido que el correo tenga el standard correcto
    if(!regexEmail.test(clientEmail.value)){
        entry = true;
    }
    // Valido que la contraseña sea mayor a 8 caracteres
    if (clientPassword.value.length < 8){
        entry = true;
    }
    // Si alguno de los campos anteriores es incorrecto, alerta al visitante
    if (entry){
        notification.appendChild(makeParagraph).appendChild(texto);
    }
    // Caso contrario realiza, informa el registro correcto, y asigna los datos a la constante client
    else{
        notification.innerHTML = "Gracias por registrarte!"
        client.registroNombre = clientName.value;
        client.registroApellido = clientSurname.value;
        client.registroCorreo = clientEmail.value;
        client.registroContrasena = clientPassword.value;
        navClientName.innerHTML = (`¡Bienvenido ${client.mostrarNombre}!`);
        document.getElementById('name-main').innerHTML = (`¡Bienvenido ${client.mostrarNombre}!`);
    }

})