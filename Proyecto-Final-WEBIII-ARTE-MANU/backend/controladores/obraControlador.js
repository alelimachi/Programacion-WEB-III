import {
    obtTodo,
    obtObra,
    inserta,
    actualiza,
    elimina
} from '../modelos/obraModelo.js';

import {
    check,
    validationResult
} from 'express-validator';

export const obtObras = async (req, res) => {

    const obras = await obtTodo();

    res.status(200).json(obras);
};

export const obtObraPorID = async (req, res) => {

    const obra = await obtObra(req.params.id);

    res.status(200).json(obra);
};

export const insertaObra = async (req, res) => {

    await check('titulo')
        .notEmpty()
        .withMessage('El título es obligatorio')
        .run(req);

    const errores = validationResult(req);

    if (!errores.isEmpty()) {

        return res.status(400).json({
            mensaje: errores.array()
        });

    }

    const obraNueva = await inserta(req.body);

    res.status(201).json(obraNueva);
};

export const actualizaObra = async (req, res) => {

    const obraActualizada = await actualiza(
        req.params.id,
        req.body
    );

    res.status(200).json(obraActualizada);
};

export const eliminaObra = async (req, res) => {

    const obra = await elimina(req.params.id);

    res.status(200).json(obra);
};