class AddUsuarioToConsulta < ActiveRecord::Migration[5.2]
  def change
    add_reference :consulta, :alumno, foreign_key: { to_table: :usuario }
    add_reference :consulta, :profesor, foreign_key: { to_table: :usuario }
  end
end
