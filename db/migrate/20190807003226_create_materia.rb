class CreateMateria < ActiveRecord::Migration[5.2]
  def change
    create_table :materia do |t|
      t.string :codigo
      t.string :nombre
      t.integer :ciclo_lectivo
      t.text :descripcion
      t.date :fecha_inicio
      t.date :fecha_fin
      t.boolean :autoarchivar
      t.string :password
      t.datetime :fecha_baja

      t.timestamps
    end
  end
end
