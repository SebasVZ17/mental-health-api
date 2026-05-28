import { Router } from 'express'
import {
  getUsuarios,
  getUsuarioById,
  updateUsuario,
  deleteUsuario,
} from '../controllers/usuarios.controller'
import { verificarToken } from '../../middlewares/auth.middleware'
import { validateUUID } from '../../middlewares/validate.middleware'

const router = Router()

router.get('/', getUsuarios)
router.get('/:id', validateUUID, getUsuarioById)
router.put('/:id', verificarToken, validateUUID, updateUsuario)
router.delete('/:id', verificarToken, validateUUID, deleteUsuario)

export default router
