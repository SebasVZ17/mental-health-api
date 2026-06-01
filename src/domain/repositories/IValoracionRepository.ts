export interface IValoracionRepository {
  create(data: {
    empleado_id: string
    psicologo_id: string
    cita_id: string
    puntuacion: number
    comentario?: string
  }): Promise<object>
  getByPsicologo(psicologoId: string): Promise<object[]>
  getTop(): Promise<object[]>
  existeByCita(empleadoId: string, citaId: string): Promise<boolean>
}