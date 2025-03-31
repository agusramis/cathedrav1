class AddDocumentoToClase < ActiveRecord::Migration[5.2]
  def change
    add_reference :clase, :documento, foreign_key: true
  end
end
