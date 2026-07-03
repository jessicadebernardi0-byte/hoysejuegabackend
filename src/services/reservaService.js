import {
  crearReserva,
  listarReservas,
  listarReservasPorUsuario,
  actualizarReserva,
  eliminarReserva,
} from "../repositories/reservaRepository.js";

export const crearReservaService = async (usuarioId, datos) => {
  return await crearReserva({
    ...datos,
    usuario: usuarioId,
  });
};

export const listarReservasService = async () => {
  return await listarReservas();
};

export const listarMisReservasService = async (usuarioId) => {
  return await listarReservasPorUsuario(usuarioId);
};

export const actualizarReservaService = async (id, datos) => {
  return await actualizarReserva(id, datos);
};

export const eliminarReservaService = async (id) => {
  return await eliminarReserva(id);
};