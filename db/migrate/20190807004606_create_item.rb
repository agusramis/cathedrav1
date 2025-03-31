class CreateItem < ActiveRecord::Migration[5.2]
  def change
    create_table :item do |t|
      t.integer :numero
      t.string :titulo
      t.string :posicion_video

      t.timestamps
    end
  end
end
