const form = document.getElementById('form');
const Nombre = document.getElementById('Nombre');
const Apellido = document.getElementById('Apellido');
const email = document.getElementById('correo');
const password = document.getElementById('contraseña');
const telefono = document.getElementById('telefono');
const Direccion = document.getElementById('Direccion');
const RFC = document.getElementById('RFC');
const warnings = document.getElementById('warnings');

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let mensajes = "";
    let regexemail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    let regexNombre = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
    let regexApellido = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
    let regexPassword = /^.{4,12}$/;
    let regexTelefono = /^\d{10}$/; // Cambiado a 10 dígitos para números de teléfono en México
    let regexRFC = /^[A-ZÑ&]{3,4}\d{6}[A-Z0-9]{3}$/i; // Ajuste del RFC más estricto
    let errores = false;

    warnings.innerHTML = ""; // Limpia los warnings previos

    if (!regexNombre.test(Nombre.value)) {
        mensajes += "Nombre no válido (solo letras y espacios, máximo 40 caracteres).<br>";
        errores = true;
    }

    if (!regexApellido.test(Apellido.value)) {
        mensajes += "Apellido no válido (solo letras y espacios, máximo 40 caracteres).<br>";
        errores = true;
    }

    if (!regexemail.test(email.value)) {
        mensajes += "Correo no válido.<br>";
        errores = true;
    }

    if (!regexPassword.test(password.value)) {
        mensajes += "Contraseña no válida (debe tener entre 4 y 12 caracteres).<br>";
        errores = true;
    }

    if (!regexTelefono.test(telefono.value)) {
        mensajes += "Teléfono no válido (deben ser 10 dígitos).<br>";
        errores = true;
    }

    if (Direccion.value === "") {
        mensajes += "La dirección no puede estar vacía.<br>";
        errores = true;
    }

    if (!regexRFC.test(RFC.value)) {
        mensajes += "RFC no válido.<br>";
        errores = true;
    }

    if (errores) {
        warnings.innerHTML = mensajes; // Muestra advertencias si hay errores
    } else {
        warnings.innerHTML = "Formulario enviado correctamente.";
        // Aquí podrías enviar los datos al servidor si todo es correcto
    }
});




















