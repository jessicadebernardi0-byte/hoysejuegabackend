import {
  crearComplejo,
  listarComplejos,
  buscarComplejoPorId,
  actualizarComplejo,
  eliminarComplejo,
} from "../repositories/complejoRepository.js";

export const crearComplejoService = async (datos) => {
  return await crearComplejo(datos);
};

export const listarComplejosService = async () => {
  return await listarComplejos();
};

export const obtenerComplejoService = async (id) => {
  const complejo = await buscarComplejoPorId(id);

  if (!complejo) {
    throw new Error("Complejo no encontrado");
  }

  return complejo;
};

export const actualizarComplejoService = async (id, datos) => {
  return await actualizarComplejo(id, datos);
};

export const eliminarComplejoService = async (id) => {
  return await eliminarComplejo(id);
};