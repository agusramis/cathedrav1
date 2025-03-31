class AddRoleToUsuario < ActiveRecord::Migration[5.2]
  def change
    add_column :usuario, :role, :string
  end
end
