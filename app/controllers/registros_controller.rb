class RegistrosController < ApplicationController
  before_action :set_registro, only: [:show, :edit, :update, :destroy]

  # GET /registros
  # GET /registros.json
  def index
    if params[:materia_id]
      @materia = Materia.find(params[:materia_id])
      @registros = Registro.where(materia: @materia)
    else
      @registros = Registro.all
    end

  end

  # GET /registros/1
  # GET /registros/1.json
  def show
  end

  # GET /registros/new
  def new
    @registro = Registro.new
  end

  # GET /registros/1/edit
  def edit
  end

  # POST /registros
  # POST /registros.json
  def create
    @registro = Registro.new(registro_params)

    respond_to do |format|
      if @registro.save
        format.html { redirect_to @registro, notice: 'Registro was successfully created.' }
        format.json { render :show, status: :created, location: @registro }
      else
        format.html { render :new }
        format.json { render json: @registro.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /registros/1
  # PATCH/PUT /registros/1.json
  def update
    respond_to do |format|
      if @registro.update(registro_params)
        format.html { redirect_to @registro, notice: 'Registro was successfully updated.' }
        format.json { render :show, status: :ok, location: @registro }
      else
        format.html { render :edit }
        format.json { render json: @registro.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /registros/1
  # DELETE /registros/1.json
  def destroy
    @registro.desinscribir
    if params[:general]
      respond_to do |format|
        format.html { redirect_to registros_url, notice: 'El registro fue finalizado.' }
        format.json { head :no_content }
      end
    else
      respond_to do |format|
        format.html { redirect_to materia_registros_url, notice: 'El registro fue finalizado.' }
        format.json { head :no_content }
      end
    end
  end

  def asignar_alumno
    @materia = Materia.find(params[:materia_id])
    @alumnos = Usuario.where(grupo: 'Alumnos', fecha_baja: nil)
  end

  def asignar_profesor
    @materia = Materia.find(params[:materia_id])
    @profesores = Usuario.where(grupo: 'Profesores', fecha_baja: nil)
  end

  def asignar_p
    @profesor = Usuario.find(params[:profesor_id])
    materia = Materia.find(params[:materia_id])
    registro = Registro.new
    registro.fecha_inicio = Time.now
    registro.usuario = @profesor
    registro.materia = materia
    respond_to do |format|
      if registro.save!
        format.html { redirect_to asignar_profesor_materia_registros_path(params[:materia_id]), notice: 'Profesor asignado.' }
        format.json {}
      else
        format.html {
          flash.now[:alert] = 'Error al asignar'
          # redirect_to materia_url(clasebuscada.materia.id.to_s) + '!#clase_' + params[:clase_id]
        }
        format.json { render json: consulta.errors, status: :unprocessable_entity }
      end
    end
  end

  def asignar_a
    @alumno = Usuario.find(params[:alumno_id])
    materia = Materia.find(params[:materia_id])
    registro = Registro.new
    registro.fecha_inicio = Time.now
    registro.usuario = @alumno
    registro.materia = materia
    respond_to do |format|
      if registro.save!
        format.html { redirect_to asignar_alumno_materia_registros_path(params[:materia_id]), notice: 'Alumno asignado.' }
        format.json {}
      else
        format.html {
          flash.now[:alert] = 'Error al asignar'
          # redirect_to materia_url(clasebuscada.materia.id.to_s) + '!#clase_' + params[:clase_id]
        }
        format.json { render json: consulta.errors, status: :unprocessable_entity }
      end
    end
  end

  def inscribir_alumno
    @carreras = Carrera.where(fecha_baja: nil)
  end

  def inscribir
    @registro = Registro.new
    materiainscribir = Materia.find(params[:materia_id])
    @registro.materia = materiainscribir
    @registro.usuario = current_usuario
    @registro.fecha_inicio = Time.now
    # logger.info 'en inscribir'
    # logger.info params[:materia_id].to_s
    respond_to do |format|
      if current_usuario.carrera.id == materiainscribir.carrera.id
        if params[:pass_mat].to_s == materiainscribir.password
          # logger.info 'password es'
          # if @registro.save
          @registro.save
          format.html { redirect_to materia_url(materiainscribir), notice: 'Te has inscripto a la materia ' + materiainscribir.nombre.to_s }
          format.json {}
        else
          # logger.info 'password no es'
          format.html { redirect_to inscribir_alumno_path, alert: 'La contraseña de inscripci&oacuten; es incorrecta.' }
          format.json {}
        end
      else
        # format.html { redirect_to inscribir_alumno_path, alert: 'Esta materia no pertenece a tu carrera.' }
        format.html { redirect_to request.referer, alert: 'Esta materia no pertenece a tu carrera.' }
        format.json {}
      end
    end
  end

  def desinscribir
    # todo mensaje email de desinscripcion
    materiadesinscribir = Materia.find(params[:materia_id])
    registro = Registro.where(usuario: current_usuario, materia: materiadesinscribir, fecha_fin: nil).first
    registro.update_attribute(:fecha_fin, Time.now)
    respond_to do |format|
      format.html { redirect_to inscribir_alumno_path, notice: 'Te desinscribiste de ' + materiadesinscribir.nombre }
      format.json {}
    end
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_registro
    @registro = Registro.find(params[:id])
  end

  # Never trust parameters from the scary internet, only allow the white list through.
  def registro_params
    params.require(:registro).permit(:fecha_inicio, :fecha_fin, :usuario, :materia, :profesor_id, :materia_id, alumno_id)
  end
end
