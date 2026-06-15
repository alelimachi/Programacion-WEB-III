import express from 'express';

import {
    obtObras,
    obtObraPorID,
    insertaObra,
    actualizaObra,
    eliminaObra
} from '../controladores/obraControlador.js';
const rutas = express.Router();
rutas.get('/', obtObras);
rutas.get('/:id', obtObraPorID);
rutas.post('/', insertaObra);
rutas.patch('/:id', actualizaObra);
rutas.delete('/:id', eliminaObra);
export default rutas;