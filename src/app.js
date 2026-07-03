import express from "express";
import cors from "cors";


import authRoutes from "./routes/authRoutes.js";
import reservaRoutes from "./routes/reservaRoutes.js";
import complejoRoutes from "./routes/complejoRoutes.js";
import usuarioRoutes from "./routes/usuarioRoutes.js";


const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/reservas", reservaRoutes);
app.use("/api/complejos", complejoRoutes);
app.use("/api/usuarios", usuarioRoutes);



app.get("/", (req, res) => {
  res.json({
    message: "API Hoy Se Juega funcionando",
  });
});

export default app;