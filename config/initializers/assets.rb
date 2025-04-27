# Be sure to restart your server when you modify this file.

# Version of your assets, change this if you want to expire all your assets.
Rails.application.config.assets.version = '1.0'

# Add Yarn node_modules folder to the asset load path.
Rails.application.config.assets.paths << Rails.root.join('node_modules')

# Add additional asset paths if needed (e.g., emoji assets)
# Rails.application.config.assets.paths << Emoji.images_path

# Precompile specific additional assets

Rails.application.config.assets.precompile += %w[
  components-jqueryui/jquery-ui.js
  jquery-ui-touch-punch/jquery.ui.touch-punch.min.js
  x-editable/dist/bootstrap3-editable/css/bootstrap-editable.css
  x-editable/dist/bootstrap3-editable/js/bootstrap-editable.min.js
  materias.css materias.js
  usuarios.css usuarios.js
  clases.css clases.js
  enlaces.css enlaces.js
  usuarios/sessions.css usuarios/sessions.js
  videos.css videos.js
  carreras.css carreras.js
  materia_estados.css materia_estados.js
  parametros.css parametros.js
  registros.css registros.js
  consultas.css consultas.js
  reportes.css reportes.js
  usuarios/passwords.css usuarios/passwords.js
  documentos.css documentos.js
  backups.css backups.js
  items.css items.js
  roles.css roles.js
  chartkick.js
  Chart.bundle.js
  highcharts.js
]

# If you need icheck images (currently commented out)
# Rails.application.config.assets.precompile += %w[
#   icheck/skins/square/blue@2x.png
#   icheck/skins/square/blue.png
# ]
