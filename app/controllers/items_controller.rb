class ItemsController < ApplicationController
  before_action :set_item, only: [:show, :edit, :update, :destroy]

  # GET /items
  # GET /items.json
  def index
    @items = Item.all
  end

  # GET /items/1
  # GET /items/1.json
  def show
  end

  # GET /items/new
  def new
    @item = Item.new
  end

  # GET /items/1/edit
  def edit
  end

  # POST /items
  # POST /items.json
  def create
    @item = Item.new(item_params)

    respond_to do |format|
      if @item.save
        format.html { redirect_to @item, notice: 'Item was successfully created.' }
        format.json { render :show, status: :created, location: @item }
      else
        format.html { render :new }
        format.json { render json: @item.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /items/1
  # PATCH/PUT /items/1.json
  def update
    respond_to do |format|
      if @item.update(item_params)
        format.html { redirect_to @item, notice: 'Item was successfully updated.' }
        format.json { render :show, status: :ok, location: @item }
      else
        format.html { render :edit }
        format.json { render json: @item.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /items/1
  # DELETE /items/1.json
  def destroy
    video = Video.find(@item.video.id)
    clase_buscada = Clase.find(video.clases.first.id)
    @item.destroy
    respond_to do |format|
      # format.html { redirect_to items_url, notice: 'Indice eliminado.' }
      format.html { redirect_to materia_url(clase_buscada.materia.id.to_s) + '!#clase_' + clase_buscada.id.to_s, notice: 'Indice eliminado.' }
      format.json {  }
    end
  end

  def actualizar
    item = Item.new
    clasebuscada = Clase.find(params[:clase_id])
    videobuscado = clasebuscada.video
    item.titulo = params[:titulo]
    item.video = videobuscado
    item.posicion_video = params[:posicion_video]
    respond_to do |format|
      if item.save
        format.html { redirect_to materia_url(clasebuscada.materia.id.to_s) + '!#clase_' + clasebuscada.id.to_s, notice: 'Indice agregado.' }
        format.json {}
      else
        format.html {
          flash[:alert] = 'Error, verificar los datos ingresados.'
          redirect_to materia_url(clasebuscada.materia.id.to_s) + '!#clase_' + params[:clase_id]
        }
        format.json { render json: item.errors, status: :unprocessable_entity }
      end
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_item
      @item = Item.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def item_params
      params.require(:item).permit(:numero, :titulo, :posicion_video, :clase_id, :item_id)
    end
end
