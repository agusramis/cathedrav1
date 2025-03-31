class CreateCarrera < ActiveRecord::Migration[5.2]
  def change
    create_table :carrera do |t|
      t.string :codigo
      t.string :nombre
      t.text :descripcion
      t.datetime :fecha_baja

      t.timestamps
    end
  end
end
