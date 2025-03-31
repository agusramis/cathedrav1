class EnlacesController < ApplicationController
  before_action :set_enlace, only: [:show, :edit, :update, :destroy]

  # GET /enlaces
  # GET /enlaces.json
  def index
    @enlaces = Enlace.all
  end

  # GET /enlaces/1
  # GET /enlaces/1.json
  def show
  end

  # GET /enlaces/new
  def new
    @enlace = Enlace.new
  end

  # GET /enlaces/1/edit
  def edit
  end

  # POST /enlaces
  # POST /enlaces.json
  def create
    @enlace = Enlace.new(enlace_params)

    respond_to do |format|
      if @enlace.save
        format.html { redirect_to @enlace, notice: 'Enlace was successfully created.' }
        format.json { render :show, status: :created, location: @enlace }
      else
        format.html { render :new }
        format.json { render json: @enlace.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /enlaces/1
  # PATCH/PUT /enlaces/1.json
  def update
    respond_to do |format|
      if @enlace.update(enlace_params)
        format.html { redirect_to @enlace, notice: 'Enlace was successfully updated.' }
        format.json { render :show, status: :ok, location: @enlace }
      else
        format.html { render :edit }
        format.json { render json: @enlace.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /enlaces/1
  # DELETE /enlaces/1.json
  def destroy
    clase = Clase.find(@enlace.clase.id)
    # clase_buscada = Clase.find(video.clases.first.id)
    @enlace.destroy
    respond_to do |format|
      # format.html { redirect_to items_url, notice: 'Indice eliminado.' }
      format.html { redirect_to materia_url(clase.materia.id.to_s) + '!#clase_' + clase.id.to_s, notice: 'Enlace eliminado.' }
      format.json {}
    end
    # @enlace.destroy
    # respond_to do |format|
    #   format.html { redirect_to enlaces_url, notice: 'Enlace was successfully destroyed.' }
    #   format.json { head :no_content }
    # end
  end

  def actualizar
    enlace = Enlace.new
    clasebuscada = Clase.find(params[:clase_id])
    videobuscado = clasebuscada.video
    enlace.nombre = params[:nombre]
    enlace.clase = clasebuscada
    enlace.link_enlace = params[:link_enlace]
    respond_to do |format|
      if enlace.save
        format.html { redirect_to materia_url(clasebuscada.materia.id.to_s) + '!#clase_' + clasebuscada.id.to_s, notice: 'Enlace agregado.' }
        format.json {}
      else
        format.html {
          flash[:alert] = 'Error, verificar los datos ingresados.'
          redirect_to materia_url(clasebuscada.materia.id.to_s) + '!#clase_' + params[:clase_id]
        }
        format.json { render json: enlace.errors, status: :unprocessable_entity }
      end
    end
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_enlace
    @enlace = Enlace.find(params[:id])
  end

  # Never trust parameters from the scary internet, only allow the white list through.
  def enlace_params
    params.require(:enlace).permit(:nombre, :link_enlace, :fecha_baja, :clase_id)
  end
end
