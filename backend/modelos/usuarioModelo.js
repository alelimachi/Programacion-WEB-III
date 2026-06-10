import { pool } from '../config/bd.js';

// ==========================
// OBTENER TODOS LOS USUARIOS
// ==========================

export const obtTodo = async () => {

    const [resultado] = await pool.query(
        'SELECT id, nombre, email, rol, estado FROM usuarios WHERE estado = 1'
    );

    return resultado;
};

// ==========================
// OBTENER USUARIO POR ID
// ==========================

export const obtUsuario = async (id) => {

    const [resultado] = await pool.query(
        'SELECT * FROM usuarios WHERE id = ?',
        [id]
    );

    return resultado[0];
};

// ==========================
// OBTENER USUARIO POR EMAIL
// ==========================

export const obtUsuarioEmail = async (email) => {

    const [resultado] = await pool.query(
        'SELECT * FROM usuarios WHERE email = ?',
        [email]
    );

    return resultado[0];
};

// ==========================
// INSERTAR USUARIO
// ==========================

export const inserta = async (usuario) => {

    const {
        nombre,
        email,
        password,
        rol
    } = usuario;

    const [resultado] = await pool.query(
        `INSERT INTO usuarios
        (nombre, email, password, rol)
        VALUES (?, ?, ?, ?)`,
        [nombre, email, password, rol]
    );

    return {
        id: resultado.insertId,
        nombre,
        email,
        rol
    };
};

// ==========================
// ACTUALIZAR USUARIO
// ==========================

export const actualiza = async (id, usuario) => {

    const {
        nombre,
        email,
        rol
    } = usuario;

    await pool.query(
        `UPDATE usuarios
        SET nombre = ?,
            email = ?,
            rol = ?
        WHERE id = ?`,
        [nombre, email, rol, id]
    );

    return {
        id,
        ...usuario
    };
};

// ==========================
// ELIMINAR USUARIO
// ==========================

export const elimina = async (id) => {

    await pool.query(
        'UPDATE usuarios SET estado = 0 WHERE id = ?',
        [id]
    );

    return {
        mensaje: 'Usuario eliminado'
    };
};