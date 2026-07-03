import Usuario from "../models/Usuario.js";

export const crearUsuario = async (datos) => {
  return await Usuario.create(datos);
};

export const buscarUsuarioPorEmail = async (email) => {
  return await Usuario.findOne({ email });
};

export const buscarUsuarioPorId = async (id) => {
  return await Usuario.findById(id).select("-password");
};

export const buscarUsuarioPorToken = async (token) => {
  return await Usuario.findOne({ tokenVerificacion: token });
};

export const buscarUsuarioPorResetToken = async (token) => {
  return await Usuario.findOne({
    resetPasswordToken: token,
    resetPasswordExpire: { $gt: Date.now() },
  });
};

export const listarUsuarios = async () => {
  return await Usuario.find().select("-password");
};

export const actualizarUsuario = async (id, datos) => {
  return await Usuario.findByIdAndUpdate(id, datos, {
    new: true,
  }).select("-password");
};

export const eliminarUsuario = async (id) => {
  return await Usuario.findByIdAndDelete(id);
};