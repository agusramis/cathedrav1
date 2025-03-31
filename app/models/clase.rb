class Clase < ApplicationRecord
  include Resetable
  serialize :participacion, Array
  # validaciones
  validates :video, presence: true
  validates :nombre, presence: true
  validates :materia, presence: true
  validates :profesor, presence: true
  validates :documento, presence: true
  # relaciones
  belongs_to :materia
  belongs_to :documento
  has_many :enlaces
  belongs_to :video
  has_many :consultas
  belongs_to :profesor, class_name: 'Usuario'
  #metodos publicos
  def baja
    update_attribute(:fecha_baja, Time.now)
  end

  def restaurar
    update_attribute(:fecha_baja, nil)
  end
  def clase_recurso

  end
end
