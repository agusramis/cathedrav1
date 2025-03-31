class AddEstadoToMateriaEstado < ActiveRecord::Migration[5.2]
  def change
    add_column :materia_estado, :estado, :string, default: 'creada'
  end
end
