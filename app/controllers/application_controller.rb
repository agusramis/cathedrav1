class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  before_action :authenticate_usuario!
  before_action :permitida_accion
  include Devise::Controllers::Helpers

  add_flash_types :success, :info, :warning, :error

  def dashboard
  end

  def index
    flash.alert = 'La dirección a la que intentas acceder no existe'
    redirect_to root_path
  end

  def current_usuario
    super
  end

  def permitida_accion
    logger.info 'paramscontroller' + ' ' + params[:controller].to_s
    logger.info 'paramsaction' + ' ' + params[:action].to_s
    if acciones_permitidas(params[:controller].to_s + '#' + params[:action].to_s)
    else
      # Si el usuario tiene la seccion o controlador
      if current_usuario.rol.permisos.has_key?(params[:controller].to_s)
        logger.info 'Tiene la seccion'
        # Si el usuario tiene la accion
        if current_usuario.rol.permisos[params[:controller].to_s].has_key?(params[:action].to_s)
          logger.info 'Tiene la accion'
          unless current_usuario.rol.permisos[params[:controller].to_s][params[:action].to_s] == 'true'
            logger.info 'no tiene permiso habilitado'
            flash.alert = 'La dirección a la que intentas acceder no existe'
            redirect_to root_path
          end
        else
          # Si no tiene la accion
          logger.info 'No tiene la accion'
          if (params[:action].to_s == 'update' || params[:action.to_s] == 'put') && current_usuario.rol.permisos[params[:controller].to_s]['edit'] == 'true'
          else
            if (params[:action].to_s == 'create') && current_usuario.rol.permisos[params[:controller].to_s]['new'] == 'true'
            else
              flash.alert = 'La dirección a la que intentas acceder no existe'
              redirect_to root_path
            end
          end
        end
      else
        logger.info 'no tiene seccion, diferente usuario'
        flash.alert = 'La dirección a la que intentas acceder no existe'
        redirect_to root_path
      end
    end
  end

  def acciones_permitidas(seccionaccion)
    arraywhitelist = [
      'usuarios/sessions#destroy',
      'usuarios/sessions#new',
      'usuarios/sessions#create',
      'usuarios/passwords#new',
      'usuarios/passwords#create',
      'usuarios/passwords#edit',
      'usuarios/passwords#update',
      'usuarios#misdatos',
      'usuarios#actualizarperfil',
      'usuarios#cambiarpassword',
      'reportes#grupo_alumnos',
      'items#actualizar',
      'items#destroy',
      'enlaces#actualizar',
      'enlaces#destroy',
      'registros#asignar_a',
      'registros#asignar_p',
      'registros#inscribir',
      'rails/welcome',
      'dashboard#principal',
      'consultas#verconsulta',
      'consultas#verrespuesta',
      'consultas#realizar',
      'clases#nueva_clase',
      'materias#autoarchivar',
      'materia_estados#index',
      'backups#download',
      'reportes#reporte_anio',
      'reportes#reporte_materia',
      'reportes#reporte_clase',
      'reportes#vista_participante'
    ]
    if arraywhitelist.include?(seccionaccion)
      logger.info 'Incluido en whitelist'
      true
    else
      # Mostrar materia si el alumno o el profesor esta inscripto
      if (current_usuario.alumnos? || current_usuario.profesores?) && seccionaccion == 'materias#show'
        materiaactual = Materia.find(params[:id])
        if Registro.where(materia: materiaactual, usuario: current_usuario, fecha_fin: nil).count == 0
          # No inscripto
          logger.info 'No esta inscripto'
          false
        else
          # Inscripto
          logger.info 'Si esta inscripto'
          true
        end
      else
        # Es administrador, se rige por los permisos
        logger.info 'Es administrador'
        false
      end
    end
  end
end
