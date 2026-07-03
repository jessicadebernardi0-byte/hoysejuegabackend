import express from "express";

import {
  register,
  login,
  verificarCuenta,
} from "../controllers/authController.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/verificar/:token", verificarCuenta);

export default router;