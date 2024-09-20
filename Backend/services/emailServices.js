const nodemailer = require('nodemailer');

// Configurar el transporte de correos
const transporter = nodemailer.createTransport({
  service: 'gmail', // Cambiar según el servicio de correo que uses
  auth: {
    user: 'tuCorreo@gmail.com',
    pass: 'tuContraseña'
  }
});

// Función para enviar correo
const sendEmail = async (to, subject, text) => {
  const mailOptions = {
    from: 'tuCorreo@gmail.com',
    to,
    subject,
    text
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Correo enviado con éxito');
  } catch (error) {
    console.error('Error enviando el correo:', error);
  }
};

module.exports = { sendEmail };
