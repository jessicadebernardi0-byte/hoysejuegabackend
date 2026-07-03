import {
  registrarUsuario,
  loginUsuario,
  verificarUsuario,
} from "../services/authService.js";

export const register = async (req, res) => {
  try {
    const usuario = await registrarUsuario(req.body);

    res.status(201).json({
      message:
        "Usuario registrado correctamente. Revisá tu correo para activar la cuenta.",
      usuario,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

export const login = async (req, res) => {
  try {
    const data = await loginUsuario(req.body);

    res.status(200).json({
      message: "Login correcto",
      ...data,
    });
  } catch (error) {
    res.status(401).json({
      message: error.message,
    });
  }
};

export const verificarCuenta = async (req, res) => {
  try {
    await verificarUsuario(req.params.token);

    res.status(200).send(`
      <h1>Cuenta verificada correctamente</h1>
      <p>Ya podés iniciar sesión en Hoy Se Juega.</p>
      <a href="${process.env.FRONTEND_URL}/login">Ir al login</a>
    `);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};