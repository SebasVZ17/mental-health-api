/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express'
import { AuthRequest } from '../../middlewares/auth.middleware'
import { UsuarioUseCase } from '../../application/usecases/UsuarioUseCase'
import { UsuarioRepository } from '../../infrastructure/repositories/UsuarioRepository'

const usuarioUseCase = new UsuarioUseCase(new UsuarioRepository())

export const getUsuarios = async (req: Request, res: Response): Promise<void> => {
  try {
    const usuarios = await usuarioUseCase.getAll()
    res.json(usuarios)
  } catch (error: unknown) {
    const err = error as { status?: number; message?: string }
    res.status(err.status || 500).json({ error: err.message || 'Error interno del servidor' })
  }
}

export const getUsuarioById = async (req: Request, res: Response): Promise<void> => {
  try {
    const usuario = await usuarioUseCase.getById(req.params.id as string)
    res.json(usuario)
  } catch (error: unknown) {
    const err = error as { status?: number; message?: string }
    res.status(err.status || 500).json({ error: err.message || 'Error interno del servidor' })
  }
}

export const updateUsuario: any = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const usuario = await usuarioUseCase.update(req.params.id as string, req.body)
    res.json(usuario)
  } catch (error: unknown) {
    const err = error as { status?: number; message?: string }
    res.status(err.status || 500).json({ error: err.message || 'Error interno del servidor' })
  }
}

export const deleteUsuario: any = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    await usuarioUseCase.delete(req.params.id as string)
    res.json({ message: 'Usuario eliminado correctamente' })
  } catch (error: unknown) {
    const err = error as { status?: number; message?: string }
    res.status(err.status || 500).json({ error: err.message || 'Error interno del servidor' })
  }
}
