/* eslint-disable @typescript-eslint/no-explicit-any */
import prisma from '../../db/prisma'
import { ICitaRepository } from '../../domain/repositories/ICitaRepository'

export class CitaRepository implements ICitaRepository {
  async findAll(filters: any) {
    return prisma.citas.findMany({
      where: filters.where,
      skip: filters.skip,
      take: filters.take,
      include: {
        usuarios_citas_empleado_idTousuarios: {
          select: { nombre: true, email: true, empresa: true },
        },
        usuarios_citas_psicologo_idTousuarios: {
          select: { nombre: true, email: true },
        },
      },
      orderBy: { fecha_hora: 'desc' },
    })
  }

  async findById(id: string) {
    return prisma.citas.findUnique({
      where: { id },
      include: {
        usuarios_citas_empleado_idTousuarios: {
          select: { nombre: true, email: true, empresa: true },
        },
        usuarios_citas_psicologo_idTousuarios: {
          select: { nombre: true, email: true },
        },
      },
    })
  }

  async create(data: any) {
    return prisma.citas.create({ data })
  }

  async update(id: string, data: any) {
    return prisma.citas.update({ where: { id }, data })
  }

  async cancel(id: string) {
    return prisma.citas.update({
      where: { id },
      data: { estado: 'cancelada' },
    })
  }

  async getMisPacientes(psicologoId: string) {
    const citas = await prisma.citas.findMany({
      where: { psicologo_id: psicologoId, estado: 'completada' },
      select: {
        usuarios_citas_empleado_idTousuarios: {
          select: { id: true, nombre: true, email: true },
        },
      },
      distinct: ['empleado_id'],
    })
    return citas.map((c) => c.usuarios_citas_empleado_idTousuarios)
  }

  async count(filters: any) {
    return prisma.citas.count({ where: filters.where })
  }
}
