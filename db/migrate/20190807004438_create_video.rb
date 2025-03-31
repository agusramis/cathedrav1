class CreateVideo < ActiveRecord::Migration[5.2]
  def change
    create_table :video do |t|
      t.string :nombre
      t.string :link_video
      t.string :duracion

      t.timestamps
    end
  end
end
