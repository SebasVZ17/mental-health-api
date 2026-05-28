/* eslint-disable @typescript-eslint/no-explicit-any */
import prisma from '../../db/prisma'
import { IRecomendacionRepository } from '../../domain/repositories/IRecomendacionRepository'

export class RecomendacionRepository implements IRecomendacionRepository {
  async findAll() {
    return prisma.recomendaciones.findMany({
      where: { activo: true },
      orderBy: { creado_en: 'desc' },
    })
  }

  async findById(id: string) {
    return prisma.recomendaciones.findUnique({ where: { id } })
  }

  async create(data: any) {
    return prisma.recomendaciones.create({ data })
  }

  async deactivate(id: string) {
    return prisma.recomendaciones.update({
      where: { id },
      data: { activo: false },
    })
  }

  async asignar(data: any) {
    return prisma.recomendaciones_empleado.create({ data })
  }

  async findByEmpleado(empleadoId: string) {
    return prisma.recomendaciones_empleado.findMany({
      where: { empleado_id: empleadoId },
      include: { recomendaciones: true },
      orderBy: { asignado_en: 'desc' },
    })
  }

  async completar(id: string) {
    return prisma.recomendaciones_empleado.update({
      where: { id },
      data: { completado: true, completado_en: new Date() },
    })
  }
}
