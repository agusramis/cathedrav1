# Be sure to restart your server when you modify this file.

# Version of your assets, change this if you want to expire all your assets.
Rails.application.config.assets.version = '1.0'

# Add additional assets to the asset load path.
# Rails.application.config.assets.paths << Emoji.images_path
# Add Yarn node_modules folder to the asset load path.
Rails.application.config.assets.paths << Rails.root.join('node_modules')

# Add here assets used on a particular page. They need to be precompiled
Rails.application.config.assets.precompile += %w( components-jqueryui/jquery-ui.js )
Rails.application.config.assets.precompile += %w( jquery-ui-touch-punch/jquery.ui.touch-punch.min )
Rails.application.config.assets.precompile += %w( x-editable/dist/bootstrap3-editable/css/bootstrap-editable.css )
Rails.application.config.assets.precompile += %w( x-editable/dist/bootstrap3-editable/js/bootstrap-editable.min.js )

# Precompile additional assets.
# application.js, application.css, and all non-JS/CSS in the app/assets
# folder are already added.
# Rails.application.config.assets.precompile += %w( admin.js admin.css )

# Precompile assets
Rails.application.config.assets.precompile += %w( materias.css materias.js )
Rails.application.config.assets.precompile += %w( usuarios.css usuarios.js )
Rails.application.config.assets.precompile += %w( clases.css clases.js )
Rails.application.config.assets.precompile += %w( enlaces.css enlaces.js )
Rails.application.config.assets.precompile += %w( usuarios/sessions.css usuarios/sessions.js )
Rails.application.config.assets.precompile += %w( videos.css videos.js )
Rails.application.config.assets.precompile += %w( carreras.css carreras.js )
Rails.application.config.assets.precompile += %w( materia_estados.css materia_estados.js )
Rails.application.config.assets.precompile += %w( parametros.css parametros.js)
Rails.application.config.assets.precompile += %w( registros.css registros.js )
Rails.application.config.assets.precompile += %w( consultas.css consultas.js )
Rails.application.config.assets.precompile += %w( reportes.css reportes.js )
Rails.application.config.assets.precompile += %w( usuarios/passwords.css usuarios/passwords.js )
Rails.application.config.assets.precompile += %w( documentos.css documentos.js )
Rails.application.config.assets.precompile += %w( backups.css backups.js )
Rails.application.config.assets.precompile += %w( items.css items.js )
Rails.application.config.assets.precompile += %w( roles.css roles.js )
Rails.application.config.assets.precompile += %w( chartkick.js )
Rails.application.config.assets.precompile += %w( Chart.bundle.js )
Rails.application.config.assets.precompile += %w( highcharts.js )

# Para las imagenes de los ichecks
# Rails.application.config.assets.precompile += %w( icheck/skins/square/blue@2x.png )
# Rails.application.config.assets.precompile += %w( icheck/skins/square/blue.png )
