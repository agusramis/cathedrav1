json.extract! documento, :id, :nombre, :link_documento, :created_at, :updated_at
json.url documento_url(documento, format: :json)
