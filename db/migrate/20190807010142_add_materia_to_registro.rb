class AddMateriaToRegistro < ActiveRecord::Migration[5.2]
  def change
    add_reference :registro, :materia, foreign_key: true
  end
end
