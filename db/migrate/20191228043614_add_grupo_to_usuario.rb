class AddGrupoToUsuario < ActiveRecord::Migration[5.2]
  def change
    add_column :usuario, :grupo, :string
  end
end
