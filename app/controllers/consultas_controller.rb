class ConsultasController < ApplicationController
  before_action :set_consulta, only: [:show, :edit, :update, :destroy]

  # GET /consultas
  # GET /consultas.json
  def index
    @consultas = Consulta.all
  end

  # GET /consultas/1
  # GET /consultas/1.json
  def show
  end

  # GET /consultas/new
  def new
    @consulta = Consulta.new
  end

  # GET /consultas/1/edit
  def edit
  end

  # POST /consultas
  # POST /consultas.json
  def create
    @consulta = Consulta.new(consulta_params)

    respond_to do |format|
      if @consulta.save
        format.html { redirect_to @consulta, notice: 'Consulta creada.' }
        format.json { render :show, status: :created, location: @consulta }
      else
        format.html { render :new }
        format.json { render json: @consulta.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /consultas/1
  # PATCH/PUT /consultas/1.json
  def update
    respond_to do |format|
      if @consulta.update(consulta_params)
        format.html { redirect_to @consulta, notice: 'Consulta actualizada.' }
        format.json { render :show, status: :ok, location: @consulta }
      else
        format.html { render :edit }
        format.json { render json: @consulta.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /consultas/1
  # DELETE /consultas/1.json
  def destroy
    @consulta.destroy
    respond_to do |format|
      format.html { redirect_to consultas_url, notice: 'Consulta eliminada.' }
      format.json { head :no_content }
    end
  end

  def realizar
    consulta = Consulta.new
    clasebuscada = Clase.find(params[:clase_id])
    consulta.clase = clasebuscada
    consulta.texto_consulta = params[:texto_consulta]
    consulta.posicion_video = params[:posicion_video]
    consulta.fecha_consulta = Time.now
    if current_usuario.profesores?
      consulta.vista_consulta = Time.now
      consulta.vista_respuesta = Time.now
      consulta.alumno = current_usuario
      consulta.profesor = current_usuario
      consulta.aclaracion = true
    else
      consulta.aclaracion = false
      consulta.alumno = current_usuario
    end
    respond_to do |format|
      if consulta.save
        if current_usuario.profesores?
          format.html { redirect_to materia_url(clasebuscada.materia.id.to_s) + '!#cons_' + consulta.id.to_s, notice: 'Aclaracion agregada.' }
          format.json {}
        else
          MyMailer.consulta_correo(consulta).deliver_now
          format.html { redirect_to materia_url(clasebuscada.materia.id.to_s) + '!#cons_' + consulta.id.to_s, notice: 'Consulta agregada.' }
          format.json {}
        end
      else
        format.html {
          flash[:alert] = 'Error en la consulta, verificar los datos.'
          redirect_to materia_url(clasebuscada.materia.id.to_s) + '!#clase_' + params[:clase_id]
        }
        format.json { render json: consulta.errors, status: :unprocessable_entity }
      end
    end
  end

  def verrespuesta
    consultabuscada = Consulta.find(params[:id])
    if (consultabuscada.alumno.id = current_usuario.id)
      consultabuscada.vista_respuesta = Time.now
      consultabuscada.save
      redirect_to materia_url(consultabuscada.clase.materia.id.to_s) + '!#resp_' + consultabuscada.id.to_s
    else
      redirect_to root_path
    end
  end

  def responder
    # logger.info 'texto: ' + params[:respuesta_id].to_s
    consulta_respondida = Consulta.find(params[:respuesta_id])
    # clasebuscada = Clase.find(params[:clase_id])
    # consulta.clase = clasebuscada
    consulta_respondida.texto_respuesta = params[:texto_respuesta]
    consulta_respondida.profesor = current_usuario
    consulta_respondida.fecha_respuesta = Time.now
    respond_to do |format|
      if consulta_respondida.save
        MyMailer.respuesta_correo(consulta_respondida).deliver_now
        format.html { redirect_to materia_url(consulta_respondida.clase.materia.id.to_s) + '!#resp_' + consulta_respondida.id.to_s, notice: 'Consulta respondida.' }
        format.json {}
      else
        format.html {
          flash[:alert] = 'Error al responder, verificar los datos.'
          redirect_to materia_url(consulta_respondida.clase.materia.id.to_s) + '!#clase_' + consulta_respondida.clase.id.to_s
        }
        format.json { render json: consulta_respondida.errors, status: :unprocessable_entity }
      end
    end
  end

  def verconsulta
    consultabuscada = Consulta.find(params[:id])
    materias_activas = current_usuario.materias.where(estado: 'Creada').references(:registros).where(registro: { fecha_fin: nil })
    if (materias_activas.include?(consultabuscada.clase.materia))
      consultabuscada.vista_consulta = Time.now
      consultabuscada.save
      redirect_to materia_url(consultabuscada.clase.materia.id.to_s) + '!#cons_' + consultabuscada.id.to_s
    else
      redirect_to root_path
    end
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_consulta
    @consulta = Consulta.find(params[:id])
  end

  # Never trust parameters from the scary internet, only allow the white list through.
  def consulta_params
    params.require(:consulta).permit(:posicion_video, :fecha_consulta, :texto_consulta, :vista_consulta, :fecha_respuesta, :texto_respuesta, :vista_respuesta, :clase_id, consulta_id, materia_id)
  end
end
