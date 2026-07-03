import express from "express";

import {
  crearComplejo,
  obtenerComplejos,
  obtenerComplejoPorId,
  editarComplejo,
  borrarComplejo,
} from "../controllers/complejoController.js";

import { protegerRuta } from "../middleware/auth.js";

const router = express.Router();

router.get("/", obtenerComplejos);
router.get("/:id", obtenerComplejoPorId);

router.post("/", protegerRuta, crearComplejo);
router.put("/:id", protegerRuta, editarComplejo);
router.delete("/:id", protegerRuta, borrarComplejo);

export default router;