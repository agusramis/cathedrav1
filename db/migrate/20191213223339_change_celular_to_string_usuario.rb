class ChangeCelularToStringUsuario < ActiveRecord::Migration[5.2]
  def change
    change_column :usuario, :celular, :string
  end
end
