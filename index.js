const express = require('express');
const app = express();

// Middleware para procesar el JSON que envía el frontend
app.use(express.json());

// Tus rutas
const userRoutes = require('./Backend/routes/userRoutes');
app.use('/api/users', userRoutes);

// Iniciar el servidor
app.listen(3000, () => {
  console.log('Servidor ejecutándose en el puerto 3000');
});
