document.getElementById('registerForm').addEventListener('submit', async (e) => {
    e.preventDefault(); // Evitar que el formulario recargue la página

    // Captura los datos del formulario
    const nombre = document.getElementById('nombre').value;
    const apellidoPaterno = document.getElementById('apellidoPaterno').value;
    const apellidoMaterno = document.getElementById('apellidoMaterno').value;
    const fechaNacimiento = document.getElementById('fechaNacimiento').value;
    const sexo = document.getElementById('sexo').value;
    const curp = document.getElementById('curp').value;
    const rfc = document.getElementById('rfc').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        // Envía los datos del formulario al backend como JSON
        const response = await fetch('http://localhost:3000/routes/userRoutes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', // Indicamos que enviamos JSON
            },
            body: JSON.stringify({
                nombre,
                apellidoPaterno,
                apellidoMaterno,
                fechaNacimiento,
                sexo,
                curp,
                rfc,
                email,
                password
            }), // Convertimos los datos a JSON
        });

        // Manejo de la respuesta del servidor
        const result = await response.json();

        if (response.ok) {
            alert('Registro exitoso, revisa tu correo para confirmar.');
        } else {
            alert('Error en el registro: ' + result.message);
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Hubo un problema con el registro.');
    }
});
