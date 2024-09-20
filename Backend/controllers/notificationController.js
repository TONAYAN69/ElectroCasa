const { sendEmail } = require('../services/emailServices');

const sendRegistrationConfirmation = (req, res) => {
  const { email } = req.body;

  // Plantilla básica para el correo
  const subject = 'Confirmación de Registro';
  const text = 'index.js';

  sendEmail(email, subject, text)
    .then(() => res.status(200).json({ message: 'Correo enviado con éxito' }))
    .catch(error => res.status(500).json({ message: 'Error enviando correo', error }));
};

module.exports = { sendRegistrationConfirmation };
