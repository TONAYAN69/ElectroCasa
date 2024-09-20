const mysql = require('mysql2/promise'); // o 'pg' si usas PostgreSQL
const dbConfig = require('../config/db.config');
const { sendEmail } = require('../services/emailServices'); // Asumiendo que envías correos de confirmación

const registerUser = async (req, res) => {
  const { nombre, apellidos, correo, direccion, rfc, password } = req.body;

  try {
    // Conexión a la base de datos
    const connection = await mysql.createConnection(dbConfig);

    // Consulta para insertar el usuario
    const query = `
      INSERT INTO users (nombre, apellidos, correo, direccion, rfc, password)
      VALUES (?, ?, ?, ?, ?, ?)`;
    const values = [nombre, apellidos, correo, direccion, rfc, password];

    // Ejecutamos la consulta
    const [result] = await connection.execute(query, values);

    // Cerrar la conexión a la base de datos
    await connection.end();

    // Enviar correo de confirmación (opcional)
    const subject = 'Confirmación de Registro';
    const text = 'Gracias por registrarte en ElectroCasa. Por favor, verifica tu cuenta.';
    await sendEmail(correo, subject, text);

    // Responder con éxito
    return res.status(201).json({ message: 'Usuario registrado con éxito y correo enviado.' });
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ message: 'Error al registrar el usuario.', error });
  }
};

module.exports = { registerUser };
