class CreateRol < ActiveRecord::Migration[5.2]
  def change
    create_table :rol do |t|
      t.string :nombre
      t.text :descripcion
      t.text :permisos
      t.string :grupo
      t.datetime :fecha_baja
      t.timestamps
    end
  end
end
