const express = require('express');
const { sendRegistrationConfirmation } = require('../controllers/notificationController');
const router = express.Router();

// Ruta para enviar la confirmación de registro
router.post('/send-registration-confirmation', sendRegistrationConfirmation);

module.exports = router;
