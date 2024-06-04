import express from 'express';
import authentication from "../controllers/auth.js"

const router = express.Router();

router.post('/createCliente', authentication.createCliente)

module.exports = router;