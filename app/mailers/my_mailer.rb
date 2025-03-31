class MyMailer < Devise::Mailer
  helper :application # gives access to all helpers defined within `application_helper`.
  include Devise::Controllers::UrlHelpers # Optional. eg. `confirmation_url`
  default template_path: 'devise/mailer' # to make sure that your mailer uses the devise views
  def reset_password_instructions(record, token, opts = {})
    opts[:from] = 'CathedraWeb <cathedra.soft@gmail.com>'
    if record.email.include? '@cathedra.com'
      opts[:to] = 'cathedra.software@gmail.com'
    end
    if record.activado?
      opts[:template_name] = 'reset_password_instructions'
    else
      opts[:template_name] = 'activacion_cuenta'
      opts[:subject] = 'Instrucciones de activación de cuenta'
    end
    super
  end

  def autoarchivado_correo(materias_archivar)
    admins = Usuario.where(role: 'Administrador', fecha_baja: nil).uniq.pluck(:email)

    correosarray = []
    admins.each do |admin|
      if admin.include? '@cathedra.com'
        unless correosarray.include?('cathedra.software@gmail.com')
          correosarray << 'cathedra.software@gmail.com'
        end
      else
        correosarray << admin
      end
    end
    correos = correosarray.join(",")
    # logger.info 'Correos' + correos
    if materias_archivar.empty?
      mail(to: correos, subject: 'Autoarchivado de materias', from: 'CathedraWeb <cathedra.soft@gmail.com>') do |format|
        format.html { render template: 'devise/mailer/autoarchivado_ninguno' }
      end
    else
      @materias = materias_archivar
      mail(to: correos, subject: 'Autoarchivado de materias', from: 'CathedraWeb <cathedra.soft@gmail.com>') do |format|
        format.html { render template: 'devise/mailer/autoarchivado_varios' }
      end
    end
  end

  def respuesta_correo(consulta)
    @consulta = consulta
    if consulta.alumno.email.include? '@cathedra.com'
      correo = 'cathedra.software@gmail.com'
    else
      correo = consulta.alumno.email
    end
    mail(to: correo, subject: 'Respuesta a tu consulta de ' + consulta.clase.materia.nombre, from: 'CathedraWeb <cathedra.soft@gmail.com>') do |format|
      format.html { render template: 'devise/mailer/respuesta' }
    end

  end

  def consulta_correo(consulta)
    @consulta = consulta
    if consulta.clase.profesor.email.include? '@cathedra.com'
      correo = 'cathedra.software@gmail.com'
    else
      correo = consulta.clase.profesor.email
    end
    mail(to: correo, subject: 'Tienes una consulta de ' + consulta.clase.materia.nombre, from: 'CathedraWeb <cathedra.soft@gmail.com>') do |format|
      format.html { render template: 'devise/mailer/consulta' }
    end
  end

end