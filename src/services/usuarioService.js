import {
  listarUsuarios,
  actualizarUsuario,
  eliminarUsuario,
} from "../repositories/usuarioRepository.js";

export const listarUsuariosService = async () => {
  return await listarUsuarios();
};

export const cambiarRolUsuarioService = async (id, rol) => {
  if (!["usuario", "admin"].includes(rol)) {
    throw new Error("Rol inválido");
  }

  return await actualizarUsuario(id, { rol });
};

export const eliminarUsuarioService = async (id) => {
  return await eliminarUsuario(id);
};