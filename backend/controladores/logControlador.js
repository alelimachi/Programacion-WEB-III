import {
    obtenerLogs
}
from '../modelos/logModelo.js';

export const listarLogs = async (
    req,
    res
) => {

    try {

        const logs = await obtenerLogs();

        res.status(200).json(logs);

    } catch (error) {

        res.status(500).json({
            error: error.message
        });

    }

};