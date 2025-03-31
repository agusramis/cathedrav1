class MateriaEstadosController < ApplicationController
  before_action :set_materia_estado, only: [:show, :edit, :update, :destroy]

  # GET /materia_estados
  # GET /materia_estados.json
  def index
    @materia = Materia.find(params[:materia_id])
    @materia_estados = MateriaEstado.all.where(materia: params[:materia_id])
  end

  # GET /materia_estados/1
  # GET /materia_estados/1.json
  def show
  end

  # GET /materia_estados/new
  def new
    @materia_estado = MateriaEstado.new
  end

  # GET /materia_estados/1/edit
  def edit
  end

  # POST /materia_estados
  # POST /materia_estados.json
  def create
    @materia_estado = MateriaEstado.new(materia_estado_params)

    respond_to do |format|
      if @materia_estado.save
        format.html { redirect_to @materia_estado, notice: 'Materia estado was successfully created.' }
        format.json { render :show, status: :created, location: @materia_estado }
      else
        format.html { render :new }
        format.json { render json: @materia_estado.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /materia_estados/1
  # PATCH/PUT /materia_estados/1.json
  def update
    respond_to do |format|
      if @materia_estado.update(materia_estado_params)
        format.html { redirect_to @materia_estado, notice: 'Materia estado was successfully updated.' }
        format.json { render :show, status: :ok, location: @materia_estado }
      else
        format.html { render :edit }
        format.json { render json: @materia_estado.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /materia_estados/1
  # DELETE /materia_estados/1.json
  def destroy
    @materia_estado.destroy
    respond_to do |format|
      format.html { redirect_to materia_estados_url, notice: 'Materia estado was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_materia_estado
      @materia_estado = MateriaEstado.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def materia_estado_params
      params.require(:materia_estado).permit(:fecha_desde, :fecha_hasta)
    end
end
