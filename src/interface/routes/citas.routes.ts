import { Router } from 'express'
import {
  getCitas,
  getCitaById,
  createCita,
  updateCita,
  deleteCita,
  getMisPacientes,
} from '../controllers/citas.controller'
import { verificarToken } from '../../middlewares/auth.middleware'
import { validate, validateUUID, validateQueryParams } from '../../middlewares/validate.middleware'
import { createCitaSchema, updateCitaSchema } from '../../validators/citas.validator'

const router = Router()

router.get('/mis-pacientes', verificarToken, getMisPacientes)
router.get('/', verificarToken, validateQueryParams, getCitas)
router.get('/:id', verificarToken, validateUUID, getCitaById)
router.post('/', verificarToken, validate(createCitaSchema), createCita)
router.put('/:id', verificarToken, validateUUID, validate(updateCitaSchema), updateCita)
router.delete('/:id', verificarToken, validateUUID, deleteCita)

export default router
