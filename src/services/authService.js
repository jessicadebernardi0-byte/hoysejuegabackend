import bcrypt from "bcrypt";
import crypto from "crypto";

import {
  crearUsuario,
  buscarUsuarioPorEmail,
  buscarUsuarioPorToken,
} from "../repositories/usuarioRepository.js";

import { generarToken } from "../utils/jwt.js";
import { enviarEmailVerificacion } from "../utils/email.js";

export const registrarUsuario = async (datos) => {
  const { nombre, email, password, telefono, ciudad } = datos;

  const usuarioExistente = await buscarUsuarioPorEmail(email);

  if (usuarioExistente) {
    throw new Error("El email ya está registrado");
  }

  const passwordHasheada = await bcrypt.hash(password, 10);
  const tokenVerificacion = crypto.randomBytes(32).toString("hex");

  const nuevoUsuario = await crearUsuario({
    nombre,
    email,
    password: passwordHasheada,
    telefono,
    ciudad,
    rol: "usuario",
    activo: false,
    verificado: false,
    tokenVerificacion,
  });

  try {
    await enviarEmailVerificacion(email, tokenVerificacion);
  } 
  
  catch (error) {
    console.log("===== ERROR BREVO =====");
    console.log("STATUS:", error.response?.status);
    console.log("DATA:", error.response?.data);
    console.log("=======================");

    console.log(
      "Link de verificación manual:",
      `${process.env.BACKEND_URL}/api/auth/verificar/${tokenVerificacion}`
    );
  }

  return {
    id: nuevoUsuario._id,
    nombre: nuevoUsuario.nombre,
    email: nuevoUsuario.email,
    rol: nuevoUsuario.rol,
    activo: nuevoUsuario.activo,
    verificado: nuevoUsuario.verificado,
  };
};

export const loginUsuario = async ({ email, password }) => {
  const usuario = await buscarUsuarioPorEmail(email);

  if (!usuario) {
    throw new Error("Email o contraseña incorrectos");
  }

  const passwordValida = await bcrypt.compare(password, usuario.password);

  if (!passwordValida) {
    throw new Error("Email o contraseña incorrectos");
  }

 
  const token = generarToken(usuario);

  return {
    token,
    usuario: {
      id: usuario._id,
      nombre: usuario.nombre,
      email: usuario.email,
      rol: usuario.rol,
      telefono: usuario.telefono,
      ciudad: usuario.ciudad,
    },
  };
};

export const verificarUsuario = async (token) => {
  const usuario = await buscarUsuarioPorToken(token);

  if (!usuario) {
    throw new Error("Token inválido o expirado");
  }

  usuario.activo = true;
  usuario.verificado = true;
  usuario.tokenVerificacion = null;

  await usuario.save();

  return usuario;
};