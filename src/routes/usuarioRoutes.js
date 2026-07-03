import express from "express";

import {
  obtenerUsuarios,
  cambiarRolUsuario,
  borrarUsuario,
} from "../controllers/usuarioController.js";

import { protegerRuta } from "../middleware/auth.js";

const router = express.Router();

router.get("/", protegerRuta, obtenerUsuarios);
router.put("/:id/rol", protegerRuta, cambiarRolUsuario);
router.delete("/:id", protegerRuta, borrarUsuario);

export default router;