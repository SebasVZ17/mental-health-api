import { Request, Response, NextFunction } from 'express'
import { ZodSchema, z } from 'zod'

export const validate =
  (schema: ZodSchema) =>
  (req: Request, res: Response, next: NextFunction): void => {
    try {
      const result = schema.safeParse(req.body)

      if (!result.success) {
        const errors = result.error.issues.map((e) => ({
          field: e.path.join('.'),
          message: e.message,
        }))
        res.status(400).json({ errors })
        return
      }

      req.body = result.data
      next()
    } catch (error) {
      res.status(500).json({ error: 'Error de validación' })
    }
  }

export const validateUUID = (req: Request, res: Response, next: NextFunction): void => {
  const { id } = req.params
  const uuidSchema = z.string().uuid('El ID no es un UUID válido')
  const result = uuidSchema.safeParse(id)

  if (!result.success) {
    res.status(400).json({ error: 'El ID proporcionado no es válido' })
    return
  }

  next()
}

export const validateQueryParams = (req: Request, res: Response, next: NextFunction): void => {
  const { page, limit } = req.query

  if (page && isNaN(parseInt(page as string))) {
    res.status(400).json({ error: 'El parámetro page debe ser un número' })
    return
  }

  if (limit && isNaN(parseInt(limit as string))) {
    res.status(400).json({ error: 'El parámetro limit debe ser un número' })
    return
  }

  next()
}
