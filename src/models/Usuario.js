import mongoose from "mongoose";

const usuarioSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    password: {
      type: String,
      required: true,
    },

    telefono: {
      type: String,
      default: "",
    },

    ciudad: {
      type: String,
      default: "",
    },

    rol: {
      type: String,
      enum: ["usuario", "admin"],
      default: "usuario",
    },

    activo: {
      type: Boolean,
      default: false,
    },

    verificado: {
      type: Boolean,
      default: false,
    },

    tokenVerificacion: {
      type: String,
      default: null,
    },

    // ===========================
    // Recuperación de contraseña
    // ===========================

    resetPasswordToken: {
      type: String,
      default: null,
    },

    resetPasswordExpire: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Usuario", usuarioSchema);