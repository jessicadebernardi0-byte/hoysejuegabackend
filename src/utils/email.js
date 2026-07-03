import axios from "axios";

const BREVO_URL = "https://api.brevo.com/v3/smtp/email";

const enviarEmail = async ({ to, subject, htmlContent }) => {

  console.log("===== BREVO =====");
console.log("API KEY:", process.env.BREVO_API_KEY?.substring(0, 15));
console.log("SENDER:", process.env.BREVO_SENDER_EMAIL);
console.log("=================");

  return await axios.post(
    BREVO_URL,
    {
      sender: {
        name: process.env.BREVO_SENDER_NAME || "Hoy Se Juega",
        email: process.env.BREVO_SENDER_EMAIL,
      },
      to: [
        {
          email: to,
        },
      ],
      subject,
      htmlContent,
    },
    {
      headers: {
        "api-key": process.env.BREVO_API_KEY,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }
  );
};

export const enviarEmailVerificacion = async (email, token) => {
  const link = `${process.env.BACKEND_URL}/api/auth/verificar/${token}`;

  return await enviarEmail({
    to: email,
    subject: "Verificá tu cuenta - Hoy Se Juega",
    htmlContent: `
      <h2>Bienvenido a Hoy Se Juega ⚽</h2>
      <p>Gracias por registrarte.</p>
      <p>Para activar tu cuenta hacé clic en el siguiente enlace:</p>
      <a href="${link}">Verificar cuenta</a>
    `,
  });
};

export const enviarEmailRecuperacion = async (email, nombre, token) => {
  const link = `${process.env.FRONTEND_URL}/reset-password/${token}`;

  return await enviarEmail({
    to: email,
    subject: "Recuperación de contraseña - Hoy Se Juega",
    htmlContent: `
      <h2>Hola ${nombre}</h2>
      <p>Recibimos una solicitud para cambiar tu contraseña.</p>
      <a href="${link}">Cambiar contraseña</a>
      <p>Este enlace vence en 1 hora.</p>
    `,
  });
};

export const enviarEmailReserva = async (email, nombre, reserva) => {
  return await enviarEmail({
    to: email,
    subject: "Reserva registrada - Hoy Se Juega",
    htmlContent: `
      <h2>Hola ${nombre}</h2>
      <p>Tu reserva fue registrada correctamente.</p>
      <ul>
        <li><b>Complejo:</b> ${reserva.complejo}</li>
        <li><b>Cancha:</b> ${reserva.cancha}</li>
        <li><b>Fecha:</b> ${reserva.fecha}</li>
        <li><b>Horario:</b> ${reserva.horario}</li>
      </ul>
    `,
  });
};