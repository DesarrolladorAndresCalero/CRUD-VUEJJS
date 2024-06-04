import { pool } from "../database/keys.js";

const authentication = {}

authentication.createCliente = async (req, res) => {
    const { nit, razon, correo, telefono, creado, estado } = req.body;

    try {
        await pool.query('INSERT INTO Cliente (nit,razon,correo,telefono,creado,estado) VALUES ($1,$2,$3,$4,$5,$6)', [nit, razon, correo, telefono, creado, estado])
        res.status(200).json({
            message: 'Creado exitosamente',
            cliente: {
                nit, razon, correo, telefono, creado, estado
            }
        })
    } catch (error) {
        res.status(500).json({
            message: 'An error has ocurred',
            error
        })
    }
}

module.exports = authentication;