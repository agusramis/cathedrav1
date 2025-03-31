class ReportesController < ApplicationController
  include ActionView::Helpers::DateHelper

  def reportes_profesor

  end

  def reporte_anio
    ciclo = reporte_params[:ciclo]
    materias = current_usuario.materias.where(ciclo_lectivo: ciclo.to_i).references(:registros).where(registro: { fecha_fin: nil }).pluck(:nombre)
    if materias.count.zero?
      # logger.info 'No tiene'
      render_error(500, message: 'sin materias')
    else
      # logger.info 'Si tiene'
      render json: materias
    end
  end

  def reporte_materia
    @ciclo = reporte_params[:ciclo]
    materia = Materia.where(nombre: reporte_params[:materia]).first
    @clasesmateria = materia.clases.where(fecha_baja: nil)
    @cantidadclases = materia.clases.where(fecha_baja: nil).count
    @cantidadconsultas = 0
    @cantidadalumnos = materia.alumnos.count

    # ------------------
    # Promedio por clase
    # ------------------
    @promedioporclase = {}
    materia.clases.where(fecha_baja: nil).each do |clase|
      consultas_clase = Consulta.where(clase: clase).where.not(fecha_respuesta: nil)
      # consultas_clase = Consulta.where(clase: clase)
      consultas_tiempos = []
      consultas_clase.each do |consulta|
        if consulta.fecha_respuesta.nil?
          segundos = (Time.now - consulta.fecha_consulta).to_i
          # minutos = distance_of_time_in_words(DateTime.now, consulta.fecha_consulta)
          # minutos = ((DateTime.now - consulta.fecha_consulta) * 24 * 60).to_i
        else
          segundos = (consulta.fecha_respuesta - consulta.fecha_consulta).to_i
          # minutos = distance_of_time_in_words(consulta.fecha_respuesta, consulta.fecha_consulta)
          # minutos = ((consulta.fecha_respuesta - consulta.fecha_consulta) * 24 * 60).to_i
        end
        consultas_tiempos << segundos
      end
      # calculo el promedio de los valores del array
      promediosegundos = consultas_tiempos.sum / consultas_tiempos.size.to_f
      if !consultas_tiempos.empty?
        # promedio = distance_of_time_in_words(promediosegundos)
        # promedio = Time.at(promediosegundos).utc.strftime("%H:%M:%S")
        promediominutos = promediosegundos / 60
        @promedioporclase.store(clase.nombre[0, 15] + '...', promediominutos)
      end
    end

    # ------------------------------
    # Consultas por alumno por clase
    # ------------------------------

    @consultaporalumno = []

    materia.alumnos.each do |alumno|
      data = []
      materia.clases.where(fecha_baja: nil).each do |clase|
        cantidad_consultas = 0
        consultas_alumno = Consulta.where(alumno: alumno, clase: clase).count
        if consultas_alumno.nonzero?
          data << [clase.nombre[0, 15] + '...', consultas_alumno]
        end
      end

      @consultaporalumno << { name: alumno.apellido + ', ' + alumno.nombre, data: data }
      # consultas_alumno = Consulta.where(alumno: alumno, materia: materia)
      # consultas_alumno.each do |consulta|

    end

    # ------------------
    # Cantidad por clase
    # ------------------
    @cantidadporclase = {}
    materia.clases.where(fecha_baja: nil).each do |clase|
      cantidadconsultas = 0
      clase.consultas.each do |consulta|
        if !consulta.aclaracion?
          cantidadconsultas += 1
          @cantidadconsultas += 1
        end
      end
      @cantidadporclase.store(clase.nombre[0, 15] + '...', cantidadconsultas)
    end

    # ------------------
    # Participacion de alumnos en materia
    # ------------------
    @participantespormateria = {}
    participantes = []
    Consulta.references(:clases).where(clase: materia.clases).each do |consulta|
      unless participantes.include?(consulta.alumno.id)
        if consulta.alumno.fecha_baja.nil? && !consulta.aclaracion
          participantes << consulta.alumno.id
        end
      end
    end
    # logger.info 'Participantes' + participantes.to_s
    @participantespormateria.store('Participa', participantes.size)
    alumnosnoparticipan = @cantidadalumnos - participantes.size
    @participantespormateria.store('No participa', alumnosnoparticipan)
    if @cantidadalumnos == 0
      logger.info 'materia sin alumnos'
    end
    if @cantidadclases == 0
      logger.info 'materia sin clases'
    end


  end

  # def reporte
  #   @ciclo = reporte_params[:ciclo]
  #   @promedioporclase = {}
  #   materia = Materia.where(nombre: reporte_params[:materia]).first
  #   materia.clases.where(fecha_baja: nil).each do |clase|
  #     consultas_clase = Consulta.where(clase: clase).where.not(fecha_respuesta: nil)
  #     # consultas_clase = Consulta.where(clase: clase)
  #     consultas_tiempos = []
  #     consultas_clase.each do |consulta|
  #       if (consulta.fecha_respuesta.nil?)
  #         minutos = ((DateTime.now - consulta.fecha_consulta) * 24 * 60).to_i
  #       else
  #         minutos = ((consulta.fecha_respuesta - consulta.fecha_consulta) * 24 * 60).to_i
  #       end
  #       consultas_tiempos << minutos
  #     end
  #     # logger.info 'Consulta tiempos: ' + consultas_tiempos.to_s
  #     # calculo el promedio de los valores del array
  #     promedio = consultas_tiempos.inject { |sum, el| sum + el }.to_f / consultas_tiempos.size
  #     @promedioporclase.store(clase.nombre[0, 15] + '...', promedio)
  #   end
  #   logger.info 'Promedio por clase' + @promedioporclase.to_s
  # end

  def reporte_clase
    @alumnosvieron = []
    @alumnosnovieron = []
    ciclo = reporte_params[:ciclo]
    materia = Materia.where(nombre: reporte_params[:materia]).first
    clase = Clase.where(nombre: reporte_params[:clase]).first
    materia.alumnos.each do |alumno|
      if clase.participacion.include?(alumno.id)
        @alumnosvieron << alumno.apellido + ", " + alumno.nombre
      else
        @alumnosnovieron << alumno.apellido + ", " + alumno.nombre
      end
    end
  end

  def grupo_alumnos
    rol = Rol.find(reporte_params[:rol_id])
    if rol.grupo == 'Alumnos'
      respuesta_json = { 'bool': 'true' }
      render json: respuesta_json
      # {'bool' => 'true'}.to_json
    else
      respuesta_json = { 'bool': 'false' }
      render json: respuesta_json
      # {'bool' => 'false'}.to_json
    end
  end


  def vista_participante
    clase = Clase.find(reporte_params[:clase])
    usuario = current_usuario
    if current_usuario.alumnos? && !clase.participacion.include?(usuario.id)
      clase.participacion << usuario.id
      clase.save!
    end
  end

  private

  def time_diff(start_time, end_time)
    seconds_diff = (start_time - end_time).to_i.abs

    hours = seconds_diff / 3600
    seconds_diff -= hours * 3600

    minutes = seconds_diff / 60
    seconds_diff -= minutes * 60

    seconds = seconds_diff

    # "#{hours.to_s.rjust(2, '0')}:#{minutes.to_s.rjust(2, '0')}:#{seconds.to_s.rjust(2, '0')}"
    # or, as hagello suggested in the comments:
    '%02d:%02d:%02d' % [hours, minutes, seconds]
  end

  def reporte_params
    params.permit(:materia, :ciclo, :clase, :rol_id)
  end

end
