import express from 'express';
import { verificarToken } from "../middlewares/verificarToken.js";
import {
    obtArtistas,
    obtArtistaPorID,
    insertaArtista,
    actualizaArtista,
    eliminaArtista
} from '../controladores/artistaControlador.js';
const rutas = express.Router();

rutas.get("/", verificarToken, obtArtistas);

rutas.get('/:id', obtArtistaPorID);

rutas.post('/', insertaArtista);

rutas.put('/:id', actualizaArtista);

rutas.delete('/:id', eliminaArtista);

export default rutas;