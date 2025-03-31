class AddProfesorToClase < ActiveRecord::Migration[5.2]
  def change
    add_reference :clase, :profesor, foreign_key: { to_table: :usuario }
  end
end
