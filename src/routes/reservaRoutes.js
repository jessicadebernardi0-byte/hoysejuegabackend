import express from "express";
import {
  crearReserva,
  obtenerReservas,
  obtenerMisReservas,
  editarReserva,
  borrarReserva,
} from "../controllers/reservaController.js";

import { protegerRuta } from "../middleware/auth.js";

const router = express.Router();

router.post("/", protegerRuta, crearReserva);
router.get("/", protegerRuta, obtenerReservas);
router.get("/mis-reservas", protegerRuta, obtenerMisReservas);
router.put("/:id", protegerRuta, editarReserva);
router.delete("/:id", protegerRuta, borrarReserva);

export default router;
