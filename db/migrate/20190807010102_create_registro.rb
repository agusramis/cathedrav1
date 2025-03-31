class CreateRegistro < ActiveRecord::Migration[5.2]
  def change
    create_table :registro do |t|
      t.datetime :fecha_inicio
      t.datetime :fecha_fin

      t.timestamps
    end
  end
end
