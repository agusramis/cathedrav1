# Be sure to restart your server when you modify this file.

# Add new inflection rules using the following format. Inflections
# are locale specific, and you may define rules for as many different
# locales as you wish. All of these examples are active by default:
# ActiveSupport::Inflector.inflections(:en) do |inflect|
#   inflect.plural /^(ox)$/i, '\1en'
#   inflect.singular /^(ox)en/i, '\1'
#   inflect.irregular 'person', 'people'
#   inflect.uncountable %w( fish sheep )
# end
ActiveSupport::Inflector.inflections(:en) do |inflect|
  inflect.irregular 'materia', 'materias'
  inflect.irregular 'consulta', 'consultas'
  inflect.irregular 'video', 'videos'
  inflect.irregular 'item', 'items'
  inflect.irregular 'registro', 'registros'
  inflect.irregular 'consulta', 'consultas'
  inflect.irregular 'usuario', 'usuarios'
  inflect.irregular 'tipousuario', 'tipousuarios'
  inflect.irregular 'registro', 'registros'
  inflect.irregular 'clase', 'clases'
  inflect.irregular 'carrera', 'carreras'
  inflect.irregular 'documento', 'documentos'
  inflect.irregular 'enlace', 'enlaces'
  inflect.irregular 'materiaestado', 'materiaestados'
  inflect.irregular 'estadomateria', 'estadomaterias'
  inflect.irregular 'parametro', 'parametros'
  inflect.irregular 'estado', 'estados'
  inflect.irregular 'rol', 'roles'
  inflect.irregular 'reporte', 'reportes'
end
# These inflection rules are supported but not enabled by default:
# ActiveSupport::Inflector.inflections(:en) do |inflect|
#   inflect.acronym 'RESTful'
# end
