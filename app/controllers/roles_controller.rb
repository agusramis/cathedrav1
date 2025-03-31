class RolesController < ApplicationController
  before_action :set_rol, only: [:show, :edit, :update, :destroy, :permisos, :actualizarpermisos]
  append_before_action :redirect_cancel, only: [:create, :update, :actualizarpermisos]
  include RolesHelper
  # GET /roles
  # GET /roles.json
  def index
    @roles = Rol.all
  end

  # GET /roles/1
  # GET /roles/1.json
  def show
  end

  # GET /roles/new
  def new
    @rol = Rol.new
  end

  # GET /roles/1/edit
  def edit
  end

  # POST /roles
  # POST /roles.json
  def create
    @rol = Rol.new(rol_params)
    case rol_params[:grupo]
    when 'Administradores'
      @rol.permisos = {
        registros: { index: 'true', asignar_profesor: 'true', asignar_alumno: 'true', destroy: 'true' },
        usuarios: { index: 'true', new: 'true', show: 'true', edit: 'true', destroy: 'true' },
        roles: { index: 'true', new: 'true', edit: 'true', destroy: 'true', permisos: 'true', actualizarpermisos: 'true' },
        carreras: { index: 'true', new: 'true', edit: 'true', destroy: 'true' },
        materias: { index: 'true', new: 'true', show: 'true', edit: 'true', destroy: 'true' },
        clases: { index: 'true', show: 'true', edit: 'true', destroy: 'true', descargarpdf: 'true' },
        estados: { index: 'true' },
        parametros: { index: 'true', edit: 'true' },
        backups: { index: 'true', resetear: 'true', cargar: 'true', descargar: 'true' }
      }
    when 'Profesores'
      @rol.permisos = {
        materias: { listar_participantes: 'true', mostrar_participante: 'true' },
        clases: { new: 'true', setearvisible: 'true', edit: 'true', descargarpdf: 'true', borrar: 'true' },
        consultas: { responder: 'true', aclarar: 'true' },
        reportes: { reportes_profesor: 'true' },
        api: { publicarclase: 'true' }
      }
    when 'Alumnos'
      @rol.permisos = {
        materias: { listar_participantes: 'true' },
        clases: { descargarpdf: 'true' },
        consultas: { realizar: 'true' },
        registros: { inscribir_alumno: 'true', desinscribir: 'true' }
      }
    end
    @rol.permisos = @rol.permisos.with_indifferent_access
    respond_to do |format|
      if @rol.save
        format.html { redirect_to roles_url, notice: 'Rol creado.' }
        format.json { render :show, status: :created, location: @rol }
      else
        format.html { flash.now[:alert] = 'Rol no creado, verificar los datos ingresados.'
        render :edit }
        format.json { render json: @rol.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /roles/1
  # PATCH/PUT /roles/1.json
  def update
    nuevorol_params = rol_params
    grupo_modificado = false
    if @rol.grupo != nuevorol_params[:grupo]
      grupo_modificado = true
      case nuevorol_params[:grupo]
      when 'Administradores'
        nuevorol_params[:permisos] = {
          registros: { index: 'true', asignar_profesor: 'true', asignar_alumno: 'true', destroy: 'true' },
          usuarios: { index: 'true', new: 'true', show: 'true', edit: 'true', destroy: 'true' },
          roles: { index: 'true', new: 'true', edit: 'true', destroy: 'true', permisos: 'true', actualizarpermisos: 'true' },
          carreras: { index: 'true', new: 'true', edit: 'true', destroy: 'true' },
          materias: { index: 'true', new: 'true', show: 'true', edit: 'true', destroy: 'true' },
          clases: { index: 'true', show: 'true', edit: 'true', destroy: 'true', descargarpdf: 'true' },
          estados: { index: 'true' },
          parametros: { index: 'true', edit: 'true' },
          backups: { index: 'true', resetear: 'true', cargar: 'true', descargar: 'true' }
        }
      when 'Profesores'
        nuevorol_params[:permisos] = {
          materias: { listar_participantes: 'true', mostrar_participante: 'true' },
          clases: { new: 'true', setearvisible: 'true', edit: 'true', descargarpdf: 'true', borrar: 'true' },
          consultas: { responder: 'true', realizar: 'true' },
          reportes: { reportes_profesor: 'true' },
          api: { publicarclase: 'true' }
        }
      when 'Alumnos'
        nuevorol_params[:permisos] = {
          materias: { listar_participantes: 'true' },
          clases: { descargarpdf: 'true' },
          consultas: { realizar: 'true' },
          registros: { inscribir_alumno: 'true', desinscribir: 'true' }
        }
      end
    end
    nuevorol_params[:nombre] = rol_params[:nombre]
    nuevorol_params[:descripcion] = rol_params[:descripcion]
    nuevorol_params[:grupo] = rol_params[:grupo]
    respond_to do |format|
      if @rol.update(nuevorol_params)
        # Permisos traducidos
        # @rol.permisos.each do |key, value|
        #   logger.info traducirpermiso(key)
        #   value.each do |key2, value2|
        #     logger.info traducirpermiso(key2) + " " + "#{value2}"
        #   end
        # end
        if grupo_modificado
          format.html { redirect_to permisos_rol_path(@rol), notice: 'Rol actualizado, actualizar permisos' }
        else
          format.html { redirect_to roles_url, notice: 'Rol actualizado.' }
        end
        format.json { render :show, status: :ok, location: @usuario }
      else
        format.html { flash.now[:alert] = 'Rol no actualizado, verificar los datos ingresados.'
        render :edit }
        format.json { render json: @rol.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /roles/1
  # DELETE /roles/1.json
  def destroy
    if @rol.usuarios_activos > 0
      respond_to do |format|
        format.html { redirect_to roles_url, alert: 'El rol contiene usuarios activos, no puede darla de baja.' }
        format.json { head :no_content }
      end
    else
      if @rol.fecha_baja.nil?
        @rol.baja
        respond_to do |format|
          format.html { redirect_to roles_url, notice: 'Rol dado de baja.' }
          format.json { head :no_content }
        end
      else
        @rol.restaurar
        respond_to do |format|
          format.html { redirect_to roles_url, notice: 'Rol restaurado.' }
          format.json { head :no_content }
        end
      end
    end
  end

  def permisos

  end

  def actualizarpermisos
    # logger.info 'parametros enviados: ' + rol_params.to_s
    actualizarrol_params = rol_params
    actualizarrol_params[:permisos] = rol_params[:permisos].to_hash
    if @rol.update(rol_params)
      respond_to do |format|
        format.html { redirect_to permisos_rol_url(@rol), notice: 'Permisos actualizados.' }
        format.json { head :no_content }
      end
    else
      format.html { flash.now[:alert] = 'Permisos no actualizados, verificar los datos ingresados.'
      render :permisos }
      format.json { render json: @rol.errors, status: :unprocessable_entity }
    end
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_rol
    @rol = Rol.find(params[:id])
  end

  # Never trust parameters from the scary internet, only allow the white list through.
  def rol_params
    params.require(:rol).permit(:nombre, :descripcion, { permisos: {} }, :grupo, :fecha_baja)
  end

  # Cuando se presiona el boton cancelar
  #
  def redirect_cancel
    redirect_to roles_url if params[:cancel]
  end
end
