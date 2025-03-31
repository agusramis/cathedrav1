class AddEstadoToMateria < ActiveRecord::Migration[5.2]
  def change
    add_column :materia, :estado, :string, default: 'creada'
  end
end
