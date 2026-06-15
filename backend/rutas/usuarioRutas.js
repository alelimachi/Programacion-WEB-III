import express from 'express';

import {
    obtUsuarios,
    obtUsuarioPorID,
    insertaUsuario,
    actualizaUsuario,
    eliminaUsuario
}
from '../controladores/usuarioControlador.js';

const rutas = express.Router();

rutas.get('/', obtUsuarios);

rutas.get('/:id', obtUsuarioPorID);

rutas.post('/', insertaUsuario);

rutas.patch('/:id', actualizaUsuario);

rutas.delete('/:id', eliminaUsuario);

export default rutas;