Cloudinary.config do |config|
  config.cloud_name = Rails.application.credentials.CLOUD_NAME
  config.api_key = Rails.application.credentials.CLOUD_APIKEY
  config.api_secret = Rails.application.credentials.CLOUD_APISECRET
  config.secure = true
  config.cdn_subdomain = true
end
