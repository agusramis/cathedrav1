class AddClaseToConsulta < ActiveRecord::Migration[5.2]
  def change
    add_reference :consulta, :clase, foreign_key: true
  end
end
