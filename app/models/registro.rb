class Registro < ApplicationRecord
  include Resetable
  belongs_to :materia
  belongs_to :usuario
  # scope :de_profesor, references(Usuario).merge(Usuario.con_rol('Profesor'))
  # scope :de_alumno, references(Usuario).merge(Usuario.con_rol('Alumno'))
  def desinscribir
    update_attribute(:fecha_fin, Time.now)
  end
end
