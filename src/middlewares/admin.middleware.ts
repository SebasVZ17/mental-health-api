import { Response, NextFunction, RequestHandler } from 'express'
import { AuthRequest } from './auth.middleware'

export const soloAdmin: RequestHandler = (req, res, next): void => {
  const authReq = req as AuthRequest
  if (!authReq.usuario || authReq.usuario.rol !== 'admin') {
    res.status(403).json({ error: 'Acceso denegado. Se requiere rol de administrador.' })
    return
  }
  next()
}
