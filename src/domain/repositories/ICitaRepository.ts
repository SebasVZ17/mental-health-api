import { CreateCitaDTO, UpdateCitaDTO } from '../../types'

export interface PaginationFilters {
  where: object
  skip: number
  take: number
}

export interface ICitaRepository {
  findAll(filters: PaginationFilters): Promise<object[]>
  findById(id: string): Promise<object | null>
  create(data: CreateCitaDTO & { empleado_id: string; estado: string }): Promise<object>
  update(id: string, data: UpdateCitaDTO): Promise<object>
  cancel(id: string): Promise<object>
  count(filters: { where: object }): Promise<number>
}
