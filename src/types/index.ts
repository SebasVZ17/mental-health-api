export interface UsuarioPayload {
  id: string
  email: string
  rol: string
}

export interface PaginationQuery {
  page?: string
  limit?: string
}

export interface CitaQuery extends PaginationQuery {
  estado?: string
  fecha_inicio?: string
  fecha_fin?: string
}

export interface CreateUsuarioDTO {
  nombre: string
  email: string
  password: string
  password_hash?: string
  rol?: string
  empresa?: string
  cargo?: string
}

export interface CreateCitaDTO {
  psicologo_id: string
  fecha_hora: string | Date
  duracion_minutos?: number
  notas?: string
}

export interface UpdateCitaDTO {
  estado?: string
  link_reunion?: string
  notas?: string
  duracion_minutos?: number
}

export interface CreateCheckinDTO {
  empleado_id: string
  estado_animo: number
  nivel_estres: number
  horas_sueno?: number
  notas?: string
}

export interface UpdateCheckinDTO {
  estado_animo?: number
  nivel_estres?: number
  horas_sueno?: number
  notas?: string
}

export interface CreateRecomendacionDTO {
  titulo: string
  descripcion?: string
  tipo?: string
  url?: string
}

export interface AsignarRecomendacionDTO {
  empleado_id: string
  recomendacion_id: string
}

export interface AppError {
  status: number
  message: string
}
