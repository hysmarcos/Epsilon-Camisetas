// Variables para almacenar el usuario
const client = new Cliente ('Test', '', '', '', 0, '', carrito);
const clientName = document.getElementById('client-name');
const clientSurname = document.getElementById('client-surname');
const clientEmail = document.getElementById('client-email');
const clientPassword = document.getElementById('client-password');
const notification = document.getElementById('warnings');
const navClientName = document.getElementById('name-nav');

// Variables para ejercicio complementario CreateElement
var makeParagraph = document.createElement('p');
var alerta = document.createTextNode('Verifique los datos ingresados.');

// Variable para gestionar el localStorage
let clientLocalStorage;

// Si el item 'usuario' se encuentra almacenado dentro del localStorage, registra al cliente automaticamente al sitio
if (localStorage.getItem("usuario")){
    clientLocalStorage = JSON.parse(localStorage.getItem('usuario'));
    RegistroCliente(clientLocalStorage.nombre, clientLocalStorage.apellido, clientLocalStorage.correo, clientLocalStorage.contrasena, clientLocalStorage.pedido);
}

// formulario para registrar al cliente en el modal login
form.addEventListener("submit", e =>{
    // evita que se cierre el modal
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
        notification.appendChild(makeParagraph).appendChild(alerta);
    }
    // Caso contrario realiza, informa el registro correcto, y asigna los datos a la constante client
    else{
        notification.innerHTML = "Gracias por registrarte!"
        RegistroCliente(clientName.value, clientSurname.value, clientEmail.value, clientPassword.value, carrito);
        AlmacenoDatosLocal();
    }
})

// Defino una función para almacenar los datos recibidos del cliente en la variable client
function RegistroCliente(RC_name, RC_surname, RC_email, RC_password, RC_pedido){
    client.registroNombre = RC_name;
    client.registroApellido = RC_surname;
    client.registroCorreo = RC_email;
    client.registroContrasena = RC_password;
    client.guardoPedido = RC_pedido;
    navClientName.innerHTML = (`¡Bienvenido ${client.mostrarNombre}!`);
    // document.getElementById('name-main').innerHTML = (`¡Bienvenido ${client.mostrarNombre}!`);
}

// Almaceno los datos de client en el localStorage
function AlmacenoDatosLocal(){
    localStorage.setItem("usuario", JSON.stringify(client));
}