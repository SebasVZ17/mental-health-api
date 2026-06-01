/* eslint-disable @typescript-eslint/no-explicit-any */
import { Response } from 'express'
import { AuthRequest } from '../../middlewares/auth.middleware'
import { CitaUseCase } from '../../application/usecases/CitaUseCase'
import { CitaRepository } from '../../infrastructure/repositories/CitaRepository'
import { UsuarioRepository } from '../../infrastructure/repositories/UsuarioRepository'

const citaUseCase = new CitaUseCase(new CitaRepository(), new UsuarioRepository())

export const getCitas: any = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const result = await citaUseCase.getAll(req.usuario, req.query)
    res.json(result)
  } catch (error: unknown) {
    const err = error as { status?: number; message?: string }
    res.status(err.status || 500).json({ error: err.message || 'Error interno del servidor' })
  }
}

export const getCitaById: any = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const cita = await citaUseCase.getById(req.params.id as string)
    res.json(cita)
  } catch (error: unknown) {
    const err = error as { status?: number; message?: string }
    res.status(err.status || 500).json({ error: err.message || 'Error interno del servidor' })
  }
}

export const createCita: any = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const cita = await citaUseCase.create(req.usuario.id, req.body)
    res.status(201).json(cita)
  } catch (error: unknown) {
    const err = error as { status?: number; message?: string }
    res.status(err.status || 500).json({ error: err.message || 'Error interno del servidor' })
  }
}

export const updateCita: any = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const cita = await citaUseCase.update(req.params.id as string, req.body)
    res.json(cita)
  } catch (error: unknown) {
    const err = error as { status?: number; message?: string }
    res.status(err.status || 500).json({ error: err.message || 'Error interno del servidor' })
  }
}

export const getMisPacientes: any = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const pacientes = await citaUseCase.getMisPacientes(req.usuario.id)
    res.json(pacientes)
  } catch (error: unknown) {
    const err = error as { status?: number; message?: string }
    res.status(err.status || 500).json({ error: err.message || 'Error interno del servidor' })
  }
}

export const deleteCita: any = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    await citaUseCase.cancel(req.params.id as string)
    res.json({ message: 'Cita cancelada correctamente' })
  } catch (error: unknown) {
    const err = error as { status?: number; message?: string }
    res.status(err.status || 500).json({ error: err.message || 'Error interno del servidor' })
  }
}
