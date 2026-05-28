import { Router } from 'express'
import {
  getRecomendaciones,
  getRecomendacionById,
  createRecomendacion,
  asignarRecomendacion,
  getRecomendacionesEmpleado,
  completarRecomendacion,
  deleteRecomendacion,
} from '../controllers/recomendaciones.controller'
import { verificarToken } from '../../middlewares/auth.middleware'
import { validate, validateUUID } from '../../middlewares/validate.middleware'
import {
  createRecomendacionSchema,
  asignarRecomendacionSchema,
} from '../../validators/recomendaciones.validator'

const router = Router()

router.get('/', verificarToken, getRecomendaciones)
router.get('/mis-recomendaciones', verificarToken, getRecomendacionesEmpleado)
router.get('/:id', verificarToken, validateUUID, getRecomendacionById)
router.post('/', verificarToken, validate(createRecomendacionSchema), createRecomendacion)
router.post('/asignar', verificarToken, validate(asignarRecomendacionSchema), asignarRecomendacion)
router.put('/completar/:id', verificarToken, validateUUID, completarRecomendacion)
router.delete('/:id', verificarToken, validateUUID, deleteRecomendacion)

export default router
