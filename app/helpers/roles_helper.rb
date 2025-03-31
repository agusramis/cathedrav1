module RolesHelper
  def traducirpermiso(keypermiso)
    hashtraduccion = {
      # registros
      registros: 'Registros',
      registros_finalizar: 'Finalizar',
      registros_index: 'Listar',
      registros_edit: 'Editar',
      registros_new: 'Crear',
      registros_show: 'Mostrar',
      registros_destroy: 'Finalizar',
      registros_asignar_profesor: 'Asignar profesor',
      registros_asignar_alumno: 'Asignar alumno',
      registros_inscribir_alumno: 'Inscribir a materia',
      registros_desinscribir: 'Desinscribir de materia',
      # usuarios
      usuarios: 'Usuarios',
      usuarios_index: 'Listar',
      usuarios_edit: 'Editar',
      usuarios_new: 'Crear',
      usuarios_show: 'Mostrar',
      usuarios_destroy: 'Dar de baja / Restaurar',
      # roles
      roles: 'Roles',
      roles_index: 'Listar',
      roles_edit: 'Editar',
      roles_new: 'Crear',
      roles_show: 'Mostrar',
      roles_destroy: 'Dar de baja / Restaurar',
      roles_permisos: 'Listar permisos',
      roles_actualizarpermisos: 'Editar permisos',
      # carreras
      carreras: 'Carreras',
      carreras_index: 'Listar',
      carreras_edit: 'Editar',
      carreras_new: 'Crear',
      carreras_show: 'Mostrar',
      carreras_destroy: 'Dar de baja / Restaurar',
      # materias
      materias: 'Materias',
      materias_index: 'Listar',
      materias_edit: 'Editar',
      materias_new: 'Crear',
      materias_show: 'Mostrar',
      materias_destroy: 'Archivar',
      materias_listar_participantes: 'Listar participantes',
      materias_mostrar_participante: 'Mostrar participante',
      # clases
      clases: 'Clases',
      clases_index: 'Listar',
      clases_edit: 'Editar',
      clases_new: 'Crear',
      clases_show: 'Mostrar',
      clases_destroy: 'Dar de baja / Restaurar',
      clases_descargarpdf: 'Descargar PDF',
      clases_setearvisible: 'Cambiar visibilidad',
      clases_borrar: 'Dar de baja',
      # estados
      estados: 'Estados de materia',
      estados_index: 'Listar',
      estados_edit: 'Editar',
      estados_new: 'Crear',
      estados_show: 'Mostrar',
      estados_destroy: 'Dar de baja / Restaurar',
      # parametros
      parametros: 'Parámetros',
      parametros_index: 'Listar',
      parametros_edit: 'Editar',
      parametros_new: 'Crear',
      parametros_show: 'Mostrar',
      parametros_destroy: 'Dar de baja / Restaurar',
      # consultas
      consultas: 'Consultas',
      consultas_index: 'Listar',
      consultas_edit: 'Editar',
      consultas_new: 'Crear',
      consultas_show: 'Mostrar',
      consultas_destroy: 'Dar de baja / Restaurar',
      consultas_responder: 'Responder',
      consultas_realizar: 'Realizar',
      consultas_aclarar: 'Aclarar',
      # reportes
      reportes: 'Reportes',
      reportes_index: 'Listar',
      reportes_edit: 'Editar',
      reportes_new: 'Crear',
      reportes_show: 'Mostrar',
      reportes_destroy: 'Dar de baja / Restaurar',
      reportes_reportes_profesor: 'Mostrar',
      # api
      api: 'Aplicacion escritorio',
      api_publicarclase: 'Utilizar',
      # backups
      backups: 'Backups',
      backups_index: 'Gestionar',
      backups_resetear: 'Resetear base de datos',
      backups_cargar: 'Cargar backup desde archivo',
      backups_descargar: 'Generar backup y descargar'
    }
    if hashtraduccion.key?(keypermiso.to_sym)
      return hashtraduccion[keypermiso.to_sym]
    else
      return "Sin traducir: #{keypermiso}"
    end
  end
end
