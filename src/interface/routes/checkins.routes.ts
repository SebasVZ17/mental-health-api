import { Router } from 'express'
import {
  getCheckins,
  getCheckinsByEmpleado,
  createCheckin,
  updateCheckin,
  deleteCheckin,
} from '../controllers/checkins.controller'
import { verificarToken } from '../../middlewares/auth.middleware'
import { validate, validateUUID, validateQueryParams } from '../../middlewares/validate.middleware'
import { createCheckinSchema, updateCheckinSchema } from '../../validators/checkins.validator'

const router = Router()

router.get('/', verificarToken, validateQueryParams, getCheckins)
router.get('/empleado/:id', verificarToken, validateUUID, getCheckinsByEmpleado)
router.post('/', verificarToken, validate(createCheckinSchema), createCheckin)
router.put('/:id', verificarToken, validateUUID, validate(updateCheckinSchema), updateCheckin)
router.delete('/:id', verificarToken, validateUUID, deleteCheckin)

export default router
