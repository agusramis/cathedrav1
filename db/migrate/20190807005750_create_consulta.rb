class CreateConsulta < ActiveRecord::Migration[5.2]
  def change
    create_table :consulta do |t|
      t.string :posicion_video
      t.datetime :fecha_consulta
      t.text :texto_consulta
      t.datetime :vista_consulta
      t.datetime :fecha_respuesta
      t.text :texto_respuesta
      t.datetime :vista_respuesta

      t.timestamps
    end
  end
end
