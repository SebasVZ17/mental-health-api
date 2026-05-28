import { ICheckinRepository } from '../../domain/repositories/ICheckinRepository'
import {
  CreateCheckinDTO,
  UpdateCheckinDTO,
  AppError,
  PaginationQuery,
  UsuarioPayload,
} from '../../types'

export class CheckinUseCase {
  constructor(private checkinRepository: ICheckinRepository) {}

  async getAll(usuario: UsuarioPayload, query: PaginationQuery) {
    const { page = '1', limit = '10' } = query
    const skip = (parseInt(page) - 1) * parseInt(limit)
    const where: Record<string, unknown> =
      usuario.rol === 'empleado' ? { empleado_id: usuario.id } : {}

    const [checkins, total] = await Promise.all([
      this.checkinRepository.findAll({ where, skip, take: parseInt(limit) }),
      this.checkinRepository.count({ where }),
    ])

    return { data: checkins, meta: { total, page: parseInt(page), limit: parseInt(limit) } }
  }

  async getByEmpleado(empleadoId: string) {
    return this.checkinRepository.findByEmpleado(empleadoId)
  }

  async create(rol: string, data: CreateCheckinDTO) {
    if (rol !== 'psicologo')
      throw { status: 403, message: 'Solo los psicólogos pueden registrar checkins' } as AppError
    return this.checkinRepository.create(data)
  }

  async update(id: string, data: UpdateCheckinDTO) {
    return this.checkinRepository.update(id, data)
  }

  async delete(id: string) {
    return this.checkinRepository.delete(id)
  }
}
