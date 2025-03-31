class BackupsController < ApplicationController
  require 'openssl'
  require 'rake'


  def index

  end

  # def resetear
  #   render partial: 'backups/resetear_progreso'
  #   resetear_progreso
  # end

  # def resetear_progreso
  def resetear
    [Consulta,
     Registro,
     Enlace,
     Clase,
     MateriaEstado,
     Materia,
     Documento,
     Item,
     Video,
     Usuario,
     Carrera,
     Parametro,
     Rol].each { |model| model.truncate! }
    Rails.application.load_seed
    # flash[:notice] = 'Base de datos reseteada.'
    # flash.keep(:notice)
    # render js: "window.location = '/login'"
    render partial: 'backups/resetear_finalizado'
  end

  # Este codigo resetea pero tambien los de migration y luego da error
  # def resetear
  #   ActiveRecord::Base.connection.tables.each do |t|
  #     conn = ActiveRecord::Base.connection
  #     conn.execute("TRUNCATE TABLE #{t} CASCADE;")
  #     conn.reset_pk_sequence!(t)
  #   end
  #   Rails.application.load_seed
  #   redirect_to root_path
  # end

  def cargar
    # if backup_params[:backup_archivo].nil?
    #   # render partial: 'backups/cargar_error'
    # else
    uploaded_io = backup_params[:backup_archivo]
    # File.open(Rails.root.join('public', uploaded_io.original_filename), 'wb') do |file|
    File.open(Rails.root.join('public', 'backup_enc'), 'wb') do |file|
      file.write(uploaded_io.read)
    end
    # Opciones de encriptado e inicializacion
    cipher = OpenSSL::Cipher.new('aes-256-cbc')
    cipher.decrypt
    cipher.key = "<VC\xFF\x85Vv\xA3\xD9\xA6\x01a\xE1kw\xAAH\x95`\x8E\x12|\x8B\xEB\xA8\x8D[`\x01\x00\xB0\xA7"
    cipher.iv = "\xB0]X\xFD\x19\xB8d\xF7?\xF3\x90\xD9\xF5(H\xF8"
    buf = ""
    # Desencriptado
    File.open("#{Rails.root}/public/backup_dec", "wb") do |outf|
      File.open("#{Rails.root}/public/backup_enc", "rb") do |inf|
        while inf.read(4096, buf)
          outf << cipher.update(buf)
        end
        outf << cipher.final
      end
    end
    # Setear la task rake
    spec = Gem::Specification.find_by_name 'pg_backup'
    load "#{spec.gem_dir}/lib/pg_backup/tasks/dump.rake"
    ENV['PG_DUMP_DIR'] = "#{Rails.root}/public/"
    ENV['PG_DUMP_FILE'] = 'backup_dec'
    Rake::Task['pg_backup:dump:load'].execute
    # Eliminar archivo luego de decodificar
    File.delete("#{Rails.root}/public/backup_dec")
    File.delete("#{Rails.root}/public/backup_enc")
    # TODO en el descargar agregarle una identificacion (luego remover aca ) para verificar si es un archivo de backup valido,
    # si no es valido redireccionar a otro partial que muestre error
    respond_to do |format|
      format.js { render partial: 'backups/cargar_finalizado' }
      format.html { redirect_to backups_path, notice: 'Copia de seguridad restaurada.' }
    end
    # end
  end

  def descargar
    render partial: 'backups/descargar_finalizado'

    # render partial: 'backups/descargar_finalizado' do |page|
    # page.redirect_to :action => "cargar", :record_ids => params[:record_ids]
    # page.redirect_to action: 'cargar'
    # end
    #
  end

  def download
    spec = Gem::Specification.find_by_name 'pg_backup'
    load "#{spec.gem_dir}/lib/pg_backup/tasks/dump.rake"
    ENV['PG_DUMP_DIR'] = "#{Rails.root}/public/"
    ENV['PG_DUMP_FILE'] = 'cathedra.backup'
    Rake::Task['pg_backup:dump:create'].execute
    # Encriptado
    cipher = OpenSSL::Cipher.new('aes-256-cbc')
    cipher.encrypt
    cipher.key = "<VC\xFF\x85Vv\xA3\xD9\xA6\x01a\xE1kw\xAAH\x95`\x8E\x12|\x8B\xEB\xA8\x8D[`\x01\x00\xB0\xA7"
    cipher.iv = "\xB0]X\xFD\x19\xB8d\xF7?\xF3\x90\xD9\xF5(H\xF8"
    buf = ""
    File.open("#{Rails.root}/public/cathedra.backup.enc", "wb") do |outf|
      File.open("#{Rails.root}/public/cathedra.backup", "rb") do |inf|
        while inf.read(4096, buf)
          outf << cipher.update(buf)
        end
        outf << cipher.final
      end
    end
    File.delete("#{Rails.root}/public/cathedra.backup")
    send_file(
      "#{Rails.root}/public/cathedra.backup.enc",
      filename: 'cathedra' + Time.now.strftime('%Y-%m-%d-%H.%M.%S') + '.backup'
    )
  end

  def backup_params
    params.permit(:backup_archivo)
  end

end
