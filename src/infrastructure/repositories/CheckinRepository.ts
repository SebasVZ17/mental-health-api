/* eslint-disable @typescript-eslint/no-explicit-any */
import prisma from '../../db/prisma'
import { ICheckinRepository } from '../../domain/repositories/ICheckinRepository'

export class CheckinRepository implements ICheckinRepository {
  async findAll(filters: any) {
    return prisma.checkins.findMany({
      where: filters.where,
      skip: filters.skip,
      take: filters.take,
      include: {
        usuarios: {
          select: { nombre: true, email: true },
        },
      },
      orderBy: { creado_en: 'desc' },
    })
  }

  async findByEmpleado(empleadoId: string) {
    return prisma.checkins.findMany({
      where: { empleado_id: empleadoId },
      orderBy: { fecha: 'desc' },
    })
  }

  async create(data: any) {
    return prisma.checkins.create({ data })
  }

  async update(id: string, data: any) {
    return prisma.checkins.update({ where: { id }, data })
  }

  async delete(id: string) {
    await prisma.checkins.delete({ where: { id } })
  }

  async count(filters: any) {
    return prisma.checkins.count({ where: filters.where })
  }
}
