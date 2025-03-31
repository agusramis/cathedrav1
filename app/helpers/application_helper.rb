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
    if current_usuario.rol.permisos.has_key?(seccion)
      if current_usuario.rol.permisos[seccion.to_sym][accion.to_sym] == 'true'
        true
      else
        false
      end
    else
      false
    end
  end


end
