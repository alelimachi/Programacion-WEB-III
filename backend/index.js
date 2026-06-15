import express from 'express';
import cors from 'cors';

import artistaRutas from './rutas/artistaRutas.js';
import obraRutas from './rutas/obraRutas.js';
import usuarioRutas from './rutas/usuarioRutas.js';
import authRutas from './rutas/authRutas.js';
import logRutas from './rutas/logRutas.js';

const app = express();

app.use(cors({
    origin: "http://localhost:5173"
}));
app.use(express.json());

app.get('/', (req, res) => {

    res.json({
        mensaje: 'API Galería de Arte funcionando'
    });

});

app.use('/artistas', artistaRutas);

app.use('/obras', obraRutas);

app.use('/usuarios', usuarioRutas);

app.use('/auth', authRutas);

app.use('/logs', logRutas);

const PUERTO = 3001;

app.listen(PUERTO, () => {

    console.log(
        `Servidor en http://localhost:${PUERTO}`
    );

});