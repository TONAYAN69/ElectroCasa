const express = require('express');
const cors = require('cors');
const app = express();

// Habilitar CORS para todas las rutas
app.use(cors());

// Middleware para procesar el JSON que envía el frontend
app.use(express.json());

// Importar y usar tus rutas
const userRoutes = require('./Backend/routes/userRoutes'); // Asegúrate de que la ruta sea correcta
app.use('/api/users', userRoutes);

// Iniciar el servidor
const PORT = process.env.PORT || 3000; // Permite el uso de variables de entorno
app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});
