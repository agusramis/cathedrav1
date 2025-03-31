class AddActivadoToUsuario < ActiveRecord::Migration[5.2]
  def change
    add_column :usuario, :activado, :boolean
  end
end
