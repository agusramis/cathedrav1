class AddParticipacionToClase < ActiveRecord::Migration[5.2]
  def change
    add_column :clase, :participacion, :text
  end
end
