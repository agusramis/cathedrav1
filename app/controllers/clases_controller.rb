class ClasesController < ApplicationController
  before_action :set_clase, only: [:show, :edit, :update, :destroy, :setearvisible, :descargarpdf, :borrar]
  append_before_action :redirect_cancel, only: [:create, :update]
  # Cloudinary
  # require 'open-uri'
  require 'open-uri'
  require 'stringio'
  require 'zip/zip'
  require 'zip'

  # GET /clases
  # GET /clases.json
  def index
    # @clases = Clase.all
    if params[:materia_id]
      @materia = Materia.find(params[:materia_id])
      @clases = Clase.all.where(materia: params[:materia_id])
    else
      @clases = Clase.all
    end
  end

  # GET /clases/1
  # GET /clases/1.json
  def show
  end

  # GET /clases/new
  def new
    if params[:materia_id]
      @materia = Materia.find(params[:materia_id])
    end
    @clase = Clase.new
  end

  # GET /clases/1/edit
  def edit
  end

  def setearvisible
    clase = Clase.find(params[:id])
    respond_to do |format|
      # if clase.profesor == current_usuario
        if clase.visible
          clase.update_attribute(:visible, false)
          format.html { redirect_to materia_url(clase.materia.id.to_s) + '!#clase_' + clase.id.to_s, notice: 'Clase oculta para los alumnos.' }
        else
          clase.update_attribute(:visible, true)
          format.html { redirect_to materia_url(clase.materia.id.to_s) + '!#clase_' + clase.id.to_s, notice: 'Clase visible para los alumnos.' }
        end
      # else
      #   format.html { redirect_to materia_url(clase.materia.id.to_s) + '!#clase_' + clase.id.to_s, alert: 'No puede modificar la visibilidad de la clase, fue dictada por:' +
      #     clase.profesor.nombre + ' ' + clase.profesor.apellido }
      # end
    end
  end

  # POST /clases
  # POST /clases.json
  def create
    # if params[:materia_id]
    #   @materia = Materia.find(params[:materia_id])
    # end
  end

  # PATCH/PUT /clases/1
  # PATCH/PUT /clases/1.json
  def update
    respond_to do |format|
      if current_usuario.profesores?
        if @clase.update(clase_params)
          format.html { redirect_to materia_url(@clase.materia), notice: 'Clase actualizada exitosamente.' }
          format.json { render :show, status: :ok, location: @clase }
        else
          format.html do
            flash.now[:alert] = 'Clase no actualizada, verificar los datos ingresados.'
            render :edit
          end
          format.json { render json: @clase.errors, status: :unprocessable_entity }
        end
      else
        if @clase.update(clase_params)
          format.html { redirect_to materia_clases_url(@clase.materia), notice: 'Clase actualizada exitosamente.' }
          format.json { render :show, status: :ok, location: @clase }
        else
          format.html do
            flash.now[:alert] = 'Clase no actualizada, verificar los datos ingresados.'
            render :edit
          end
          format.json { render json: @clase.errors, status: :unprocessable_entity }
        end
      end
    end
  end

  # DELETE /clases/1
  # DELETE /clases/1.json
  def destroy
    if @clase.fecha_baja.nil?
      @clase.baja
      respond_to do |format|
        format.html { redirect_to materia_clases_url(@clase.materia), notice: 'Clase dada de baja.' }
        format.json { head :no_content }
      end
    else
      @clase.restaurar
      respond_to do |format|
        format.html { redirect_to materia_clases_url(@clase.materia), notice: 'Clase restaurada.' }
        format.json { head :no_content }
      end
    end
  end

  def nueva_clase
    @clase = Clase.new
    @materia = Materia.find(clase_params[:materia_seleccionada])
    if clase_params[:clase_recurso] == ''
      respond_to do |format|
        format.html do
          if clase_params[:nombre] == ''
            @clase.errors.add :nombre, 'no puede estar en blanco'
          end
          @clase.errors.add :clase_recurso, 'debe seleccionar un recurso'
          flash.now[:alert] = 'Clase no creada, verificar los datos ingresados.'
          render :new
        end
        format.json { render json: @clase.errors, status: :unprocessable_entity }
      end
    else
      clase_recurso = Clase.find(clase_params[:clase_recurso])
      @clase.nombre = clase_params[:nombre]
      if clase_params[:nombre] == ''
        @clase.errors.add :nombre, 'no puede estar en blanco'
      end
      @clase.descripcion = clase_params[:descripcion]
      @clase.visible = clase_params[:visible]
      video_nuevo = Video.new
      video_nuevo.nombre = clase_recurso.video.nombre
      video_nuevo.link_video = clase_recurso.video.link_video
      video_nuevo.duracion = clase_recurso.video.duracion
      @clase.video = video_nuevo
      @clase.documento = clase_recurso.documento
      @clase.materia = @materia
      @clase.profesor = current_usuario
      # logger.info @clase.to_json
      respond_to do |format|
        if @clase.save
          format.html { redirect_to materia_url(@clase.materia.id.to_s) + '!#clase_' + @clase.id.to_s, notice: 'Clase creada exitosamente.' }
          format.json { render :show, status: :created, location: @clase }
        else
          format.html do
            flash.now[:alert] = 'Clase no creada, verificar los datos ingresados.'
            render :new
          end
          format.json { render json: @clase.errors, status: :unprocessable_entity }
        end
      end
    end
  end

  def descargarpdf
    # respond_to do |format|
    #   format.pdf do
    pdf = Prawn::Document.new(:page_layout => :landscape, :page_size => 'A4')
    pdf.image "#{Rails.root}/app/assets/images/site/LogoColor.png", at: [250, 350], width: 250
    # pdf.image ActionController::Base.helpers.image_path('images/site/LogoColor.png'), :at => [50,450], :width => 450
    pdf.bounding_box([5, 50], width: 300, height: 200) do
      pdf.text 'Clase: ' + @clase.nombre
      pdf.text 'Publicada: ' + @clase.created_at.to_s
      pdf.text 'Materia: ' + @clase.materia.nombre + ' (' + @clase.materia.codigo + ')'
      pdf.text 'Profesor: ' + @clase.profesor.nombre + ' ' + @clase.profesor.apellido
    end
    # Local
    # Zip::ZipInputStream::open(Rails.root.to_s + '/public' + @clase.documento.link_documento.to_s) do |io|
    # Local
    # Cloudinary
    contents = URI.parse(@clase.documento.link_documento.to_s).read
    Zip::ZipInputStream::open(StringIO.new(contents)) do |io|
      # Cloudinary
      counter = 1
      while (entry = io.get_next_entry)
        pdf.start_new_page
        pdf.text 'Pizarra ' + counter.to_s
        pdf.image(StringIO.new(io.read), fit: [750, 595], at: [10, 480])
        counter += 1
        # puts "Contents of #{entry.name}: '#{io.read}'"
      end
    end
    send_data pdf.render,
              filename: 'clase.pdf',
              type: 'application/pdf'
  end

  def borrar
    @clase.baja
    respond_to do |format|
      format.html { redirect_to materia_url(@clase.materia), notice: 'Clase eliminada.' }
      format.json { head :no_content }
    end
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_clase
    @clase = Clase.find(params[:id])
  end

  # Never trust parameters from the scary internet, only allow the white list through.
  def clase_params
    params.require(:clase).permit(:nombre, :visible, :fecha_baja, :descripcion,
                                  :clase_recurso, :materia_seleccionada)
  end

  # Cuando se presiona el boton cancelar
  def redirect_cancel
    clase = Clase.find(params[:id])
    if current_usuario.profesores?
      redirect_to materia_url(clase.materia) if params[:cancel]
    else
      redirect_to materia_clases_path(clase.materia.id) if params[:cancel]
    end
  end
end