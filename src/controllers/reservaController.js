import {
  crearReservaService,
  listarReservasService,
  listarMisReservasService,
  actualizarReservaService,
  eliminarReservaService,
} from "../services/reservaService.js";

export const crearReserva = async (req, res) => {
  try {
    const reserva = await crearReservaService(req.usuario.id, req.body);

    res.status(201).json({
      message: "Reserva creada correctamente",
      reserva,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

export const obtenerReservas = async (req, res) => {
  try {
    const reservas = await listarReservasService();

    res.json(reservas);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const obtenerMisReservas = async (req, res) => {
  try {
    const reservas = await listarMisReservasService(req.usuario.id);

    res.json(reservas);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const editarReserva = async (req, res) => {
  try {
    const reserva = await actualizarReservaService(req.params.id, req.body);

    res.json({
      message: "Reserva actualizada correctamente",
      reserva,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

export const borrarReserva = async (req, res) => {
  try {
    await eliminarReservaService(req.params.id);

    res.json({
      message: "Reserva eliminada correctamente",
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};
