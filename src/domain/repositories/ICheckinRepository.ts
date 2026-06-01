import { CreateCheckinDTO, UpdateCheckinDTO } from '../../types'

export interface PaginationFilters {
  where: object
  skip: number
  take: number
}

export interface ICheckinRepository {
  findAll(filters: PaginationFilters): Promise<object[]>
  findByEmpleado(empleadoId: string): Promise<object[]>
  create(data: CreateCheckinDTO): Promise<object>
  update(id: string, data: UpdateCheckinDTO): Promise<object>
  delete(id: string): Promise<void>
  count(filters: { where: object }): Promise<number>
  getEmpleadoIdsByPsicologo(psicologoId: string): Promise<string[]>
}
