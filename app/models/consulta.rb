class Consulta < ApplicationRecord
  include Resetable
  # validaciones
  validates :texto_consulta, presence: { message: 'Debe ingresar la consulta.' }, length: {maximum: 250}
  validates :posicion_video, presence: { message: 'Debe seleccionar una posición del video.'}, length: {maximum: 250}
  # relaciones
  belongs_to :clase
  belongs_to :profesor, class_name: 'Usuario', optional: true
  belongs_to :alumno, class_name: 'Usuario'
end
