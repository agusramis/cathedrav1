class CreateMateriaEstado < ActiveRecord::Migration[5.2]
  def change
    create_table :materia_estado do |t|
      t.datetime :fecha_desde
      t.datetime :fecha_hasta

      t.timestamps
    end
  end
end
