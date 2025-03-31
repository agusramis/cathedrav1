class MateriasController < ApplicationController
  before_action :set_materia, only: [:show, :edit, :update, :destroy, :listar_participantes, :mostrar_participante]
  append_before_action :redirect_cancel, only: [:create, :update]

  # GET /materias
  # GET /materias.json
  def index
    @materias = Materia.all
  end

  # GET /materias/1
  # GET /materias/1.json
  def show
    #Muestra de acuerdo al tipo de usuario o no si tiene registro activo en ese materia
    # if current_usuario.alumnos?
    #   if Registro.where(materia: @materia, usuario: current_usuario, fecha_fin: nil).count == 0
    #     redirect_to root_path
    #   end
    # end
    # if current_usuario.profesores?
    #   if Registro.where(materia: @materia, usuario: current_usuario, fecha_fin: nil).count == 0
    #     redirect_to root_path
    #   end
    # end
  end

  # GET /materias/new
  def new
    @materia = Materia.new
    @carreras = Carrera.all
  end

  # GET /materias/1/edit
  def edit
    @carreras = Carrera.all
  end

  # POST /materias
  # POST /materias.json
  def create
    @materia = Materia.new(materia_params)
    @carreras = Carrera.all
    respond_to do |format|
      if @materia.save
        format.html { redirect_to @materia, notice: 'Materia creada' }
        format.json { render :show, status: :created, location: @materia }
      else
        format.html {
          flash.now[:alert] = 'Materia no creada, verificar los datos ingresados.'
          render :new
        }
        format.json { render json: @materia.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /materias/1
  # PATCH/PUT /materias/1.json
  def update
    @carreras = Carrera.all
    respond_to do |format|
      if @materia.update(materia_params)
        format.html { redirect_to materias_url, notice: 'Materia actualizada' }
        format.json { render :show, status: :ok, location: @materia }
      else
        format.html { render :edit }
        format.json { render json: @materia.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /materias/1
  # DELETE /materias/1.json
  def destroy
    respond_to do |format|
      if @materia.fecha_fin <= Date.today
        @materia.archivar
        format.html { redirect_to materias_url, notice: 'Materia archivada' }
        format.json { head :no_content }
      else
        format.html { redirect_to materias_url, alert: 'No se puede archivar esta materia antes del ' + @materia.fecha_fin.to_s }
      end
    end
  end

  def inscribir_alumno

  end

  def autoarchivar
    materias_archivar = Materia.where(estado: 'Creada', autoarchivar: true).where('fecha_fin < ?', Time.now)
    unless materias_archivar.empty?
      materias_archivar.each do |materia|
        materia.archivar
      end
    end
    MyMailer.autoarchivado_correo(materias_archivar).deliver_now
    redirect_to materias_url, notice: 'Autoarchivar materias ejecutado'
  end

  def listar_participantes
    @participantes = @materia.usuarios.references(:registros).where(registro: { fecha_fin: nil }).where(grupo: ['Alumnos', 'Profesores'])
  end

  def mostrar_participante
    participantesids = @materia.usuarios.references(:registros).where(registro: { fecha_fin: nil }).where(grupo: ['Alumnos', 'Profesores']).pluck(:id)
    @participante = Usuario.find(params[:id_participante])
    logger.info 'Participantes' + participantesids.to_s
    logger.info 'ParticipanteId' + :id_participante.to_s
    respond_to do |format|
      if participantesids.include?(@participante.id)
        format.html { render }
        format.json { head :no_content }
      else
        format.html { redirect_to root_path }
      end
    end
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_materia
    @materia = Materia.find(params[:id])
  end

  # Never trust parameters from the scary internet, only allow the white list through.
  def materia_params
    params.require(:materia).permit(:codigo, :nombre, :ciclo_lectivo, :descripcion,
                                    :fecha_inicio, :fecha_fin, :autoarchivar,
                                    :password, :fecha_baja, :carrera_id, :id_participante)
  end

  # Cuando se presiona el boton cancelar
  def redirect_cancel
    redirect_to materias_url if params[:cancel]
  end

end
