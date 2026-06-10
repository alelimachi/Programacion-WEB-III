import express from 'express';

import {
    login,
    logout
}
from '../controladores/authControlador.js';

const rutas = express.Router();

rutas.post('/login', login);
rutas.post('/logout', logout);

export default rutas;