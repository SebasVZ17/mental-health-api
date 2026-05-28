import { z } from 'zod'

export const createCitaSchema = z.object({
  psicologo_id: z.string().uuid('ID de psicólogo inválido'),
  fecha_hora: z.string().min(1, 'La fecha y hora es requerida'),
  duracion_minutos: z.number().int().positive().optional().default(60),
  notas: z.string().optional(),
})

export const updateCitaSchema = z.object({
  estado: z.enum(['pendiente', 'confirmada', 'completada', 'cancelada']).optional(),
  link_reunion: z.string().optional(),
  notas: z.string().optional(),
  duracion_minutos: z.number().int().positive().optional(),
})
