import { ICitaRepository } from '../../domain/repositories/ICitaRepository'
import { IUsuarioRepository } from '../../domain/repositories/IUsuarioRepository'
import { CreateCitaDTO, UpdateCitaDTO, AppError, CitaQuery, UsuarioPayload } from '../../types'

export class CitaUseCase {
  constructor(
    private citaRepository: ICitaRepository,
    private usuarioRepository: IUsuarioRepository
  ) {}

  async getAll(usuario: UsuarioPayload, query: CitaQuery) {
    const { page = '1', limit = '10', estado, fecha_inicio, fecha_fin } = query
    const skip = (parseInt(page) - 1) * parseInt(limit)
    const where: Record<string, unknown> =
      usuario.rol === 'empleado' ? { empleado_id: usuario.id } : { psicologo_id: usuario.id }

    if (estado) where.estado = estado
    if (fecha_inicio || fecha_fin) {
      const fechaFiltro: Record<string, Date> = {}
      if (fecha_inicio) fechaFiltro.gte = new Date(fecha_inicio)
      if (fecha_fin) fechaFiltro.lte = new Date(fecha_fin)
      where.fecha_hora = fechaFiltro
    }

    const [citas, total] = await Promise.all([
      this.citaRepository.findAll({ where, skip, take: parseInt(limit) }),
      this.citaRepository.count({ where }),
    ])

    return { data: citas, meta: { total, page: parseInt(page), limit: parseInt(limit) } }
  }

  async getById(id: string) {
    const cita = await this.citaRepository.findById(id)
    if (!cita) throw { status: 404, message: 'Cita no encontrada' } as AppError
    return cita
  }

  async create(empleadoId: string, data: CreateCitaDTO) {
    const psicologo = (await this.usuarioRepository.findById(data.psicologo_id)) as {
      rol: string
    } | null
    if (!psicologo || psicologo.rol !== 'psicologo')
      throw { status: 404, message: 'Psicólogo no encontrado' } as AppError

    return this.citaRepository.create({
      empleado_id: empleadoId,
      psicologo_id: data.psicologo_id,
      fecha_hora: new Date(data.fecha_hora),
      duracion_minutos: data.duracion_minutos || 60,
      notas: data.notas,
      estado: 'pendiente',
    })
  }

  async update(id: string, data: UpdateCitaDTO) {
    const cita = await this.citaRepository.findById(id)
    if (!cita) throw { status: 404, message: 'Cita no encontrada' } as AppError
    return this.citaRepository.update(id, data)
  }

  async cancel(id: string) {
    const cita = await this.citaRepository.findById(id)
    if (!cita) throw { status: 404, message: 'Cita no encontrada' } as AppError
    return this.citaRepository.cancel(id)
  }
}
