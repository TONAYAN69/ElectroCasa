document.getElementById('registerForm').addEventListener('submit', async (e) => {
  e.preventDefault(); // Evitar que el formulario recargue la página

  // Captura los datos del formulario
  const nombre = document.getElementById('nombre').value;
  const apellido = document.getElementById('apellido').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const telefono = document.getElementById('telefono').value;

  try {
      // Envía los datos del formulario al backend como JSON
      const response = await fetch('http://localhost:3000/routes/userRoutes', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json', // Indicamos que enviamos JSON
          },
          body: JSON.stringify({ nombre, apellido, email, password, telefono }), // Convertimos los datos a JSON
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
