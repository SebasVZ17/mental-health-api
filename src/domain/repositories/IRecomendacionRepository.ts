import { CreateRecomendacionDTO, AsignarRecomendacionDTO } from '../../types'

export interface IRecomendacionRepository {
  findAll(): Promise<object[]>
  findById(id: string): Promise<object | null>
  create(data: CreateRecomendacionDTO): Promise<object>
  deactivate(id: string): Promise<object>
  asignar(data: AsignarRecomendacionDTO): Promise<object>
  findByEmpleado(empleadoId: string): Promise<object[]>
  completar(id: string): Promise<object>
}
