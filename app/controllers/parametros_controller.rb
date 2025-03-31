class ParametrosController < ApplicationController
  before_action :set_parametro, only: [:show, :edit, :update, :destroy]
  append_before_action :redirect_cancel, only: [:create, :update]

  # GET /parametros
  # GET /parametros.json
  def index
    @parametros = Parametro.all
  end

  # GET /parametros/1
  # GET /parametros/1.json
  def show
  end

  # GET /parametros/new
  def new
    @parametro = Parametro.new
  end

  # GET /parametros/1/edit
  def edit
  end

  # POST /parametros
  # POST /parametros.json
  def create
    @parametro = Parametro.new(parametro_params)
    respond_to do |format|
      if @parametro.save
        format.html { redirect_to parametros_url, notice: 'Parámetro creado correctamente.' }
        format.json { render :show, status: :created, location: @parametro }
      else
        format.html {
          flash.now[:alert] = 'Parámetro no creado, verificar los datos ingresados.'
          render :new
        }
        format.json { render json: @parametro.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /parametros/1
  # PATCH/PUT /parametros/1.json
  def update
    parametro_actual = Parametro.find(params[:id])
    @parametro.nombre = parametro_actual.nombre
    respond_to do |format|
      if @parametro.update(parametro_params)
        format.html { redirect_to parametros_url, notice: 'Parametro actualizado correctamente.' }
        format.json { render :show, status: :ok, location: @parametro }
      else
        format.html {
          flash.now[:alert] = 'Parámetro no actualizado, verificar los datos ingresados.'
          render :edit
        }
        format.json { render json: @parametro.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /parametros/1
  # DELETE /parametros/1.json
  def destroy
    if @parametro.fecha_baja.nil?
      @parametro.baja
      respond_to do |format|
        format.html { redirect_to parametros_url, notice: 'Parámetro eliminado.' }
        format.json { head :no_content }
      end
    else
      @parametro.restaurar
      respond_to do |format|
        format.html { redirect_to parametros_url, notice: 'Parámetro restaurado.' }
        format.json { head :no_content }
      end
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_parametro
      @parametro = Parametro.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def parametro_params
      params.require(:parametro).permit(:nombre, :valor, :fecha_baja)
    end

  # Cuando se presiona el boton cancelar
  def redirect_cancel
    redirect_to parametros_url if params[:cancel]
  end
end
