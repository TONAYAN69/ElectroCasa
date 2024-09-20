const express = require('express');
const { registerUser } = require('../controllers/userControler');
const router = express.Router();

// Ruta para registrar un usuario
router.post('/register', registerUser);

module.exports = router;



