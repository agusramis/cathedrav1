class AddRoleClassToUsuario < ActiveRecord::Migration[5.2]
  def change
    add_reference :usuario, :rol, foreign_key: true
  end
end
