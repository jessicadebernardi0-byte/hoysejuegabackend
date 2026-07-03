import mongoose from "mongoose";

const complejoSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      required: true,
      trim: true,
    },

    ciudad: {
      type: String,
      required: true,
    },

    direccion: {
      type: String,
      default: "",
    },

    deportes: {
      type: String,
      required: true,
    },

    precio: {
      type: String,
      required: true,
    },

    puntuacion: {
      type: Number,
      default: 0,
    },

    imagen: {
      type: String,
      default: "",
    },

    disponible: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Complejo", complejoSchema);
