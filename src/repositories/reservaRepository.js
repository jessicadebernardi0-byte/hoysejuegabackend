import Reserva from "../models/Reserva.js";

export const crearReserva = async (datos) => {
  return await Reserva.create(datos);
};

export const listarReservas = async () => {
  return await Reserva.find().populate("usuario", "nombre email");
};

export const listarReservasPorUsuario = async (usuarioId) => {
  return await Reserva.find({ usuario: usuarioId }).populate(
    "usuario",
    "nombre email"
  );
};

export const actualizarReserva = async (id, datos) => {
  return await Reserva.findByIdAndUpdate(id, datos, {
    new: true,
  });
};

export const eliminarReserva = async (id) => {
  return await Reserva.findByIdAndDelete(id);
};
