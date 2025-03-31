json.extract! carrera, :id, :codigo, :nombre, :descripcion, :fecha_baja, :created_at, :updated_at
json.url carrera_url(carrera, format: :json)
