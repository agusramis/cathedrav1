# frozen_string_literal: true

class Usuarios::SessionsController < Devise::SessionsController
  # before_action :configure_sign_in_params, only: [:create]
  layout 'pages'

  # GET /resource/sign_in
  # def new
  #
  # end

  # POST /resource/sign_in
  def create
    usuario = Usuario.where(email: sign_in_params[:email]).first
    if usuario.nil?
      super
    else
      if usuario.fecha_baja.nil?
        super
      else
        redirect_to '/login', alert: 'Su cuenta se encuentra deshabilitada'
      end
    end
  end

  # DELETE /resource/sign_out
  # def destroy
  #   super
  # end

  # protected

  # If you have extra params to permit, append them to the sanitizer.
  # def configure_sign_in_params
  #   devise_parameter_sanitizer.permit(:sign_in, keys: [:attribute])
  # end
end
