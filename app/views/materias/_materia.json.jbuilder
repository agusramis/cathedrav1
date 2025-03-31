json.extract! materia, :id, :codigo, :nombre, :ciclo_lectivo, :descripcion, :fecha_inicio, :fecha_fin, :autoarchivar, :password, :fecha_baja, :created_at, :updated_at
json.url materia_url(materia, format: :json)
