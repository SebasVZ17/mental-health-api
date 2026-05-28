import { Request, Response, NextFunction, RequestHandler } from 'express'
import jwt from 'jsonwebtoken'
import { UsuarioPayload } from '../types'

export interface AuthRequest extends Request {
  usuario: UsuarioPayload
}

export const verificarToken: RequestHandler = (req, res, next): void => {
  try {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    if (!token) {
      res.status(401).json({ error: 'Acceso denegado, token requerido' })
      return
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as UsuarioPayload
    ;(req as AuthRequest).usuario = decoded
    next()
  } catch (error) {
    res.status(401).json({ error: 'Token inválido o expirado' })
  }
}
