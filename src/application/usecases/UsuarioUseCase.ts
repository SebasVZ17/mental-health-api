import { IUsuarioRepository, CreateUsuarioData } from '../../domain/repositories/IUsuarioRepository'
import { CreateUsuarioDTO, AppError } from '../../types'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export class UsuarioUseCase {
  constructor(private usuarioRepository: IUsuarioRepository) {}

  async getAll() {
    return this.usuarioRepository.findAll()
  }

  async getById(id: string) {
    const usuario = await this.usuarioRepository.findById(id)
    if (!usuario) throw { status: 404, message: 'Usuario no encontrado' } as AppError
    return usuario
  }

  async register(data: CreateUsuarioDTO) {
    const existe = await this.usuarioRepository.findByEmail(data.email)
    if (existe) throw { status: 400, message: 'El email ya está registrado' } as AppError

    const passwordHash = await bcrypt.hash(data.password, 10)
    const usuarioData: CreateUsuarioData = {
      nombre: data.nombre,
      email: data.email,
      password_hash: passwordHash,
      rol: data.rol || 'empleado',
      empresa: data.empresa,
      cargo: data.cargo,
    }

    const usuario = (await this.usuarioRepository.create(usuarioData)) as {
      id: string
      nombre: string
      email: string
      rol: string
    }

    const token = jwt.sign(
      { id: usuario.id, email: usuario.email, rol: usuario.rol },
      process.env.JWT_SECRET as string,
      { expiresIn: '24h' }
    )

    return {
      token,
      usuario: {
        id: usuario.id,
        nombre: usuario.nombre,
        email: usuario.email,
        rol: usuario.rol,
      },
    }
  }

  async login(email: string, password: string) {
    const usuario = (await this.usuarioRepository.findByEmail(email)) as {
      id: string
      nombre: string
      email: string
      rol: string
      password_hash: string
    } | null

    if (!usuario) throw { status: 401, message: 'Credenciales inválidas' } as AppError

    const passwordValido = await bcrypt.compare(password, usuario.password_hash)
    if (!passwordValido) throw { status: 401, message: 'Credenciales inválidas' } as AppError

    const token = jwt.sign(
      { id: usuario.id, email: usuario.email, rol: usuario.rol },
      process.env.JWT_SECRET as string,
      { expiresIn: '24h' }
    )

    return {
      token,
      usuario: {
        id: usuario.id,
        nombre: usuario.nombre,
        email: usuario.email,
        rol: usuario.rol,
      },
    }
  }

  async update(id: string, data: Partial<CreateUsuarioData>) {
    const usuario = await this.usuarioRepository.findById(id)
    if (!usuario) throw { status: 404, message: 'Usuario no encontrado' } as AppError
    return this.usuarioRepository.update(id, data)
  }

  async delete(id: string) {
    const usuario = await this.usuarioRepository.findById(id)
    if (!usuario) throw { status: 404, message: 'Usuario no encontrado' } as AppError
    return this.usuarioRepository.delete(id)
  }
}
