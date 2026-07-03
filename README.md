# ⚽ Hoy Se Juega - Backend

Backend desarrollado con Node.js + Express para la plataforma **Hoy Se Juega**.

Provee una API REST para la administración de usuarios, autenticación, reservas y complejos deportivos.

---

# 🚀 Tecnologías utilizadas

- Node.js
- Express
- MongoDB
- Mongoose
- JWT
- bcrypt
- dotenv
- CORS
- Axios
- Brevo API (emails)
- Nodemon

---

# Arquitectura

Se implementó una arquitectura por capas:

```
src/

config/
controllers/
middleware/
models/
repositories/
routes/
services/
utils/

app.js
server.js
```

Cada capa posee una responsabilidad específica.

- Controllers → manejo de Request / Response.
- Services → lógica de negocio.
- Repositories → acceso a MongoDB.
- Models → definición de esquemas.
- Middleware → autenticación y validaciones.
- Utils → JWT y envío de emails.

---

# Instalación

Clonar el repositorio

```bash
git clone https://github.com/usuario/hoy-se-juega-backend.git
```

Ingresar

```bash
cd BACKEND
```

Instalar dependencias

```bash
npm install
```

Crear el archivo

```
.env
```

Ejemplo

```env
PORT=5000

MONGO_URI=mongodb://localhost:27017/hoysejuega

JWT_SECRET=tu_clave_secreta

BREVO_API_KEY=TU_API_KEY

BREVO_SENDER_EMAIL=correo@gmail.com

BREVO_SENDER_NAME=Hoy Se Juega

FRONTEND_URL=http://localhost:5173

BACKEND_URL=http://localhost:5000
```

Ejecutar

```bash
npm run dev
```

Servidor disponible en

```
http://localhost:5000
```

---

# API REST

## Auth

POST

```
/api/auth/register
```

POST

```
/api/auth/login
```

GET

```
/api/auth/verificar/:token
```

---

## Usuarios

GET

```
/api/usuarios
```

PUT

```
/api/usuarios/:id
```

DELETE

```
/api/usuarios/:id
```

---

## Complejos

GET

```
/api/complejos
```

POST

```
/api/complejos
```

PUT

```
/api/complejos/:id
```

DELETE

```
/api/complejos/:id
```

---

## Reservas

GET

```
/api/reservas
```

POST

```
/api/reservas
```

PUT

```
/api/reservas/:id
```

DELETE

```
/api/reservas/:id
```

---

# Seguridad

- Contraseñas encriptadas con bcrypt.
- Autenticación mediante JWT.
- Variables de entorno con dotenv.
- Middleware de autenticación.
- Arquitectura desacoplada.
- Verificación de correo preparada mediante Brevo.

---

# Base de datos

MongoDB

Colecciones principales

- usuarios
- reservas
- complejos

---

# Autor

Proyecto desarrollado como Trabajo Integrador Full Stack.

Universidad Tecnológica Nacional (UTN)

2026