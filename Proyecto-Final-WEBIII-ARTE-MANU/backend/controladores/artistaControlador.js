import {
  obtTodo,
  obtArtista,
  inserta,
  actualiza,
  elimina
} from '../modelos/artistaModelo.js';

import { check, validationResult } from 'express-validator';

export const obtArtistas = async (req, res) => {
  try {
    const artistas = await obtTodo();
    res.status(200).json(artistas);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      mensaje: "Error al obtener artistas"
    });
  }
};

export const obtArtistaPorID = async (req, res) => {
  try {
    const artista = await obtArtista(req.params.id);

    if (!artista) {
      return res.status(404).json({
        mensaje: "Artista no encontrado"
      });
    }

    res.status(200).json(artista);

  } catch (error) {
    console.error(error);
    res.status(500).json({
      mensaje: "Error al obtener artista"
    });
  }
};

export const insertaArtista = async (req, res) => {

  await check('nombre')
    .notEmpty()
    .withMessage('Nombre requerido')
    .run(req);

  const errores = validationResult(req);

  if (!errores.isEmpty()) {
    return res.status(400).json({
      mensaje: errores.array()
    });
  }

  try {
    const artistaNuevo = await inserta(req.body);

    res.status(201).json(artistaNuevo);

  } catch (error) {
    console.error(error);
    res.status(500).json({
      mensaje: "Error al crear artista"
    });
  }
};

export const actualizaArtista = async (req, res) => {

  await check('nombre')
    .notEmpty()
    .withMessage('Nombre requerido')
    .run(req);

  const errores = validationResult(req);

  if (!errores.isEmpty()) {
    return res.status(400).json({
      mensaje: errores.array()
    });
  }

  try {
    const artistaActualizado = await actualiza(
      req.params.id,
      req.body
    );

    if (!artistaActualizado) {
      return res.status(404).json({
        mensaje: "Artista no encontrado"
      });
    }

    res.status(200).json(artistaActualizado);

  } catch (error) {
    console.error(error);
    res.status(500).json({
      mensaje: "Error al actualizar artista",
      error: error.message
    });
  }
};

export const eliminaArtista = async (req, res) => {
  try {
    const resultado = await elimina(req.params.id);

    res.status(200).json(resultado);

  } catch (error) {
    console.error(error);
    res.status(500).json({
      mensaje: "Error al eliminar artista"
    });
  }
};