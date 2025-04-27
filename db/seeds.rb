# db/seeds.rb
# frozen_string_literal: true

ActiveRecord::Base.transaction do
  puts "✨ Creando roles..."
  roles = [
    {
      nombre: 'Administrador',
      descripcion: 'Gestiona la plataforma',
      permisos: {
        registros: { index: true, asignar_profesor: true, asignar_alumno: true, destroy: true },
        usuarios: { index: true, new: true, show: true, edit: true, destroy: true },
        roles: { index: true, new: true, edit: true, destroy: true, permisos: true, actualizarpermisos: true },
        carreras: { index: true, new: true, edit: true, destroy: true },
        materias: { index: true, new: true, show: true, edit: true, destroy: true },
        clases: { index: true, show: true, edit: true, destroy: true, descargarpdf: true },
        estados: { index: true },
        parametros: { index: true, edit: true },
        backups: { index: true, resetear: true, cargar: true, descargar: true }
      },
      grupo: 'Administradores'
    },
    {
      nombre: 'Profesor',
      descripcion: 'Realiza el dictado de las clases',
      permisos: {
        materias: { listar_participantes: true, mostrar_participante: true },
        clases: { new: true, setearvisible: true, edit: true, descargarpdf: true, borrar: true },
        consultas: { responder: true, aclarar: true },
        reportes: { reportes_profesor: true },
        api: { publicarclase: true }
      },
      grupo: 'Profesores'
    },
    {
      nombre: 'Alumno',
      descripcion: 'Estudiantes que utilizan la plataforma',
      permisos: {
        materias: { listar_participantes: true },
        clases: { descargarpdf: true },
        consultas: { realizar: true },
        registros: { inscribir_alumno: true, desinscribir: true }
      },
      grupo: 'Alumnos'
    }
  ]

  roles.each do |attrs|
    rol = Rol.find_or_initialize_by(nombre: attrs[:nombre])
    rol.update!(attrs.merge(permisos: attrs[:permisos]))
  end
  

  puts "✨ Creando parámetros..."
  Parametro.find_or_create_by!(nombre: 'IDClient') do |p|
    p.valor = '916191736167-7kiskuojm9l0ekfjmqjugcs8s90fvnp8.apps.googleusercontent.com'
    p.descripcion = 'ID del cliente API YouTube'
  end

  Parametro.find_or_create_by!(nombre: 'SecretClient') do |p|
    p.valor = 'i4Jsmv5EOG_-IxyZGxerEvwh'
    p.descripcion = 'Secret del cliente API YouTube'
  end

  Parametro.find_or_create_by!(nombre: 'RefreshToken') do |p|
    p.valor = '1//04Olb32z17x63CgYIARAAGAQSNwF-L9IrjDWLbcnhiosrcdTzGvRT4y_09UwzSJuTjX-nemTLEWtrmEkp4Y3dIpGhfVkDav5rnOo'
    p.descripcion = 'RefreshToken del cliente API YouTube'
  end

  Parametro.find_or_create_by!(nombre: 'EdadAlumnos') { |p| p.valor = '18' }
  Parametro.find_or_create_by!(nombre: 'EdadPersonal') { |p| p.valor = '18' }

  puts "✨ Creando carreras..."
  Carrera.find_or_create_by!(codigo: 'ISI') { |c| c.nombre = 'Ingeniería en Sistemas de Información'; c.descripcion = 'Carrera de Informática' }
  Carrera.find_or_create_by!(codigo: 'IQ') { |c| c.nombre = 'Ingeniería Química'; c.descripcion = 'Carrera de Química' }
  Carrera.find_or_create_by!(codigo: 'IM') { |c| c.nombre = 'Ingeniería Mecánica'; c.descripcion = 'Carrera de Mecánica' }

  puts "✨ Creando usuarios..."
  admin_rol = Rol.find_by(nombre: 'Administrador')
  profe_rol = Rol.find_by(nombre: 'Profesor')
  alumno_rol = Rol.find_by(nombre: 'Alumno')
  carrera_isi = Carrera.find_by(codigo: 'ISI')

  usuarios = [
    {
      email: 'ricardo.rojas@cathedra.com',
      password: 'Class321',
      nombre_usuario: 'ricardo.rojas@cathedra.com',
      nombre: 'Ricardo',
      apellido: 'Rojas',
      dni: 33006006,
      fecha_nacimiento: '1988-01-17',
      nacionalidad: 'Argentino',
      sexo: 'Masculino',
      direccion: 'Avenida Siempre Buena 133',
      localidad: 'La Colonia',
      provincia: 'Mendoza',
      pais: 'Argentina',
      telefono: '',
      celular: '',
      legajo: '00010001',
      rol: admin_rol
    },
    {
      email: 'julio.profe@cathedra.com',
      password: 'Class321',
      nombre_usuario: 'julio.profe@cathedra.com',
      nombre: 'Julio',
      apellido: 'Profe',
      dni: 11009009,
      fecha_nacimiento: '1947-01-20',
      nacionalidad: 'Argentino',
      sexo: 'Masculino',
      direccion: 'Barrio Almafuerte M E C 12',
      localidad: 'Ciudad',
      provincia: 'Mendoza',
      pais: 'Argentina',
      telefono: '',
      celular: '',
      legajo: '00010002',
      rol: profe_rol
    },
    {
      email: 'esteban.rey@cathedra.com',
      password: 'Class321',
      nombre_usuario: 'esteban.rey@cathedra.com',
      nombre: 'Esteban',
      apellido: 'Rey',
      dni: 13010010,
      fecha_nacimiento: '1947-08-25',
      nacionalidad: 'Sueco',
      sexo: 'Masculino',
      direccion: 'Barrio Cotorra M A C 2',
      localidad: 'Ciudad',
      provincia: 'Mendoza',
      pais: 'Argentina',
      telefono: '',
      celular: '',
      legajo: '00010003',
      rol: profe_rol
    },
    {
      email: 'marta.arana@cathedra.com',
      password: 'Class321',
      nombre_usuario: 'marta.arana@cathedra.com',
      nombre: 'Marta',
      apellido: 'Arana',
      dni: 41705008,
      fecha_nacimiento: '1995-02-20',
      nacionalidad: 'Argentino',
      sexo: 'Femenino',
      direccion: 'Barrio Catupecu Machu M B C 1',
      localidad: 'Junin',
      provincia: 'Mendoza',
      pais: 'Argentina',
      telefono: '',
      celular: '',
      legajo: '00010004',
      rol: alumno_rol,
      carrera: carrera_isi
    },
    {
      email: 'leonel.misse@cathedra.com',
      password: 'Class321',
      nombre_usuario: 'leonel.misse@cathedra.com',
      nombre: 'Leonel',
      apellido: 'Misse',
      dni: 40707709,
      fecha_nacimiento: '1995-06-25',
      nacionalidad: 'Argentino',
      sexo: 'Masculino',
      direccion: 'Barrio Catupecu Machu M B C 2',
      localidad: 'Junin',
      provincia: 'Mendoza',
      pais: 'Argentina',
      telefono: '',
      celular: '',
      legajo: '00010005',
      rol: alumno_rol,
      carrera: carrera_isi
    }
  ]

  usuarios.each do |user_attrs|
    user = Usuario.find_or_initialize_by(email: user_attrs[:email])
    user.assign_attributes(
      password: user_attrs[:password],
      password_confirmation: user_attrs[:password],
      nombre_usuario: user_attrs[:nombre_usuario],
      nombre: user_attrs[:nombre],
      apellido: user_attrs[:apellido],
      dni: user_attrs[:dni],
      fecha_nacimiento: user_attrs[:fecha_nacimiento],
      nacionalidad: user_attrs[:nacionalidad],
      sexo: user_attrs[:sexo],
      direccion: user_attrs[:direccion],
      localidad: user_attrs[:localidad],
      provincia: user_attrs[:provincia],
      pais: user_attrs[:pais],
      telefono: user_attrs[:telefono],
      celular: user_attrs[:celular],
      legajo: user_attrs[:legajo],
      activado: true,
      rol: user_attrs[:rol],
      role: user_attrs[:rol].nombre,
      grupo: user_attrs[:rol].grupo,
      carrera: user_attrs[:carrera]

    )
    user.save!
  end

  puts "✅ Datos sembrados correctamente!"
end
puts "✨ Creando materias..."
materias = [
  {
    codigo: 'AM-ISI-2025',
    nombre: 'Análisis Matemático',
    ciclo_lectivo: 2025,
    descripcion: 'Se dictan clases de Análisis Matemático',
    fecha_inicio: Date.new(2025, 3, 1),
    fecha_fin: Date.new(2025, 11, 30),
    password: 'AM-ISI-2025',
    estado: 'Creada',
    carrera: Carrera.find_by(codigo: 'ISI')
  },
  {
    codigo: 'SO-ISI-2025',
    nombre: 'Sistemas Operativos',
    ciclo_lectivo: 2025,
    descripcion: 'Se dictan clases de Sistemas Operativos',
    fecha_inicio: Date.new(2025, 3, 1),
    fecha_fin: Date.new(2025, 11, 30),
    password: 'SO-ISI-2025',
    estado: 'Creada',
    carrera: Carrera.find_by(codigo: 'ISI')
  }
]

materias.each do |attrs|
  materia = Materia.find_or_initialize_by(codigo: attrs[:codigo])
  materia.assign_attributes(attrs.except(:carrera))
  materia.carrera = attrs[:carrera]
  materia.save!
end

puts "✨ Creando estados de materias..."
Materia.all.each do |materia|
  MateriaEstado.find_or_create_by!(materia: materia, fecha_desde: materia.fecha_inicio, estado: materia.estado)
end

puts "✨ Creando videos..."
videos = [
  { nombre: 'Clase 1 Análisis Matemático', link_video: 'DtXUVxWsydw', duracion: '00:15:49' },
  { nombre: 'Clase 2 Análisis Matemático', link_video: 'Ua9_FIARcs0', duracion: '00:09:53' }
]

videos.each do |video_attrs|
  Video.find_or_create_by!(nombre: video_attrs[:nombre]) do |v|
    v.assign_attributes(video_attrs)
  end
end

puts "✨ Creando documentos..."
Documento.find_or_create_by!(nombre: 'Material de Clase 1') do |doc|
  doc.link_documento = 'doc.zip'
end

Documento.find_or_create_by!(nombre: 'Material de Clase 2') do |doc|
  doc.link_documento = 'doc.zip'
end

puts "✨ Creando clases..."
clases = [
  {
    nombre: 'Clase 1 - Introducción',
    descripcion: 'Primera clase introductoria de Análisis Matemático',
    visible: true,
    materia: Materia.find_by(codigo: 'AM-ISI-2025'),
    documento: Documento.find_by(nombre: 'Material de Clase 1'),
    video: Video.find_by(nombre: 'Clase 1 Análisis Matemático'),
    profesor: Usuario.find_by(email: 'julio.profe@cathedra.com')
  },
  {
    nombre: 'Clase 2 - Derivadas',
    descripcion: 'Segunda clase sobre el cálculo de derivadas',
    visible: true,
    materia: Materia.find_by(codigo: 'AM-ISI-2025'),
    documento: Documento.find_by(nombre: 'Material de Clase 2'),
    video: Video.find_by(nombre: 'Clase 2 Análisis Matemático'),
    profesor: Usuario.find_by(email: 'esteban.rey@cathedra.com')
  }
]

clases.each do |clase_attrs|
  Clase.find_or_create_by!(nombre: clase_attrs[:nombre]) do |c|
    c.assign_attributes(
      descripcion: clase_attrs[:descripcion],
      visible: clase_attrs[:visible],
      materia: clase_attrs[:materia],
      documento: clase_attrs[:documento],
      video: clase_attrs[:video],
      profesor: clase_attrs[:profesor],
      pizarra: true
    )
  end
end

puts "✨ Inscribiendo usuarios a materias..."
Materia.all.each do |materia|
  Registro.find_or_create_by!(materia: materia, usuario: Usuario.find_by(email: 'julio.profe@cathedra.com'), fecha_inicio: Date.today)
  Registro.find_or_create_by!(materia: materia, usuario: Usuario.find_by(email: 'esteban.rey@cathedra.com'), fecha_inicio: Date.today)
  Registro.find_or_create_by!(materia: materia, usuario: Usuario.find_by(email: 'marta.arana@cathedra.com'), fecha_inicio: Date.today)
  Registro.find_or_create_by!(materia: materia, usuario: Usuario.find_by(email: 'leonel.misse@cathedra.com'), fecha_inicio: Date.today)
end

puts "✨ Creando consultas..."
Consulta.find_or_create_by!(
  clase: Clase.first,
  alumno: Usuario.find_by(email: 'marta.arana@cathedra.com'),
  profesor: Usuario.find_by(email: 'julio.profe@cathedra.com'),
  texto_consulta: '¿Podrías explicar nuevamente la derivada?',
  fecha_consulta: DateTime.now - 2.days,
  vista_consulta: DateTime.now - 1.days,
  texto_respuesta: 'Claro, la derivada representa la pendiente de la recta tangente.',
  fecha_respuesta: DateTime.now - 1.days,
  vista_respuesta: nil,
  posicion_video: '00:01:25',
  aclaracion: false
)

puts "✅ Base de datos inicializada correctamente 🚀"
