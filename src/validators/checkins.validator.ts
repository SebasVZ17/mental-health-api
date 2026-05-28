import { z } from 'zod'

export const createCheckinSchema = z.object({
  empleado_id: z.string().uuid('ID de empleado inválido'),
  estado_animo: z.number().int().min(1).max(5),
  nivel_estres: z.number().int().min(1).max(5),
  horas_sueno: z.number().positive().optional(),
  notas: z.string().optional(),
})

export const updateCheckinSchema = z.object({
  estado_animo: z.number().int().min(1).max(5).optional(),
  nivel_estres: z.number().int().min(1).max(5).optional(),
  horas_sueno: z.number().positive().optional(),
  notas: z.string().optional(),
})
