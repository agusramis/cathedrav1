class Parametro < ApplicationRecord
  include Resetable
  # validaciones
  validates :nombre, presence: true, uniqueness: true
  validates :valor, presence: true, length: { maximum: 250 }
  validate :valor_parametro
  # relaciones
  # metodos publicos
  def baja
    update_attribute(:fecha_baja, Time.now)
  end

  def restaurar
    update_attribute(:fecha_baja, nil)
  end

  private

  def valor_parametro
    if nombre == 'EdadAlumnos' && !valor.match('^[1-9]\d{0,1}$')
        errors.add :valor, 'Debe ingresar un número entero mayor a 0 y menor a 99'
    end
    if nombre == 'EdadPersonal' && !valor.match('^[1-9]\d{0,1}$')
      errors.add :valor, 'Debe ingresar un número entero mayor a 0 y menor a 99'
    end
  end
end
