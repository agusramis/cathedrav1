class AddUsuarioToRegistro < ActiveRecord::Migration[5.2]
  def change
    add_reference :registro, :usuario, foreign_key: true
  end
end
