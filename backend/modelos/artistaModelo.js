import { pool } from '../config/bd.js';

export const obtTodo = async () => {
    const [resultado] =
        await pool.query(
            'SELECT * FROM artistas WHERE estado = 1'
        );

    return resultado;
};

export const obtArtista = async (id) => {
    const [resultado] =
        await pool.query(
            'SELECT * FROM artistas WHERE id = ?',
            [id]
        );

    return resultado[0];
};

export const inserta = async (artista) => {

    const {
        nombre = "",
        nacionalidad = "",
        biografia = "",
        foto = ""
    } = artista;

    const [resultado] =
        await pool.query(
            `INSERT INTO artistas
            (nombre,nacionalidad,biografia,foto)
            VALUES (?,?,?,?)`,
            [nombre, nacionalidad, biografia, foto]
        );

    return {
        id: resultado.insertId,
        nombre,
        nacionalidad,
        biografia,
        foto
    };
};

export const actualiza = async (id, artista) => {

    const {
        nombre,
        nacionalidad,
        biografia,
        foto
    } = artista;

    await pool.query(
        `UPDATE artistas
        SET nombre=?,
        nacionalidad=?,
        biografia=?,
        foto=?
        WHERE id=?`,
        [nombre,nacionalidad,biografia,foto,id]
    );

    return {
        id,
        ...artista
    };
};

export const elimina = async (id) => {

    await pool.query(
        'UPDATE artistas SET estado = 0 WHERE id = ?',
        [id]
    );

    return {
        mensaje: 'Artista eliminado'
    };
};