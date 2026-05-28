/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express'
import { AuthRequest } from '../../middlewares/auth.middleware'
import { CheckinUseCase } from '../../application/usecases/CheckinUseCase'
import { CheckinRepository } from '../../infrastructure/repositories/CheckinRepository'

const checkinUseCase = new CheckinUseCase(new CheckinRepository())

export const getCheckins: Request | any = async (
  req: AuthRequest,
  res: Response
): Promise<void> => {
  try {
    const result = await checkinUseCase.getAll(req.usuario, req.query)
    res.json(result)
  } catch (error: unknown) {
    const err = error as { status?: number; message?: string }
    res.status(err.status || 500).json({ error: err.message || 'Error interno del servidor' })
  }
}

export const getCheckinsByEmpleado: Request | any = async (
  req: AuthRequest,
  res: Response
): Promise<void> => {
  try {
    const checkins = await checkinUseCase.getByEmpleado(req.params.id as string)
    res.json(checkins)
  } catch (error: unknown) {
    const err = error as { status?: number; message?: string }
    res.status(err.status || 500).json({ error: err.message || 'Error interno del servidor' })
  }
}

export const createCheckin: Request | any = async (
  req: AuthRequest,
  res: Response
): Promise<void> => {
  try {
    const checkin = await checkinUseCase.create(req.usuario.rol, req.body)
    res.status(201).json(checkin)
  } catch (error: unknown) {
    const err = error as { status?: number; message?: string }
    res.status(err.status || 500).json({ error: err.message || 'Error interno del servidor' })
  }
}

export const updateCheckin: Request | any = async (
  req: AuthRequest,
  res: Response
): Promise<void> => {
  try {
    const checkin = await checkinUseCase.update(req.params.id as string, req.body)
    res.json(checkin)
  } catch (error: unknown) {
    const err = error as { status?: number; message?: string }
    res.status(err.status || 500).json({ error: err.message || 'Error interno del servidor' })
  }
}

export const deleteCheckin: Request | any = async (
  req: AuthRequest,
  res: Response
): Promise<void> => {
  try {
    await checkinUseCase.delete(req.params.id as string)
    res.json({ message: 'Checkin eliminado correctamente' })
  } catch (error: unknown) {
    const err = error as { status?: number; message?: string }
    res.status(err.status || 500).json({ error: err.message || 'Error interno del servidor' })
  }
}
