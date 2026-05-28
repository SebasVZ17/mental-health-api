/* eslint-disable @typescript-eslint/no-explicit-any */
import prisma from '../../db/prisma'
import { IUsuarioRepository } from '../../domain/repositories/IUsuarioRepository'

export class UsuarioRepository implements IUsuarioRepository {
  async findAll() {
    return prisma.usuarios.findMany({
      select: {
        id: true,
        nombre: true,
        email: true,
        rol: true,
        empresa: true,
        cargo: true,
        activo: true,
        creado_en: true,
      },
    })
  }

  async findById(id: string) {
    return prisma.usuarios.findUnique({
      where: { id },
      select: {
        id: true,
        nombre: true,
        email: true,
        rol: true,
        empresa: true,
        cargo: true,
        activo: true,
        creado_en: true,
      },
    })
  }

  async findByEmail(email: string) {
    return prisma.usuarios.findUnique({
      where: { email },
    })
  }

  async create(data: any) {
    return prisma.usuarios.create({ data })
  }

  async update(id: string, data: any) {
    return prisma.usuarios.update({
      where: { id },
      data,
    })
  }

  async delete(id: string) {
    await prisma.usuarios.delete({ where: { id } })
  }
}
