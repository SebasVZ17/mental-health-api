/* eslint-disable @typescript-eslint/no-explicit-any */
import { Response } from 'express'
import { AuthRequest } from '../../middlewares/auth.middleware'
import { RecomendacionUseCase } from '../../application/usecases/RecomendacionUseCase'
import { RecomendacionRepository } from '../../infrastructure/repositories/RecomendacionRepository'

const recomendacionUseCase = new RecomendacionUseCase(new RecomendacionRepository())

export const getRecomendaciones: any = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const recomendaciones = await recomendacionUseCase.getAll()
    res.json(recomendaciones)
  } catch (error: unknown) {
    const err = error as { status?: number; message?: string }
    res.status(err.status || 500).json({ error: err.message || 'Error interno del servidor' })
  }
}

export const getRecomendacionById: any = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const recomendacion = await recomendacionUseCase.getById(req.params.id as string)
    res.json(recomendacion)
  } catch (error: unknown) {
    const err = error as { status?: number; message?: string }
    res.status(err.status || 500).json({ error: err.message || 'Error interno del servidor' })
  }
}

export const createRecomendacion: any = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const recomendacion = await recomendacionUseCase.create(req.usuario.rol, req.body)
    res.status(201).json(recomendacion)
  } catch (error: unknown) {
    const err = error as { status?: number; message?: string }
    res.status(err.status || 500).json({ error: err.message || 'Error interno del servidor' })
  }
}

export const asignarRecomendacion: any = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const asignacion = await recomendacionUseCase.asignar(req.usuario.rol, req.body)
    res.status(201).json(asignacion)
  } catch (error: unknown) {
    const err = error as { status?: number; message?: string }
    res.status(err.status || 500).json({ error: err.message || 'Error interno del servidor' })
  }
}

export const getRecomendacionesEmpleado: any = async (
  req: AuthRequest,
  res: Response
): Promise<void> => {
  try {
    const recomendaciones = await recomendacionUseCase.getByEmpleado(req.usuario.id)
    res.json(recomendaciones)
  } catch (error: unknown) {
    const err = error as { status?: number; message?: string }
    res.status(err.status || 500).json({ error: err.message || 'Error interno del servidor' })
  }
}

export const completarRecomendacion: any = async (
  req: AuthRequest,
  res: Response
): Promise<void> => {
  try {
    const recomendacion = await recomendacionUseCase.completar(req.params.id as string)
    res.json(recomendacion)
  } catch (error: unknown) {
    const err = error as { status?: number; message?: string }
    res.status(err.status || 500).json({ error: err.message || 'Error interno del servidor' })
  }
}

export const deleteRecomendacion: any = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    await recomendacionUseCase.deactivate(req.params.id as string)
    res.json({ message: 'Recomendación desactivada correctamente' })
  } catch (error: unknown) {
    const err = error as { status?: number; message?: string }
    res.status(err.status || 500).json({ error: err.message || 'Error interno del servidor' })
  }
}
