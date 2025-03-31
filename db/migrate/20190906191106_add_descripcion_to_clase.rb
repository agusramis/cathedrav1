class AddDescripcionToClase < ActiveRecord::Migration[5.2]
  def change
    add_column :clase, :descripcion, :text
  end
end
