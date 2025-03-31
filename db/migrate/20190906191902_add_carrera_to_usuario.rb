class AddCarreraToUsuario < ActiveRecord::Migration[5.2]
  def change
    add_reference :usuario, :carrera, foreign_key: true
  end
end
