import { IRecomendacionRepository } from '../../domain/repositories/IRecomendacionRepository'
import { CreateRecomendacionDTO, AsignarRecomendacionDTO, AppError } from '../../types'

export class RecomendacionUseCase {
  constructor(private recomendacionRepository: IRecomendacionRepository) {}

  async getAll() {
    return this.recomendacionRepository.findAll()
  }

  async getById(id: string) {
    const recomendacion = await this.recomendacionRepository.findById(id)
    if (!recomendacion) throw { status: 404, message: 'Recomendación no encontrada' } as AppError
    return recomendacion
  }

  async create(rol: string, data: CreateRecomendacionDTO) {
    if (rol !== 'psicologo' && rol !== 'admin')
      throw { status: 403, message: 'Solo los psicólogos pueden crear recomendaciones' } as AppError
    return this.recomendacionRepository.create(data)
  }

  async asignar(rol: string, data: AsignarRecomendacionDTO) {
    if (rol !== 'psicologo' && rol !== 'admin')
      throw {
        status: 403,
        message: 'Solo los psicólogos pueden asignar recomendaciones',
      } as AppError
    return this.recomendacionRepository.asignar(data)
  }

  async getByEmpleado(empleadoId: string) {
    return this.recomendacionRepository.findByEmpleado(empleadoId)
  }

  async completar(id: string) {
    return this.recomendacionRepository.completar(id)
  }

  async deactivate(id: string) {
    return this.recomendacionRepository.deactivate(id)
  }
}
