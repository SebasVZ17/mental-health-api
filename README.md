# Mental Health API

API REST para una plataforma de salud mental empresarial. Los empleados pueden agendar citas con psicólogos, y los psicólogos pueden registrar checkins y asignar recomendaciones después de cada sesión.

## Tecnologías

- Node.js + Express + TypeScript
- PostgreSQL (Supabase)
- Prisma ORM
- JWT + bcrypt
- Zod

## Cómo correrlo

1. Clonar el repositorio
2. Instalar dependencias:
```bash
npm install
```

3. Crear el archivo `.env` basado en `.env.example` y agregar las credenciales

4. Generar el cliente de Prisma:
```bash
npx prisma generate
```

5. Correr el servidor:
```bash
npm run dev
```

## Variables de entorno

```env
DATABASE_URL=
JWT_SECRET=
PORT=3000
```

## Endpoints principales

### Auth
- `POST /api/v1/auth/register`
- `POST /api/v1/auth/login`

### Usuarios
- `GET /api/v1/usuarios`
- `GET /api/v1/usuarios/:id`
- `PUT /api/v1/usuarios/:id` 🔒
- `DELETE /api/v1/usuarios/:id` 🔒

### Citas
- `GET /api/v1/citas` 🔒
- `GET /api/v1/citas/:id` 🔒
- `POST /api/v1/citas` 🔒
- `PUT /api/v1/citas/:id` 🔒
- `DELETE /api/v1/citas/:id` 🔒

### Checkins
- `GET /api/v1/checkins` 🔒
- `GET /api/v1/checkins/empleado/:id` 🔒
- `POST /api/v1/checkins` 🔒 (solo psicólogos)
- `PUT /api/v1/checkins/:id` 🔒
- `DELETE /api/v1/checkins/:id` 🔒

### Recomendaciones
- `GET /api/v1/recomendaciones` 🔒
- `GET /api/v1/recomendaciones/mis-recomendaciones` 🔒
- `POST /api/v1/recomendaciones` 🔒 (solo psicólogos)
- `POST /api/v1/recomendaciones/asignar` 🔒 (solo psicólogos)
- `PUT /api/v1/recomendaciones/completar/:id` 🔒
- `DELETE /api/v1/recomendaciones/:id` 🔒 (solo psicólogos)

## Filtros disponibles

GET /api/v1/citas?estado=pendiente
GET /api/v1/citas?fecha_inicio=2026-05-01&fecha_fin=2026-05-31
GET /api/v1/checkins?page=1&limit=10

## Cómo obtener el token

Hacer login con `POST /api/v1/auth/login` y usar el token en el header:

## Arquitectura

El proyecto usa Clean Architecture dividido en 4 capas:
- `domain/` - interfaces
- `application/` - lógica de negocio
- `infrastructure/` - Prisma
- `interface/` - controladores y rutas