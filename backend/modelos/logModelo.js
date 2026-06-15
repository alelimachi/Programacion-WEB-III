import { pool } from '../config/bd.js';

export const guardarLog = async (
    usuario_id,
    ip,
    evento,
    navegador
) => {

    const [resultado] = await pool.query(
        `INSERT INTO logs_acceso
        (usuario_id, ip, evento, navegador)
        VALUES (?, ?, ?, ?)`,
        [
            usuario_id,
            ip,
            evento,
            navegador
        ]
    );

    return resultado;
};

export const obtenerLogs = async () => {

    const [resultado] = await pool.query(
        `SELECT *
         FROM logs_acceso
         ORDER BY fecha DESC`
    );

    return resultado;
};