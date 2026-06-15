import { pool } from '../config/bd.js';

export const obtTodo = async () => {

    const [resultado] = await pool.query(
        'SELECT * FROM obras WHERE estado = 1'
    );

    return resultado;
};

export const obtObra = async (id) => {

    const [resultado] = await pool.query(
        'SELECT * FROM obras WHERE id = ?',
        [id]
    );

    return resultado[0];
};

export const inserta = async (obra) => {

    const {
    titulo,
    descripcion,
    precio,
    imagen,
    artista_id
    } = obra;

    const [resultado] = await pool.query(
        `INSERT INTO obras
(titulo, descripcion, precio, imagen, artista_id)
VALUES (?, ?, ?, ?, ?)`,
        [titulo, descripcion, precio, imagen, artista_id]
    );

    return {
        id: resultado.insertId,
        ...obra
    };
};

export const actualiza = async (id, obra) => {

    const {
        titulo,
        descripcion,
        anio,
        imagen,
        artista_id
    } = obra;

    await pool.query(
        `SET titulo = ?,
descripcion = ?,
precio = ?,
imagen = ?,
artista_id = ?`,
        [titulo, descripcion, anio, imagen, artista_id]
    );

    return {
        id,
        ...obra
    };
};

export const elimina = async (id) => {

    await pool.query(
        'UPDATE obras SET estado = 0 WHERE id = ?',
        [id]
    );

    return {
        mensaje: 'Obra eliminada'
    };
};