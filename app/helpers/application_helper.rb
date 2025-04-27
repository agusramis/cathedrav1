module ApplicationHelper
  def controller?(*controller)
    controller.include?(params[:controller])
  end

  def action?(*action)
    action.include?(params[:action])
  end

  def custom_bootstrap_flash
    flash_messages = []
    flash.each do |type, message|
      type = 'success' if type == 'notice'
      type = 'error' if type == 'alert'
      text = "<script>$(function () {toastr.#{type}('#{message}');});</script>"
      flash_messages << text.html_safe if message
    end
    flash_messages.join("\n").html_safe
  end

  def permitido?(seccion, accion)
    usuario = current_usuario
    permisos = usuario&.rol&.permisos
  
    if permisos.blank?
      Rails.logger.warn "[HELPER PERMISOS] Usuario #{usuario&.id} sin permisos cargados."
      return false
    end
  
    seccion_permisos = permisos[seccion.to_s] || permisos[seccion.to_sym]
  
    if seccion_permisos.blank?
      Rails.logger.warn "[HELPER PERMISOS] Usuario #{usuario.id} no tiene sección: #{seccion}."
      return false
    end
  
    permiso = seccion_permisos[accion.to_s] || seccion_permisos[accion.to_sym]
  
    if permiso
      Rails.logger.info "[HELPER PERMISOS] ✅ Usuario #{usuario.id} tiene permiso para #{seccion}.#{accion}."
      true
    else
      Rails.logger.warn "[HELPER PERMISOS] ❌ Usuario #{usuario.id} NO tiene permiso para #{seccion}.#{accion}."
      false
    end
  end


end
