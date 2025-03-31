class CreateParametro < ActiveRecord::Migration[5.2]
  def change
    create_table :parametro do |t|
      t.string :nombre
      t.string :valor
      t.string :fecha_baja

      t.timestamps
    end
  end
end
