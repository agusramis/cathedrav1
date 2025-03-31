class DashboardController < ApplicationController
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  require 'usagewatch_ext'


  def dashboard_v1
    flash.now[:alert] = current_usuario.nombre + ' Bienvenido a Cathedra'
  end

  def dashboard_v2
  end

  def dashboard_v3
  end

  def principal
    @cantidad_usuarios = Usuario.all.count
    @cantidad_clases_publicadas = Clase.all.count
    @cantidad_consultas = Consulta.all.count
    @cantidad_materias = Materia.all.count
    @cantidad_carreras = Carrera.where(fecha_baja: nil).count
  end

  def uso_cpu
    usw = Usagewatch
    uso_cpu = usw.uw_cpuused
    json_respuesta = {uso_cpu: uso_cpu}
    render json: json_respuesta
  end

  # set another layout for a specific action
  def dashboard_h
    render :layout => 'application-h'
  end
end
