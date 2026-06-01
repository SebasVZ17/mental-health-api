import { IValoracionRepository } from '../../domain/repositories/IValoracionRepository'
import { AppError } from '../../types'

export class ValoracionUseCase {
  constructor(private valoracionRepository: IValoracionRepository) {}

  async create(empleadoId: string, data: {
    psicologo_id: string
    cita_id: string
    puntuacion: number
    comentario?: string
  }) {
    const existe = await this.valoracionRepository.existeByCita(empleadoId, data.cita_id)
    if (existe) throw { status: 400, message: 'Ya calificaste esta cita' } as AppError

    return this.valoracionRepository.create({
      empleado_id: empleadoId,
      ...data
    })
  }

  async getByPsicologo(psicologoId: string) {
    return this.valoracionRepository.getByPsicologo(psicologoId)
  }

  async getTop() {
    return this.valoracionRepository.getTop()
  }
}