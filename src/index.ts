import express, { Request, Response } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

import authRoutes from './interface/routes/auth.routes'
import usuariosRoutes from './interface/routes/usuarios.routes'
import citasRoutes from './interface/routes/citas.routes'
import checkinRoutes from './interface/routes/checkins.routes'
import recomendacionesRoutes from './interface/routes/recomendaciones.routes'

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static('public'))

app.use('/api/v1/auth', authRoutes)
app.use('/api/v1/usuarios', usuariosRoutes)
app.use('/api/v1/citas', citasRoutes)
app.use('/api/v1/checkins', checkinRoutes)
app.use('/api/v1/recomendaciones', recomendacionesRoutes)

app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'API Salud Mental funcionando 🚀' })
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  process.stdout.write(`Servidor corriendo en http://localhost:${PORT}\n`)
})
