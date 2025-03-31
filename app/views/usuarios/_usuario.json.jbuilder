json.extract! usuario, :id, :nombre_usuario, :legajo, :nombre, :apellido, :telefono, :celular, :dni, :descripcion, :fecha_nacimiento, :nacionalidad, :sexo, :link_imagen, :direccion, :localidad, :provincia, :pais, :fecha_baja, :created_at, :updated_at
json.url usuario_url(usuario, format: :json)
