import { Router } from 'express'
import { getEstadisticas, getUsuariosAdmin, toggleUsuarioActivo } from '../controllers/admin.controller'
import { verificarToken } from '../../middlewares/auth.middleware'
import { soloAdmin } from '../../middlewares/admin.middleware'

const router = Router()

router.get('/estadisticas', verificarToken, soloAdmin, getEstadisticas)
router.get('/usuarios', verificarToken, soloAdmin, getUsuariosAdmin)
router.patch('/usuarios/:id/toggle', verificarToken, soloAdmin, toggleUsuarioActivo)

export default router
