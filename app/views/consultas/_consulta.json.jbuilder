json.extract! consulta, :id, :posicion_video, :fecha_consulta, :texto_consulta, :vista_consulta, :fecha_respuesta, :texto_respuesta, :vista_respuesta, :created_at, :updated_at
json.url consulta_url(consulta, format: :json)
