import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import {
    obtUsuarioEmail
} from '../modelos/usuarioModelo.js';

import {
    guardarLog
} from '../modelos/logModelo.js';

export const login = async (req, res) => {

    try {

        const {
            email,
            password
        } = req.body;

        const usuario = await obtUsuarioEmail(email);

        if (!usuario) {

            return res.status(404).json({
                mensaje: 'Usuario no encontrado'
            });

        }

        const coincide = await bcrypt.compare(
            password,
            usuario.password
        );

        if (!coincide) {

            return res.status(401).json({
                mensaje: 'Contraseña incorrecta'
            });

        }

        const token = jwt.sign(

            {
                id: usuario.id,
                nombre: usuario.nombre,
                email: usuario.email,
                rol: usuario.rol
            },

            'webiii2026',

            {
                expiresIn: '1d'
            }

        );

        await guardarLog(
            usuario.id,
            req.ip,
            'INGRESO',
            req.headers['user-agent']
        );

        res.status(200).json({

            mensaje: 'Login correcto',

            token,

            usuario: {
                id: usuario.id,
                nombre: usuario.nombre,
                email: usuario.email,
                rol: usuario.rol
            }

        });

    } catch (error) {

        res.status(500).json({
            error: error.message
        });

    }

};
export const logout = async (req, res) => {

    try {

        const {
            usuario_id
        } = req.body;

        await guardarLog(
            usuario_id,
            req.ip,
            'SALIDA',
            req.headers['user-agent']
        );

        res.status(200).json({
            mensaje: 'Logout correcto'
        });

    } catch (error) {

        res.status(500).json({
            error: error.message
        });

    }

};