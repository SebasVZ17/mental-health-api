/* eslint-disable @typescript-eslint/no-explicit-any */
import { Response } from 'express'
import { AuthRequest } from '../../middlewares/auth.middleware'
import { ValoracionUseCase } from '../../application/usecases/ValoracionUseCase'
import { ValoracionRepository } from '../../infrastructure/repositories/ValoracionRepository'

const valoracionUseCase = new ValoracionUseCase(new ValoracionRepository())

export const createValoracion: any = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const valoracion = await valoracionUseCase.create(req.usuario.id, req.body)
    res.status(201).json(valoracion)
  } catch (error: unknown) {
    const err = error as { status?: number; message?: string }
    res.status(err.status || 500).json({ error: err.message || 'Error interno del servidor' })
  }
}

export const getValoracionesByPsicologo: any = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const valoraciones = await valoracionUseCase.getByPsicologo(req.params.id as string)
    res.json(valoraciones)
  } catch (error: unknown) {
    const err = error as { status?: number; message?: string }
    res.status(err.status || 500).json({ error: err.message || 'Error interno del servidor' })
  }
}

export const getTopPsicologos: any = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const top = await valoracionUseCase.getTop()
    res.json(top)
  } catch (error: unknown) {
    const err = error as { status?: number; message?: string }
    res.status(err.status || 500).json({ error: err.message || 'Error interno del servidor' })
  }
}