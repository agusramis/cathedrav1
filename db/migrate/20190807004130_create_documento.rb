class CreateDocumento < ActiveRecord::Migration[5.2]
  def change
    create_table :documento do |t|
      t.string :nombre
      t.string :link_documento

      t.timestamps
    end
  end
end
