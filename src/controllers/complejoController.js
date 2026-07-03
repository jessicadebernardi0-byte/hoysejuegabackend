import {
  crearComplejoService,
  listarComplejosService,
  obtenerComplejoService,
  actualizarComplejoService,
  eliminarComplejoService,
} from "../services/complejoService.js";

export const crearComplejo = async (req, res) => {
  try {
    const complejo = await crearComplejoService(req.body);

    res.status(201).json({
      message: "Complejo creado correctamente",
      complejo,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

export const obtenerComplejos = async (req, res) => {
  try {
    const complejos = await listarComplejosService();

    res.json(complejos);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const obtenerComplejoPorId = async (req, res) => {
  try {
    const complejo = await obtenerComplejoService(req.params.id);

    res.json(complejo);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

export const editarComplejo = async (req, res) => {
  try {
    const complejo = await actualizarComplejoService(req.params.id, req.body);

    res.json({
      message: "Complejo actualizado correctamente",
      complejo,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

export const borrarComplejo = async (req, res) => {
  try {
    await eliminarComplejoService(req.params.id);

    res.json({
      message: "Complejo eliminado correctamente",
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};