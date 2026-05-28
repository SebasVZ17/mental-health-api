import { z } from 'zod'

export const createRecomendacionSchema = z.object({
  titulo: z.string().min(3, 'El título debe tener al menos 3 caracteres'),
  descripcion: z.string().optional(),
  tipo: z.string().optional(),
  url: z.string().url('URL inválida').optional(),
})

export const asignarRecomendacionSchema = z.object({
  empleado_id: z.string().uuid('ID de empleado inválido'),
  recomendacion_id: z.string().uuid('ID de recomendación inválido'),
})
