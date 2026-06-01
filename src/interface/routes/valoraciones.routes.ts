import { Router } from 'express'
import { createValoracion, getValoracionesByPsicologo, getTopPsicologos } from '../controllers/valoraciones.controller'
import { verificarToken } from '../../middlewares/auth.middleware'

const router = Router()

router.post('/', verificarToken, createValoracion)
router.get('/top', getTopPsicologos)
router.get('/psicologo/:id', verificarToken, getValoracionesByPsicologo)

export default router