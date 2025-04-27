# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.1].define(version: 2020_02_03_230744) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "carrera", force: :cascade do |t|
    t.string "codigo"
    t.string "nombre"
    t.text "descripcion"
    t.datetime "fecha_baja", precision: nil
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
  end

  create_table "clase", force: :cascade do |t|
    t.string "nombre"
    t.boolean "visible"
    t.datetime "fecha_baja", precision: nil
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.bigint "materia_id"
    t.bigint "documento_id"
    t.bigint "video_id"
    t.bigint "profesor_id"
    t.text "descripcion"
    t.text "participacion"
    t.boolean "pizarra"
    t.index ["documento_id"], name: "index_clase_on_documento_id"
    t.index ["materia_id"], name: "index_clase_on_materia_id"
    t.index ["profesor_id"], name: "index_clase_on_profesor_id"
    t.index ["video_id"], name: "index_clase_on_video_id"
  end

  create_table "consulta", force: :cascade do |t|
    t.string "posicion_video"
    t.datetime "fecha_consulta", precision: nil
    t.text "texto_consulta"
    t.datetime "vista_consulta", precision: nil
    t.datetime "fecha_respuesta", precision: nil
    t.text "texto_respuesta"
    t.datetime "vista_respuesta", precision: nil
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.bigint "clase_id"
    t.bigint "alumno_id"
    t.bigint "profesor_id"
    t.boolean "aclaracion"
    t.index ["alumno_id"], name: "index_consulta_on_alumno_id"
    t.index ["clase_id"], name: "index_consulta_on_clase_id"
    t.index ["profesor_id"], name: "index_consulta_on_profesor_id"
  end

  create_table "documento", force: :cascade do |t|
    t.string "nombre"
    t.string "link_documento"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
  end

  create_table "enlace", force: :cascade do |t|
    t.string "nombre"
    t.string "link_enlace"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.bigint "clase_id"
    t.index ["clase_id"], name: "index_enlace_on_clase_id"
  end

  create_table "item", force: :cascade do |t|
    t.string "titulo"
    t.string "posicion_video"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.bigint "video_id"
    t.index ["video_id"], name: "index_item_on_video_id"
  end

  create_table "materia", force: :cascade do |t|
    t.string "codigo"
    t.string "nombre"
    t.integer "ciclo_lectivo"
    t.text "descripcion"
    t.date "fecha_inicio"
    t.date "fecha_fin"
    t.boolean "autoarchivar"
    t.string "password"
    t.datetime "fecha_baja", precision: nil
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.string "estado", default: "creada"
    t.bigint "carrera_id"
    t.index ["carrera_id"], name: "index_materia_on_carrera_id"
  end

  create_table "materia_estado", force: :cascade do |t|
    t.datetime "fecha_desde", precision: nil
    t.datetime "fecha_hasta", precision: nil
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.bigint "materia_id"
    t.string "estado", default: "creada"
    t.index ["materia_id"], name: "index_materia_estado_on_materia_id"
  end

  create_table "parametro", force: :cascade do |t|
    t.string "nombre"
    t.string "valor"
    t.string "fecha_baja"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.text "descripcion"
  end

  create_table "registro", force: :cascade do |t|
    t.datetime "fecha_inicio", precision: nil
    t.datetime "fecha_fin", precision: nil
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.bigint "materia_id"
    t.bigint "usuario_id"
    t.index ["materia_id"], name: "index_registro_on_materia_id"
    t.index ["usuario_id"], name: "index_registro_on_usuario_id"
  end

  create_table "rol", force: :cascade do |t|
    t.string "nombre"
    t.text "descripcion"
    t.text "permisos"
    t.string "grupo"
    t.datetime "fecha_baja", precision: nil
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
  end

  create_table "usuario", force: :cascade do |t|
    t.string "nombre_usuario"
    t.string "legajo"
    t.string "nombre"
    t.string "apellido"
    t.string "telefono"
    t.string "celular"
    t.integer "dni"
    t.text "descripcion"
    t.date "fecha_nacimiento"
    t.string "nacionalidad"
    t.string "sexo"
    t.string "link_imagen"
    t.string "direccion"
    t.string "localidad"
    t.string "provincia"
    t.string "pais"
    t.datetime "fecha_baja", precision: nil
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at", precision: nil
    t.datetime "remember_created_at", precision: nil
    t.string "role"
    t.bigint "carrera_id"
    t.bigint "rol_id"
    t.string "grupo"
    t.boolean "activado"
    t.index ["carrera_id"], name: "index_usuario_on_carrera_id"
    t.index ["email"], name: "index_usuario_on_email", unique: true
    t.index ["reset_password_token"], name: "index_usuario_on_reset_password_token", unique: true
    t.index ["rol_id"], name: "index_usuario_on_rol_id"
  end

  create_table "video", force: :cascade do |t|
    t.string "nombre"
    t.string "link_video"
    t.string "duracion"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
  end

  add_foreign_key "clase", "documento"
  add_foreign_key "clase", "materia"
  add_foreign_key "clase", "usuario", column: "profesor_id"
  add_foreign_key "clase", "video"
  add_foreign_key "consulta", "clase"
  add_foreign_key "consulta", "usuario", column: "alumno_id"
  add_foreign_key "consulta", "usuario", column: "profesor_id"
  add_foreign_key "enlace", "clase"
  add_foreign_key "item", "video"
  add_foreign_key "materia", "carrera"
  add_foreign_key "materia_estado", "materia"
  add_foreign_key "registro", "materia"
  add_foreign_key "registro", "usuario"
  add_foreign_key "usuario", "carrera"
  add_foreign_key "usuario", "rol"
end
