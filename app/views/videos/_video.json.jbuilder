json.extract! video, :id, :nombre, :link_video, :duracion, :created_at, :updated_at
json.url video_url(video, format: :json)
