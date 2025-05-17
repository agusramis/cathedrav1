class UsuariosController < ApplicationController
  before_action :set_usuario, only: [:show, :edit, :update, :destroy, :actualizarperfil, :cambiarpassword]
  append_before_action :redirect_cancel, only: [:create, :update]

  # GET /usuarios
  # GET /usuarios.json
  def index
    respond_to do |format|
      format.html do
        @usuarios = Usuario.all
      end
      format.json do
        usuarios = Usuario.all
  
        # Paginación, búsqueda y ordenamiento que ya tenías
        if params.dig(:search, :value).present?
          search_value = params.dig(:search, :value)
          usuarios = usuarios.where('nombre ILIKE :search OR apellido ILIKE :search OR email ILIKE :search', search: "%#{search_value}%")
        end
  
        total_records = Usuario.count
        filtered_records = usuarios.count
  
        if params[:order].present?
          column_index = params.dig(:order, "0", :column).to_i
          direction = params.dig(:order, "0", :dir) == "desc" ? "DESC" : "ASC"
  
          columns = [
            'id', 'nombre_usuario', 'legajo', 'nombre', 'apellido', 'dni', 'email',
            'telefono', 'celular', 'descripcion', 'fecha_nacimiento', 'sexo',
            'nacionalidad', 'direccion', 'localidad', 'provincia', 'pais',
            'rol', 'carrera', 'created_at', 'updated_at', 'fecha_baja'
          ]
  
          order_column = columns[column_index] || 'id'
          usuarios = usuarios.order("#{order_column} #{direction}")
        end
  
        usuarios = usuarios.offset(params[:start].to_i).limit(params[:length].to_i)
  
        render json: {
          draw: params[:draw].to_i,
          recordsTotal: total_records,
          recordsFiltered: filtered_records,
          data: usuarios.map do |usuario|
            {
              id: usuario.id,
              nombre_usuario: usuario.nombre_usuario,
              legajo: usuario.legajo,
              nombre: usuario.nombre,
              apellido: usuario.apellido,
              dni: usuario.dni,
              email: usuario.email,
              telefono: usuario.telefono,
              celular: usuario.celular,
              descripcion: usuario.descripcion,
              fecha_nacimiento: usuario.fecha_nacimiento&.strftime("%d/%m/%Y"),
              sexo: usuario.sexo,
              nacionalidad: usuario.nacionalidad,
              direccion: usuario.direccion,
              localidad: usuario.localidad,
              provincia: usuario.provincia,
              pais: usuario.pais,
              rol: usuario.rol&.nombre,
              carrera: (usuario.rol&.grupo == 'Alumnos' ? usuario.carrera&.nombre : "-"),
              created_at: usuario.created_at&.strftime("%d/%m/%Y %H:%M"),
              updated_at: usuario.updated_at&.strftime("%d/%m/%Y %H:%M"),
              fecha_baja: usuario.fecha_baja&.strftime("%d/%m/%Y"),
              mostrar_url: Rails.application.routes.url_helpers.usuario_path(usuario),
              editar_url: Rails.application.routes.url_helpers.edit_usuario_path(usuario),
              baja_url: Rails.application.routes.url_helpers.usuario_path(usuario)
            }
          end
        }        
      end
    end
  end
  
  

  # GET /usuarios/1
  # GET /usuarios/1.json
  def show
    # if params[:id]
    #   @usuario = Usuario.find(params[:id])
    # else
    #   params[:id] = current_usuario
    # end
  end

  def misdatos
    @usuario = Usuario.find(current_usuario.id)
    @carreras_activas = Carrera.where(fecha_baja: nil)
  end

  def actualizarperfil
    respond_to do |format|
      if @usuario.update(usuario_params)
        format.html { redirect_to '/misdatos', notice: 'Datos actualizados.' }
        format.json {}
      else
        format.html {
          flash.now[:alert] = 'Datos no actualizados, verificar los datos ingresados.'
          render :misdatos }
        format.json {}
      end
    end
  end

  def cambiarpassword
    if usuario_params[:old_password] == ''
      @usuario.errors.add :old_password, 'debe ingresar la contraseña actual'
    else
      if @usuario.authenticate(usuario_params[:old_password])
        if usuario_params[:new_password] == ''
          @usuario.errors.add :new_password, 'debe ingresar la nueva contraseña'
        end
        if usuario_params[:new_password] == usuario_params[:old_password]
          @usuario.errors.add :new_password, 'la nueva contraseña debe ser diferente a la actual'
        end
        unless usuario_params[:new_password].match?(/\A(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}\z/)
          @usuario.errors.add :new_password, 'debe tener 8 caracteres, al menos una letra mayúscula y un número.'
        end
        if usuario_params[:new_password] != usuario_params[:confirm_password]
          @usuario.errors.add :confirm_password, 'la confirmación de la contraseña no coincide'
        end
      else
        @usuario.errors.add :old_password, 'la contraseña ingresada no es correcta'
      end
    end

    respond_to do |format|
      if @usuario.errors.messages.empty?
        sign_out @usuario
        @usuario.password = usuario_params[:new_password]
        @usuario.password_confirmation = usuario_params[:confirm_password]
        @usuario.save
        format.html { redirect_to '/login', notice: 'Contraseña modificada, ingrese nuevamente.' }
        format.json {}
      else
        format.html {
          flash.now[:alert] = 'Error al cambiar la contraseña, verificar datos ingresados.'
          render :misdatos }
        format.json {}
      end
    end
  end

  # GET /usuarios/new
  def new
    @usuario = Usuario.new
    @carreras_activas = Carrera.where(fecha_baja: nil)
    @roles_activos = Rol.where(fecha_baja: nil)
  end

  # GET /usuarios/1/edit
  def edit
    @carreras_activas = Carrera.where(fecha_baja: nil)
    @roles_activos = Rol.where(fecha_baja: nil)
  end

  # POST /usuarios
  # POST /usuarios.json
  def create
    @usuario = Usuario.new(usuario_params)
    @usuario.nombre_usuario = @usuario.email
    random_pass = random
    if random_pass =~ /\A(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}\z/
      random_pass = 'PRi57ty3aE'
    end
    @usuario.password = random_pass
    @usuario.password_confirmation = random_pass
    @usuario.activado = false
    @carreras_activas = Carrera.where(fecha_baja: nil)
    @roles_activos = Rol.where(fecha_baja: nil)
    if usuario_params[:rol_id] != ''
      @usuario.role = Rol.find(usuario_params[:rol_id]).nombre
      @usuario.grupo = Rol.find(usuario_params[:rol_id]).grupo
    end
    respond_to do |format|
      if @usuario.save
        @usuario.send_reset_password_instructions
        format.html { redirect_to usuarios_url, notice: 'Usuario creado.' }
        format.json { render :show, status: :created, location: @usuario }
      else
        format.html {
          flash.now[:alert] = 'Usuario no creado, verificar los datos ingresados.'
          render :new }
        format.json { render json: @usuario.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /usuarios/1
  # PATCH/PUT /usuarios/1.json
  def update
    @carreras_activas = Carrera.where(fecha_baja: nil)
    @usuario.nombre_usuario = usuario_params[:email]
    @roles_activos = Rol.where(fecha_baja: nil)
    usuario_parametros = usuario_params
    usuario_parametros[:role] = Rol.find(usuario_params[:rol_id]).nombre
    usuario_parametros[:grupo] = Rol.find(usuario_params[:rol_id]).grupo
    if usuario_parametros[:grupo] != 'Alumnos'
      usuario_parametros[:carrera_id] = nil
    end
    respond_to do |format|
      if @usuario.update(usuario_parametros)
        format.html { redirect_to usuarios_url, notice: 'Usuario actualizado.' }
        format.json { render :show, status: :ok, location: @usuario }
      else
        format.html {
          flash.now[:alert] = 'Usuario no actualizado, verificar los datos ingresados.'
          render :edit }
        format.json { render json: @usuario.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /usuarios/1
  # DELETE /usuarios/1.json
  def destroy
    if @usuario == current_usuario
      respond_to do |format|
        format.html { redirect_to usuarios_url, alert: 'No puede darse de baja a si mismo.' }
        format.json { head :no_content }
      end
    else
      if @usuario.fecha_baja.nil?
        @usuario.baja
        respond_to do |format|
          format.html { redirect_to usuarios_url, notice: 'Usuario dado de baja.' }
          format.json { head :no_content }
        end
      else
        if @usuario.rol.fecha_baja.nil?
          @usuario.restaurar
          respond_to do |format|
            format.html { redirect_to usuarios_url, notice: 'Usuario restaurado.' }
            format.json { head :no_content }
          end
        else
          respond_to do |format|
            format.html { redirect_to usuarios_url, alert: 'Usuario no restaurado, modificar o restaurar el rol: ' + @usuario.rol.nombre }
            format.json { head :no_content }
          end
        end

      end
    end

  end


  private

  def random(len = 10, character_set = ['A'..'Z', 'a'..'z', '0'..'9'])
    chars = character_set.map { |x| x.is_a?(Range) ? x.to_a : x }.flatten
    Array.new(len) { chars.sample }.join
  end

  # Use callbacks to share common setup or constraints between actions.
  def set_usuario
    @usuario = Usuario.find(params[:id])
  end

  # Never trust parameters from the scary internet, only allow the white list through.
  def usuario_params
    params.require(:usuario).permit(:nombre_usuario, :email, :encrypted_password,
                                    :legajo, :nombre, :apellido, :telefono, :celular,
                                    :dni, :descripcion, :fecha_nacimiento, :nacionalidad,
                                    :sexo, :link_imagen, :direccion, :localidad,
                                    :provincia, :pais, :rol_id, :role, :grupo, :fecha_baja, :carrera_id, :old_password, :new_password, :confirm_password)
  end

  # Cuando se presiona el boton cancelar
  #
  def redirect_cancel
    redirect_to usuarios_url if params[:cancel]
  end

end
