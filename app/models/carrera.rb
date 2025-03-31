class Carrera < ApplicationRecord
  include Resetable
  # validaciones
  validates :codigo, presence: true, uniqueness: true, length: { maximum: 16 }
  validates :nombre, presence: true, length: { maximum: 150 }
  validates :descripcion, length: { maximum: 250 }
  # relaciones
  has_many :materias
  has_many :usuarios
  #metodos publicos
  def materias_activas
    materias.where(estado: 'Creada')
  end

  def baja
    update_attribute(:fecha_baja, Time.now)
  end

  def restaurar
    update_attribute(:fecha_baja, nil)
  end
end
