class Rol < ApplicationRecord
  include Resetable
  # atributos
  serialize :permisos
  # validaciones
  validates :nombre, presence: true, uniqueness: true, length: { maximum: 30 }
  validates :descripcion, presence: true, length: { maximum: 250 }
  validates :grupo, presence: { message: 'debe seleccionar una opción' }
  # relaciones
  has_many :usuarios
  # atributos
  enum grupo: { Alumnos: 'alumnos', Administradores: 'administradores', Profesores: 'profesores' }
  # metodos publicos

  def usuarios_activos
    usuarios.where(fecha_baja: nil).count
  end

  def baja
    update_attribute(:fecha_baja, Time.now)
  end

  def restaurar
    update_attribute(:fecha_baja, nil)
  end

  def permisos
    super&.with_indifferent_access
  end
end
