import {
  listarUsuariosService,
  cambiarRolUsuarioService,
  eliminarUsuarioService,
} from "../services/usuarioService.js";

export const obtenerUsuarios = async (req, res) => {
  try {
    const usuarios = await listarUsuariosService();
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const cambiarRolUsuario = async (req, res) => {
  try {
    const usuario = await cambiarRolUsuarioService(
      req.params.id,
      req.body.rol
    );

    res.json({
      message: "Rol actualizado correctamente",
      usuario,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

export const borrarUsuario = async (req, res) => {
  try {
    await eliminarUsuarioService(req.params.id);

    res.json({
      message: "Usuario eliminado correctamente",
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};