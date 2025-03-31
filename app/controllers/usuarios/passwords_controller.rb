# frozen_string_literal: true

class Usuarios::PasswordsController < Devise::PasswordsController
  layout 'pages'
  # GET /resource/password/new
  #
  # def new
  #   super
  #
  # end

  # POST /resource/password
  def create
    # logger.info resource_params[:email]
    if resource_params[:email] == ''
      redirect_to '/password/new', alert: 'Debe ingresar un correo.'
    else
      if !resource_params[:email].match?(/\A([\w+\-].?)+@[a-z\d\-]+(\.[a-z]+)*\.[a-z]+\z/)
        redirect_to '/password/new', alert: 'Debe ingresar un correo válido.'
      else
        # if resource_params[:email].include? '@cathedra.com'
        #   self.resource = resource_class.send_reset_password_instructions(resource_params, {to: Rails.application.credentials.GMAIL_USERNAME})
        # else
        self.resource = resource_class.send_reset_password_instructions(resource_params)
        # end
        yield resource if block_given?
        if successfully_sent?(resource)
          # flash[:alert] = 'Se enviaron instrucciones a su correo electrónico para cambiar la contraseña.'
          respond_with({}, location: after_sending_reset_password_instructions_path_for(resource_name))
        else
          # flash[:alert] = 'Se enviaron instrucciones a su correo electrónico para cambiar la contraseña.'
          respond_with(resource)
        end
      end
    end
  end
  # def create
  #   super
  #   respond_to do |format|
  #     format.html { flash.now[notice] = 'Recibirás un email con instrucciones para reiniciar tu contraseña en unos minutos.' }
  #   end
  # end

  # GET /resource/password/edit?reset_password_token=abcdef
  # def edit
  #   super
  # end

  # PUT /resource/password
  # def update
  #   super
  # end

  # protected

  def after_resetting_password_path_for(resource)
    usuario = Usuario.find(resource.id)
    usuario.activado = true
    usuario.save!
    super(resource)
  end

  # The path used after sending reset password instructions
  # def after_sending_reset_password_instructions_path_for(resource_name)
  #   super(resource_name)
  # end
end
