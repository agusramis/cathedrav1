class CreateEnlace < ActiveRecord::Migration[5.2]
  def change
    create_table :enlace do |t|
      t.string :nombre
      t.string :link_enlace
      t.datetime :fecha_baja

      t.timestamps
    end
  end
end
