class AddMateriaToMateriaEstado < ActiveRecord::Migration[5.2]
  def change
    add_reference :materia_estado, :materia, foreign_key: true
  end
end
