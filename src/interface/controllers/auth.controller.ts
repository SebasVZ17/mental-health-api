/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express'
import { UsuarioUseCase } from '../../application/usecases/UsuarioUseCase'
import { UsuarioRepository } from '../../infrastructure/repositories/UsuarioRepository'

const usuarioUseCase = new UsuarioUseCase(new UsuarioRepository())

export const register = async (req: Request, res: Response): Promise<void> => {
  try {
    const result = await usuarioUseCase.register(req.body)
    res.status(201).json(result)
  } catch (error: any) {
    res.status(error.status || 500).json({ error: error.message || 'Error interno del servidor' })
  }
}

export const login = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body
    const result = await usuarioUseCase.login(email, password)
    res.json(result)
  } catch (error: any) {
    res.status(error.status || 500).json({ error: error.message || 'Error interno del servidor' })
  }
}
