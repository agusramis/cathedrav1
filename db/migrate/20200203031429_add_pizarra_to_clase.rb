class AddPizarraToClase < ActiveRecord::Migration[5.2]
  def change
    add_column :clase, :pizarra, :boolean
  end
end
