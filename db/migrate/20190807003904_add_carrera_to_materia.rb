class AddCarreraToMateria < ActiveRecord::Migration[5.2]
  def change
    add_reference :materia, :carrera, foreign_key: true
  end
end
