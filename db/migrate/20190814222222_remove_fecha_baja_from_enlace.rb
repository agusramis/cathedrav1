class RemoveFechaBajaFromEnlace < ActiveRecord::Migration[5.2]
  def change
    remove_column :enlace, :fecha_baja, :datetime
  end
end
