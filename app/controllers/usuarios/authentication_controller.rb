module Usuarios
  class AuthenticationController < ApiGuard::AuthenticationController
    before_action :find_resource, only: [:create]
    before_action :authenticate_resource, only: [:destroy]

    def create
      if resource.authenticate(params[:password])
        usuario = Usuario.find(resource.id)
        # Verifica que sea profesor
        if usuario.rol.grupo == 'Profesores' && permitido?('api', 'publicarclase')
          # Verifica que la cuenta este activa
          if usuario.fecha_baja.nil?
            # Verifica que tenga materias activas donde pueda publicar clases
            if usuario.tiene_materias_activas
            create_token_and_set_header(resource, resource_name)
              render_success(message: I18n.t('api_guard.authentication.signed_in'))
            # Si no tiene materias activas
            else
              render_error(418, message: I18n.t('api_guard.authentication.invalid_login_credentials'))
            end
            # Si la cuenta no esta activa
          else
            render_error(401, message: I18n.t('api_guard.authentication.invalid_login_credentials'))
          end
          # Si no es profesor o no tiene los permisos
        else
          render_error(403, message: I18n.t('api_guard.authentication.invalid_login_credentials'))
        end
        # Si las credenciales son incorrectas
      else
        render_error(404, message: I18n.t('api_guard.authentication.invalid_login_credentials'))
      end
    end

    # def destroy
    #   blacklist_token
    #   render_success(message: I18n.t('api_guard.authentication.signed_out'))
    # end

    #private

    def permitido?(seccion, accion)
      usuario = Usuario.find(resource.id)
      permisos = usuario&.rol&.permisos
    
      if permisos.blank?
        Rails.logger.warn "[AUTH CONTROLLER PERMISOS] Usuario #{usuario.id} sin permisos cargados."
        return false
      end
    
      seccion_permisos = permisos[seccion.to_s] || permisos[seccion.to_sym]
    
      if seccion_permisos.blank?
        Rails.logger.warn "[AUTH CONTROLLER PERMISOS] Usuario #{usuario.id} no tiene sección: #{seccion}."
        return false
      end
    
      permiso = seccion_permisos[accion.to_s] || seccion_permisos[accion.to_sym]
    
      if permiso
        Rails.logger.info "[AUTH CONTROLLER PERMISOS] ✅ Usuario #{usuario.id} tiene permiso para #{seccion}.#{accion}."
        true
      else
        Rails.logger.warn "[AUTH CONTROLLER PERMISOS] ❌ Usuario #{usuario.id} NO tiene permiso para #{seccion}.#{accion}."
        false
      end
    end

    def find_resource
      self.resource = resource_class.find_by(email: params[:email].downcase.strip) if params[:email].present?
      render_error(404, message: I18n.t('api_guard.authentication.invalid_login_credentials')) unless resource
    end
  end
end
