import mongoose from "mongoose";

const reservaSchema = new mongoose.Schema(
  {
    usuario: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Usuario",
      required: true,
    },

    complejo: {
      type: String,
      required: true,
    },

    cancha: {
      type: String,
      required: true,
    },

    fecha: {
      type: String,
      required: true,
    },

    horario: {
      type: String,
      required: true,
    },

    estado: {
      type: String,
      enum: ["Pendiente", "Confirmada", "Cancelada"],
      default: "Pendiente",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Reserva", reservaSchema);