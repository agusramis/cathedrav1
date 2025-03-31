class CreateClase < ActiveRecord::Migration[5.2]
  def change
    create_table :clase do |t|
      t.string :nombre
      t.boolean :visible
      t.datetime :fecha_baja

      t.timestamps
    end
  end
end
