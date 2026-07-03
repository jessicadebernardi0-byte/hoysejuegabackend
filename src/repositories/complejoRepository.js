import Complejo from "../models/Complejo.js";

export const crearComplejo = async (datos) => {
  return await Complejo.create(datos);
};

export const listarComplejos = async () => {
  return await Complejo.find();
};

export const buscarComplejoPorId = async (id) => {
  return await Complejo.findById(id);
};

export const actualizarComplejo = async (id, datos) => {
  return await Complejo.findByIdAndUpdate(id, datos, {
    new: true,
  });
};

export const eliminarComplejo = async (id) => {
  return await Complejo.findByIdAndDelete(id);
};
