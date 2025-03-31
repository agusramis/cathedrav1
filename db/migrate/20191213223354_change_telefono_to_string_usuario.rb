class ChangeTelefonoToStringUsuario < ActiveRecord::Migration[5.2]
  def change
    change_column :usuario, :telefono, :string
  end
end
