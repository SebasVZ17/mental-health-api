/* eslint-disable @typescript-eslint/no-explicit-any */
import prisma from '../../db/prisma'
import { IValoracionRepository } from '../../domain/repositories/IValoracionRepository'

export class ValoracionRepository implements IValoracionRepository {
  async create(data: {
    empleado_id: string
    psicologo_id: string
    cita_id: string
    puntuacion: number
    comentario?: string
  }) {
    return prisma.valoraciones.create({ data })
  }

  async getByPsicologo(psicologoId: string) {
    return prisma.valoraciones.findMany({
      where: { psicologo_id: psicologoId },
      include: {
        usuarios_valoraciones_empleado_idTousuarios: {
          select: { nombre: true }
        }
      },
      orderBy: { creado_en: 'desc' }
    })
  }

  async getTop() {
    const result = await prisma.valoraciones.groupBy({
      by: ['psicologo_id'],
      _avg: { puntuacion: true },
      _count: { puntuacion: true },
      orderBy: { _avg: { puntuacion: 'desc' } },
      take: 5,
    })

    const psicologos = await Promise.all(
      result.map(async (r: any) => {
        const usuario = await prisma.usuarios.findUnique({
          where: { id: r.psicologo_id },
          select: { id: true, nombre: true, email: true }
        })
        return {
          ...usuario,
          promedio: r._avg.puntuacion,
          total_valoraciones: r._count.puntuacion
        }
      })
    )

    return psicologos
  }

  async existeByCita(empleadoId: string, citaId: string) {
    const valoracion = await prisma.valoraciones.findFirst({
      where: { empleado_id: empleadoId, cita_id: citaId }
    })
    return !!valoracion
  }
}