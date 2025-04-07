class CreateUsuario < ActiveRecord::Migration[5.2]
  def change
    create_table :usuarios do |t|
      t.string :nombre_usuario
      t.string :legajo
      t.string :nombre
      t.string :apellido
      t.integer :telefono
      t.integer :celular
      t.integer :dni
      t.text :descripcion
      t.date :fecha_nacimiento
      t.string :nacionalidad
      t.string :sexo
      t.string :link_imagen
      t.string :direccion
      t.string :localidad
      t.string :provincia
      t.string :pais
      t.datetime :fecha_baja

      t.timestamps
    end
  end
end
