/* eslint-disable @typescript-eslint/no-explicit-any */
import { Response } from 'express'
import { AuthRequest } from '../../middlewares/auth.middleware'
import prisma from '../../db/prisma'

export const getEstadisticas: any = async (_req: AuthRequest, res: Response): Promise<void> => {
  try {
    const hace7Dias = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)

    const [
      totalUsuarios,
      totalEmpleados,
      totalPsicologos,
      totalCitas,
      citasPendientes,
      citasConfirmadas,
      citasCompletadas,
      citasCanceladas,
      citasUltimos7Dias,
      totalCheckins,
      checkinsCriticos,
      valoraciones,
    ] = await Promise.all([
      prisma.usuarios.count(),
      prisma.usuarios.count({ where: { rol: 'empleado' } }),
      prisma.usuarios.count({ where: { rol: 'psicologo' } }),
      prisma.citas.count(),
      prisma.citas.count({ where: { estado: 'pendiente' } }),
      prisma.citas.count({ where: { estado: 'confirmada' } }),
      prisma.citas.count({ where: { estado: 'completada' } }),
      prisma.citas.count({ where: { estado: 'cancelada' } }),
      prisma.citas.count({ where: { fecha_hora: { gte: hace7Dias } } }),
      prisma.checkins.count(),
      prisma.checkins.findMany({
        where: { OR: [{ estado_animo: { lte: 2 } }, { nivel_estres: { gte: 4 } }] },
        include: { usuarios: { select: { id: true, nombre: true, email: true, empresa: true } } },
        orderBy: { creado_en: 'desc' },
        take: 20,
      }),
      prisma.valoraciones.findMany({
        select: { psicologo_id: true, puntuacion: true },
      }),
    ])

    // Empleados críticos únicos (el checkin más reciente por empleado)
    const vistos = new Set<string>()
    const empleadosCriticos = checkinsCriticos
      .filter((c: any) => { if (vistos.has(c.empleado_id)) return false; vistos.add(c.empleado_id); return true })
      .slice(0, 10)
      .map((c: any) => ({
        id: c.usuarios.id,
        nombre: c.usuarios.nombre,
        email: c.usuarios.email,
        empresa: c.usuarios.empresa,
        estado_animo: c.estado_animo,
        nivel_estres: c.nivel_estres,
        horas_sueno: Number(c.horas_sueno ?? 0),
        fecha: c.fecha,
      }))

    // Top psicólogos agrupados manualmente
    const mapaPs: Record<string, { suma: number; total: number }> = {}
    for (const v of valoraciones) {
      if (!mapaPs[v.psicologo_id]) mapaPs[v.psicologo_id] = { suma: 0, total: 0 }
      mapaPs[v.psicologo_id].suma += v.puntuacion
      mapaPs[v.psicologo_id].total += 1
    }

    const psicologosIds = Object.keys(mapaPs)
    const psicologosData = psicologosIds.length > 0
      ? await prisma.usuarios.findMany({
          where: { id: { in: psicologosIds } },
          select: { id: true, nombre: true, email: true },
        })
      : []

    const topPsicologos = psicologosIds
      .map((id) => {
        const datos = psicologosData.find((u) => u.id === id)
        const { suma, total } = mapaPs[id]
        return { id, nombre: datos?.nombre ?? 'Desconocido', email: datos?.email ?? '', promedio: Number((suma / total).toFixed(1)), total_valoraciones: total }
      })
      .sort((a, b) => b.promedio - a.promedio)
      .slice(0, 5)

    res.json({
      usuarios: { total: totalUsuarios, empleados: totalEmpleados, psicologos: totalPsicologos },
      citas: {
        total: totalCitas,
        ultimos7Dias: citasUltimos7Dias,
        porEstado: { pendiente: citasPendientes, confirmada: citasConfirmadas, completada: citasCompletadas, cancelada: citasCanceladas },
      },
      checkins: { total: totalCheckins },
      empleadosCriticos,
      topPsicologos,
    })
  } catch (error: unknown) {
    const err = error as { status?: number; message?: string }
    res.status(err.status || 500).json({ error: err.message || 'Error interno del servidor' })
  }
}

export const getUsuariosAdmin: any = async (_req: AuthRequest, res: Response): Promise<void> => {
  try {
    const usuarios = await prisma.usuarios.findMany({
      select: { id: true, nombre: true, email: true, rol: true, empresa: true, cargo: true, activo: true, creado_en: true },
      orderBy: { creado_en: 'desc' },
    })
    res.json(usuarios)
  } catch (error: unknown) {
    const err = error as { status?: number; message?: string }
    res.status(err.status || 500).json({ error: err.message || 'Error interno del servidor' })
  }
}

export const toggleUsuarioActivo: any = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const id = req.params.id as string
    const usuario = await prisma.usuarios.findUnique({ where: { id } })
    if (!usuario) { res.status(404).json({ error: 'Usuario no encontrado' }); return }
    const nuevoEstado = usuario.activo === false ? true : false
    const actualizado = await prisma.usuarios.update({
      where: { id },
      data: { activo: nuevoEstado },
      select: { id: true, nombre: true, activo: true },
    })
    res.json(actualizado)
  } catch (error: unknown) {
    const err = error as { status?: number; message?: string }
    res.status(err.status || 500).json({ error: err.message || 'Error interno del servidor' })
  }
}
