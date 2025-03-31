class AddMateriaToClase < ActiveRecord::Migration[5.2]
  def change
    add_reference :clase, :materia, foreign_key: true
  end
end
