class AddVideoToClase < ActiveRecord::Migration[5.2]
  def change
    add_reference :clase, :video, foreign_key: true
  end
end
