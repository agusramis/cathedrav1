class AddAclaracionToConsulta < ActiveRecord::Migration[5.2]
  def change
    add_column :consulta, :aclaracion, :boolean
  end
end
