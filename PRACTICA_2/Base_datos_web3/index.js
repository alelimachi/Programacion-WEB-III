import express from 'express';
import mysql from 'mysql2/promise';

const servidor = express();

servidor.use(express.json());

const conexion = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'empresa_db'
});

// 1. GET TODAS LAS CATEGORIAS
servidor.get('/categorias', async (req, res) => {

    try {

        const [datos] = await conexion.query(
            'SELECT * FROM categorias'
        );

        res.send(datos);

    } catch (error) {

        res.status(500).send({
            mensaje: 'Error al obtener categorías',
            error: error.message
        });

    }

});

// 2. POST REGISTRAR CATEGORIA
servidor.post('/categorias', async (req, res) => {

    try {

        const { nombre, descripcion } = req.body;

        const [resultado] = await conexion.query(
            'INSERT INTO categorias(nombre, descripcion) VALUES (?, ?)',
            [nombre, descripcion]
        );

        res.status(201).send({
            mensaje: 'Categoría registrada correctamente',
            idInsertado: resultado.insertId
        });

    } catch (error) {

        res.status(500).send({
            mensaje: 'Error al registrar categoría',
            error: error.message
        });

    }

});

// 3. GET CATEGORIA POR ID + PRODUCTOS

servidor.get('/categorias/:id', async (req, res) => {

    try {

        const id = req.params.id;

        const [categoria] = await conexion.query(
            'SELECT * FROM categorias WHERE id = ?',
            [id]
        );

        const [productos] = await conexion.query(
            'SELECT * FROM productos WHERE categoria_id = ?',
            [id]
        );

        res.send({
            id: categoria[0].id,
            nombre: categoria[0].nombre,
            descripcion: categoria[0].descripcion,
            productos: productos
        });

    } catch (error) {

        res.status(500).send({
            mensaje: 'Error al obtener categoría',
            error: error.message
        });

    }

});

// 4. PATCH ACTUALIZAR CATEGORIA

servidor.patch('/categorias/:id', async (req, res) => {

    try {

        const id = req.params.id;

        const { nombre, descripcion } = req.body;

        await conexion.query(
            'UPDATE categorias SET nombre = ?, descripcion = ? WHERE id = ?',
            [nombre, descripcion, id]
        );

        res.send({
            mensaje: 'Categoría actualizada correctamente'
        });

    } catch (error) {

        res.status(500).send({
            mensaje: 'Error al actualizar categoría',
            error: error.message
        });

    }

});

// 5. DELETE ELIMINAR CATEGORIA

servidor.delete('/categorias/:id', async (req, res) => {

    try {

        const id = req.params.id;

        await conexion.query(
            'DELETE FROM categorias WHERE id = ?',
            [id]
        );

        res.send({
            mensaje: 'Categoría eliminada correctamente'
        });

    } catch (error) {

        res.status(500).send({
            mensaje: 'Error al eliminar categoría',
            error: error.message
        });

    }

});

const PUERTO = 3001;

servidor.listen(PUERTO, () => {

    console.log(`Servidor funcionando en http://localhost:${PUERTO}`);

});