class ApiController < ActionController::Base
  before_action :authenticate_and_set_usuario
  protect_from_forgery prepend: true
  require 'jwt'
  require 'ostruct'

  # def i18n
  #   # locale param was defined in config/routes.rb
  #   render file: "app/assets/i18n/" + params['locale']
  # end
  #
  # def datatable
  #   render file: "app/assets/api/datatable.json"
  # end
  #
  # def xeditablegroups
  #   render file: "app/assets/api/xeditable-groups.json"
  # end
  #
  # def xeditable
  #   render nothing: true
  # end

  # GET - Devuelve las materias donde el profesor puede publicar

  def materiasprofesor
    profesor = Usuario.find(obtener_usuario)
    materiasact = profesor.materias.where(estado: 'Creada').references(:registros).where(registro: { fecha_fin: nil })
    materias_act_prof = []
    materiasact.each do |materia|
      materias_act_prof << { id: materia.id.to_s, nombre: materia.nombre }
    end
    respuesta_json = { materias: materias_act_prof }
    render json: respuesta_json
  end

  # POST - El profesor publica la clase que ha grabado en la aplicacion de escritorio

  def publicarclase
    # Inicia la transaccion
    Clase.transaction do
      # Se busca la entidad Usuario del profesor que publica
      profesor = Usuario.find(obtener_usuario)
      # Se lee el contenido del mensaje
      post_json = JSON.parse(request.body.read)
      # Se crea una clase nueva
      clase_nueva = Clase.new
      # Se busca y asocia la materia en la que se va a publicar la clase
      clase_nueva.materia = Materia.find(post_json['materia_id'])
      # Se asocia la entidad Usuario
      clase_nueva.profesor = profesor
      # Se setea la clase como no visible
      clase_nueva.visible = false
      # Se setea la clase como publicada por la aplicacion pizarra
      clase_nueva.pizarra = true
      # Se setea el nombre de la clase
      clase_nueva.nombre = post_json['clase_nombre']
      # Se crea una entidad Video y se setea los atributos nombre, la direccion y la duracion
      video_nuevo = Video.new
      video_nuevo.nombre = post_json['clase_nombre']
      video_nuevo.link_video = post_json['video_link']
      video_nuevo.duracion = post_json['video_duracion']
      video_nuevo.save
      clase_nueva.descripcion = ''
      # Se asocia el video
      clase_nueva.video = video_nuevo
      # Se crea una entidad Documento y se setea el nombre y el contenido
      documento_nuevo = Documento.new
      documento_nuevo.nombre = post_json['clase_nombre']
      documento_nuevo.link_documento = post_json['documento']
      documento_nuevo.save
      # Se asocia el documento
      clase_nueva.documento = documento_nuevo
      # Si la clase se guarda correctamente, se confirma la transaccion y
      # se devuelve la respuesta de que la clase se ha creado correctamente
      if clase_nueva.save
        respuesta_json = { exito: 'clase creada' }
        render json: respuesta_json
      # En caso de error, se devuelve la respuesta con el respectivo error y se retrotraen los cambios
      # de la transaccion
      else
        respuesta_json = { causa: clase_nueva.errors }
        render_error(403, message: respuesta_json)
        raise ActiveRecord::Rollback
      end
    end
  end

  # GET - Devuelve las credenciales de YT

  def credenciales
    idclient = Parametro.where(nombre: 'IDClient').first
    secretclient = Parametro.where(nombre: 'SecretClient').first
    refreshtoken = Parametro.where(nombre: 'RefreshToken').first
    respuesta_json = { idclient: idclient.valor, secretclient: secretclient.valor, refreshtoken: refreshtoken.valor }
    render json: respuesta_json
  end

  def documentosprofesor
    profesor = Usuario.find(obtener_usuario)
    materias_conpublicacion = []
    profesor.clases_profesor.group_by(&:materia).each do |materia, clases|
      clases_publicadas = []
      clases.each do |clase|
        clase_pub = { id: clase.id.to_s, nombre: clase.nombre + ' - ' + clase.created_at.strftime("%d/%m/%y"), link_documento: clase.documento.link_documento.to_s }
        clases_publicadas << clase_pub
      end
      materia_pub = { id: materia.id.to_s,
                      nombre: materia.codigo + ' - ' + materia.nombre + ' [' + materia.ciclo_lectivo.to_s + ']',
                      clases: clases_publicadas }
      materias_conpublicacion << materia_pub
    end
    if materias_conpublicacion.empty?
      respuesta_json = { causa: 'No tiene documentos publicados' }
      render_error(204, message: respuesta_json)
    else
      respuesta_json = { materias: materias_conpublicacion }
      render json: respuesta_json
    end
  end

  def datosprofesor
    profesor = Usuario.find(obtener_usuario)
    respuesta_json = { nombre: profesor.nombre + ' ' + profesor.apellido }
    render json: respuesta_json
  end

  private


  def obtener_usuario
    header = request.headers['Authorization']
    token = header.split(' ').last if header
    decoded_token = JWT.decode token, nil, false
    arraytoken = decoded_token[0]
    return arraytoken['usuario_id']
  end


end
