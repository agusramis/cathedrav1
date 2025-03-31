class MateriaEstado < ApplicationRecord
  include Resetable
  enum estado: { Creada: 'creada', Archivada: 'archivada' }
  belongs_to :materia
  # metodos publicos
  def archivar
    update_attributes(fecha_hasta: Time.now)
  end
end
