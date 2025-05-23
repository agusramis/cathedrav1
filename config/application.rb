require 'logger'
require_relative 'boot'

require 'rails/all'
# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Cathedra
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 5.2
    # config.encoding = 'utf-8'
    # Environment variable
    # config.before_configuration do
    #   env_file = File.join(Rails.root, 'config', 'local_env.yml')
    #   if File.exist?(env_file)
    #     YAML.safe_load(File.open(env_file)).each do |key, value|
    #       ENV[key.to_s] = value
    #     end
    #   end
    # end
    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration can go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded after loading
    # the framework and any gems in your application.

    # Set Time.zone default to the specified zone and make Active Record auto-convert to this zone.
    # Run "rake -D time" for a list of tasks for finding time zone names. Default is UTC.
    # config.time_zone = 'Central Time (US & Canada)'

    # The default locale is :en and all translations from config/locales/*.rb,yml are auto loaded.
    # config.i18n.load_path += Dir[Rails.root.join('my', 'locales', '*.{rb,yml}').to_s]
    # config.i18n.default_locale = :de

    # setup npm folder for lookup
    config.assets.paths << Rails.root.join('vendor', 'assets', 'node_modules')
# fonts
    config.assets.precompile += %w( *.svg *.eot *.woff *.ttf )
# images
    config.assets.precompile += %w( *.png *.jpg )
# precompile vendor assets
    config.assets.precompile += %w( base.js base.css )
# precompile themes
config.assets.precompile += ['site/themes/theme-a.css']
# Controller assets
config.assets.precompile += [
  # Scripts
  'charts.js',
  'dashboard.js',
  'elements.js',
  'extras.js',
  'forms.js',
  'maps.js',
  'multilevel.js',
  'pages.js',
  'tables.js',
  'widgets.js',
  'blog.js',
  'ecommerce.js',
  'forum.js',
  # Stylesheets
  'charts.css',
  'dashboard.css',
  'elements.css',
  'extras.css',
  'forms.css',
  'maps.css',
  'multilevel.css',
  'pages.css',
  'tables.css',
  'widgets.css',
  'blog.css',
  'ecommerce.css',
  'forum.css'
]

# Default language
    config.i18n.default_locale = :'es'
    # config.action_view.field_error_proc = Proc.new { |html_tag, instance| "#{html_tag}".html_safe }
    # Mostrar errores inline sin agregar div porque modifica la estructura, utiliza span
    config.action_view.field_error_proc = Proc.new { |html_tag, instance| "<span class='field_with_errors'>#{html_tag}</span>".html_safe }
    # Time Zone
    config.time_zone = 'Buenos Aires'
    # CORS
    config.middleware.insert_before 0, Rack::Cors do
      allow do
        origins '*'
        resource '*', :headers => :any, :methods => [:get, :post, :options]
      end
    end
end
end
