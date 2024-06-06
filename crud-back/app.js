// app.js

const express = require('express');
const bodyParser = require('body-parser');
const { Cliente } = require('./models'); // Asegúrate de que la ruta a models sea correcta

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Ruta para obtener todos los clientes
app.get('/cliente', async (req, res) => {
  try {
    const clientes = await Cliente.findAll();
    res.json(clientes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Ruta para crear un nuevo cliente
app.post('/clientes', async (req, res) => {
  try {
    const { nit, razon, correo, telefono, creado, estado } = req.body;
    const nuevoCliente = await Cliente.create({ nit, razon, correo, telefono, creado, estado });
    res.status(201).json(nuevoCliente);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
