class AddDescripcionToParametro < ActiveRecord::Migration[5.2]
  def change
    add_column :parametro, :descripcion, :text
  end
end
