import {
    obtTodo,
    obtUsuario,
    inserta,
    actualiza,
    elimina
}
from '../modelos/usuarioModelo.js';

import bcrypt from 'bcryptjs';
import { check, validationResult } from 'express-validator';


export const obtUsuarios = async (req, res) => {

    const usuarios = await obtTodo();

    res.status(200).json(usuarios);
};


export const obtUsuarioPorID = async (req, res) => {

    const usuario =
        await obtUsuario(req.params.id);

    res.status(200).json(usuario);
};


export const insertaUsuario = async (req, res) => {

    await check('nombre')
        .notEmpty()
        .withMessage('Nombre obligatorio')
        .run(req);

    await check('email')
        .isEmail()
        .withMessage('Email inválido')
        .run(req);

    await check('password')
        .isLength({ min: 6 })
        .withMessage('Mínimo 6 caracteres')
        .run(req);

    const errores = validationResult(req);

    if (!errores.isEmpty()) {

        return res.status(400).json({
            mensaje: errores.array()
        });
    }

    const passwordHash =
        await bcrypt.hash(
            req.body.password,
            10
        );

    const usuarioNuevo =
        await inserta({
            ...req.body,
            password: passwordHash
        });

    res.status(201).json(usuarioNuevo);
};

export const actualizaUsuario = async (req, res) => {

    try {

        let data = { ...req.body };
        if (data.password) {
            data.password = await bcrypt.hash(data.password, 10);
        }

        const usuarioActualizado =
            await actualiza(
                req.params.id,
                data
            );

        res.status(200).json(usuarioActualizado);

    } catch (error) {
        console.error(error);

        res.status(500).json({
            mensaje: "Error al actualizar usuario"
        });
    }
};


export const eliminaUsuario = async (req, res) => {

    const resultado =
        await elimina(req.params.id);

    res.status(200).json(resultado);
};