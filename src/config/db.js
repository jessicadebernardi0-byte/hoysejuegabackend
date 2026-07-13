import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error("La variable MONGO_URI no está definida");
    }

    await mongoose.connect(process.env.MONGO_URI);

    console.log("✅ MongoDB conectado correctamente");
  } catch (error) {
    console.error("❌ Error al conectar MongoDB:", error.message);
    throw error;
  }
};