import express from 'express';

import {
    listarLogs
}
from '../controladores/logControlador.js';

const rutas = express.Router();

rutas.get('/', listarLogs);

export default rutas;