export interface CreateUsuarioData {
  nombre: string
  email: string
  password_hash: string
  rol?: string
  empresa?: string
  cargo?: string
}

export interface IUsuarioRepository {
  findAll(): Promise<object[]>
  findById(id: string): Promise<object | null>
  create(data: CreateUsuarioData): Promise<object>
  update(id: string, data: Partial<CreateUsuarioData>): Promise<object>
  delete(id: string): Promise<void>
  findByEmail(email: string): Promise<object | null>
}
