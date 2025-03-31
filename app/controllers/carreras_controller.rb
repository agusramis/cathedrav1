class CarrerasController < ApplicationController
  before_action :set_carrera, only: [:show, :edit, :update, :destroy]
  append_before_action :redirect_cancel, only: [:create, :update]

  # GET /carreras
  # GET /carreras.json
  def index
    @carreras = Carrera.all
  end

  # GET /carreras/1
  # GET /carreras/1.json
  def show
  end

  # GET /carreras/new
  def new
    @carrera = Carrera.new
  end

  # GET /carreras/1/edit
  def edit
  end

  # POST /carreras
  # POST /carreras.json
  def create
    @carrera = Carrera.new(carrera_params)

    respond_to do |format|
      if @carrera.save
        format.html { redirect_to carreras_path, notice: 'Carrera creada.' }
        format.json { render :show, status: :created, location: @carrera }
      else
        format.html {
          flash.now[:alert] = 'Carrera no creada, verificar los datos ingresados.'
          render :new
        }
        format.json { render json: @carrera.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /carreras/1
  # PATCH/PUT /carreras/1.json
  def update
    respond_to do |format|
      if @carrera.update(carrera_params)
        format.html { redirect_to carreras_path, notice: 'Carrera actualizada exitosamente.' }
        format.json { render :show, status: :ok, location: @carrera }
      else
        format.html {
          flash.now[:alert] = 'Carrera no actualizada, verificar los datos ingresados.'
          render :edit
        }
        format.json { render json: @carrera.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /carreras/1
  # DELETE /carreras/1.json
  def destroy
    if @carrera.materias_activas.count > 0
      respond_to do |format|
        format.html { redirect_to carreras_url, alert: 'La carrera contiene materias activas, no puede darla de baja.' }
        format.json { render json: @carrera.errors, status: :unprocessable_entity }
      end
    else
      if @carrera.fecha_baja.nil?
        @carrera.baja
        respond_to do |format|
          format.html { redirect_to carreras_url, notice: 'Carrera dada de baja.' }
          format.json { head :no_content }
        end
      else
        @carrera.restaurar
        respond_to do |format|
          format.html { redirect_to carreras_url, notice: 'Carrera restaurada.' }
          format.json { head :no_content }
        end
      end
    end
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_carrera
    @carrera = Carrera.find(params[:id])
  end

  # Never trust parameters from the scary internet, only allow the white list through.
  def carrera_params
    params.require(:carrera).permit(:codigo, :nombre, :descripcion, :fecha_baja)
  end

  # Cuando se presiona el boton cancelar
  def redirect_cancel
    redirect_to carreras_url if params[:cancel]
  end
end
