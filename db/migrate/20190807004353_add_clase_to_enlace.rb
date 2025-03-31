class AddClaseToEnlace < ActiveRecord::Migration[5.2]
  def change
    add_reference :enlace, :clase, foreign_key: true
  end
end
