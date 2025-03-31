# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# frozen_string_literal: true

# cathedra.software@gmail.com
# { Alumno: 'alumno', Administrador: 'admin', Profesor: 'profesor' }
Rol.create!([
              {
                nombre: 'Administrador',
                descripcion: 'Gestiona la plataforma',
                permisos: {
                  registros: { index: 'true', asignar_profesor: 'true', asignar_alumno: 'true', destroy: 'true' },
                  usuarios: { index: 'true', new: 'true', show: 'true', edit: 'true', destroy: 'true' },
                  roles: { index: 'true', new: 'true', edit: 'true', destroy: 'true', permisos: 'true', actualizarpermisos: 'true' },
                  carreras: { index: 'true', new: 'true', edit: 'true', destroy: 'true' },
                  materias: { index: 'true', new: 'true', show: 'true', edit: 'true', destroy: 'true' },
                  clases: { index: 'true', show: 'true', edit: 'true', destroy: 'true', descargarpdf: 'true' },
                  estados: { index: 'true' },
                  parametros: { index: 'true', edit: 'true' },
                  backups: { index: 'true', resetear: 'true', cargar: 'true', descargar: 'true' }
                },
                grupo: 'Administradores',
                fecha_baja: nil
              },
              {
                nombre: 'Profesor',
                descripcion: 'Realiza el dictado de las clases',
                permisos: {
                  materias: { listar_participantes: 'true', mostrar_participante: 'true' },
                  clases: { new: 'true', setearvisible: 'true', edit: 'true', descargarpdf: 'true', borrar: 'true' },
                  consultas: { responder: 'true', aclarar: 'true' },
                  reportes: { reportes_profesor: 'true' },
                  api: { publicarclase: 'true' }
                },
                grupo: 'Profesores',
                fecha_baja: nil
              },
              {
                nombre: 'Alumno',
                descripcion: 'Estudiantes que utilizan la plataforma',
                permisos: {
                  materias: { listar_participantes: 'true' },
                  clases: { descargarpdf: 'true' },
                  consultas: { realizar: 'true' },
                  registros: { inscribir_alumno: 'true', desinscribir: 'true' }
                },
                grupo: 'Alumnos',
                fecha_baja: nil
              }
            ])

# Con acceso indiferente

administrador = Rol.find(1)
administrador.permisos = administrador.permisos.with_indifferent_access
administrador.save!

profesor = Rol.find(2)
profesor.permisos = profesor.permisos.with_indifferent_access
profesor.save!

alumno = Rol.find(3)
alumno.permisos = alumno.permisos.with_indifferent_access
alumno.save!

Parametro.create!([
                    {
                      nombre: 'IDClient',
                      valor: '916191736167-7kiskuojm9l0ekfjmqjugcs8s90fvnp8.apps.googleusercontent.com',
                      descripcion: 'ID del cliente API YouTube',
                      fecha_baja: nil
                    },
                    {
                      nombre: 'SecretClient',
                      descripcion: 'Secret del cliente API YouTube',
                      valor: 'i4Jsmv5EOG_-IxyZGxerEvwh',
                      fecha_baja: nil
                    },
                    {
                      nombre: 'RefreshToken',
                      descripcion: 'RefreshToken del cliente API YouTube',
                      valor: '1//04Olb32z17x63CgYIARAAGAQSNwF-L9IrjDWLbcnhiosrcdTzGvRT4y_09UwzSJuTjX-nemTLEWtrmEkp4Y3dIpGhfVkDav5rnOo',
                      fecha_baja: nil
                    },
                    {
                      nombre: 'EdadAlumnos',
                      descripcion: 'Edad mínima que deben tener los alumnos',
                      valor: '18',
                      fecha_baja: nil
                    },
                    {
                      nombre: 'EdadPersonal',
                      descripcion: 'Edad mínima que deben tener los profesores/administradores.',
                      valor: '18',
                      fecha_baja: nil
                    }
                  ])

# cathedra.soft@gmail.com
# Parametro.create!([
#                     {
#                       nombre: 'IDClient',
#                       valor: '466135542093-natonuki5u9gscq78bdki84qkcmj69hg.apps.googleusercontent.com',
#                       fecha_baja: nil
#                     },
#                     {
#                       nombre: 'SecretClient',
#                       valor: 'aZWl4q0_TXo60AgnBoIZT4Ke',
#                       fecha_baja: nil
#                     },
#                     {
#                       nombre: 'RefreshToken',
#                       valor: '1//04pq70wIGZ3iyCgYIARAAGAQSNwF-L9IrKerZQ-97zW-O0K9xfofpv9oq0r83A1i-OfaUyDTx3cOiELwISxGVvS8rlccA3syVLeM',
#                       fecha_baja: nil
#                     }
#                   ])

Carrera.create!([
                  {
                    codigo: 'ISI',
                    nombre: 'Ingeniería en Sistemas de Información',
                    descripcion: 'Carrera de Informatica',
                    fecha_baja: nil
                  },
                  {
                    codigo: 'IQ',
                    nombre: 'Ingeniería Química',
                    descripcion: 'Carrera de Química',
                    fecha_baja: nil
                  },
                  {
                    codigo: 'IM',
                    nombre: 'Ingeniería Mecánica',
                    descripcion: 'Carrera de Mecánica',
                    fecha_baja: nil
                  }
                ])

Usuario.create!([
                  # Administrador
                  { email: 'ricardo.rojas@cathedra.com',
                    password: 'Class321',
                    password_confirmation: 'Class321',
                    reset_password_token: nil,
                    reset_password_sent_at: nil,
                    remember_created_at: nil,
                    nombre_usuario: 'ricardo.rojas@cathedra.com',
                    legajo: '00010001',
                    nombre: 'Ricardo',
                    apellido: 'Rojas',
                    telefono: '',
                    celular: '',
                    dni: 33006006,
                    descripcion: nil,
                    fecha_nacimiento: Date.new(1988, 1, 17),
                    nacionalidad: 'Argentino',
                    sexo: 'Masculino',
                    link_imagen: nil,
                    direccion: 'Avenida Siempre Buena 133',
                    localidad: 'La Colonia',
                    provincia: 'Mendoza',
                    pais: 'Argentina',
                    activado: true,
                    # role: 'Administrador',
                    rol: Rol.find_by(id: 1),
                    carrera: nil,
                    role: Rol.find_by(id: 1).nombre,
                    grupo: Rol.find_by(id: 1).grupo },
                  # Profesor
                  { email: 'julio.profe@cathedra.com',
                    password: 'Class321',
                    password_confirmation: 'Class321',
                    reset_password_token: nil,
                    reset_password_sent_at: nil,
                    remember_created_at: nil,
                    nombre_usuario: 'julio.profe@cathedra.com',
                    legajo: '00010002',
                    nombre: 'Julio',
                    apellido: 'Profe',
                    telefono: '',
                    celular: '',
                    dni: 11009009,
                    descripcion: nil,
                    fecha_nacimiento: Date.new(1947, 1, 20),
                    nacionalidad: 'Argentino',
                    sexo: 'Masculino',
                    link_imagen: nil,
                    direccion: 'Barrio Almafuerte M E C 12',
                    localidad: 'Ciudad',
                    provincia: 'Mendoza',
                    pais: 'Argentina',
                    activado: true,
                    # role: 'Profesor',
                    rol: Rol.find_by(id: 2),
                    carrera: nil,
                    role: Rol.find_by(id: 2).nombre,
                    grupo: Rol.find_by(id: 2).grupo },
                  { email: 'esteban.rey@cathedra.com',
                    password: 'Class321',
                    password_confirmation: 'Class321',
                    reset_password_token: nil,
                    reset_password_sent_at: nil,
                    remember_created_at: nil,
                    nombre_usuario: 'esteban.rey@cathedra.com',
                    legajo: '00010003',
                    nombre: 'Esteban',
                    apellido: 'Rey',
                    telefono: '',
                    celular: '',
                    dni: 13010010,
                    descripcion: nil,
                    fecha_nacimiento: Date.new(1947, 8, 25),
                    nacionalidad: 'Sueco',
                    sexo: 'Masculino',
                    link_imagen: nil,
                    direccion: 'Barrio Cotorra M A C 2',
                    localidad: 'Ciudad',
                    provincia: 'Mendoza',
                    pais: 'Argentina',
                    activado: true,
                    # role: 'Profesor',
                    rol: Rol.find_by(id: 2),
                    carrera: nil,
                    role: Rol.find_by(id: 2).nombre,
                    grupo: Rol.find_by(id: 2).grupo },
                  # Alumno
                  { email: 'marta.arana@cathedra.com',
                    password: 'Class321',
                    password_confirmation: 'Class321',
                    reset_password_token: nil,
                    reset_password_sent_at: nil,
                    remember_created_at: nil,
                    nombre_usuario: 'marta.arana@cathedra.com',
                    legajo: '00010004',
                    nombre: 'Marta',
                    apellido: 'Arana',
                    telefono: '',
                    celular: '',
                    dni: 41705008,
                    descripcion: nil,
                    fecha_nacimiento: Date.new(1995, 2, 20),
                    nacionalidad: 'Argentino',
                    sexo: 'Femenino',
                    link_imagen: nil,
                    direccion: 'Barrio Catupecu Machu M B C 1',
                    localidad: 'Junin',
                    provincia: 'Mendoza',
                    pais: 'Argentina',
                    activado: true,
                    # role: 'Alumno',
                    rol: Rol.find_by(id: 3),
                    carrera: Carrera.find_by(id: 1),
                    role: Rol.find_by(id: 3).nombre,
                    grupo: Rol.find_by(id: 3).grupo },
                  { email: 'leonel.misse@cathedra.com',
                    password: 'Class321',
                    password_confirmation: 'Class321',
                    reset_password_token: nil,
                    reset_password_sent_at: nil,
                    remember_created_at: nil,
                    nombre_usuario: 'leonel.misse@cathedra.com',
                    legajo: '00010005',
                    nombre: 'Leonel',
                    apellido: 'Misse',
                    telefono: '',
                    celular: '',
                    dni: 40707709,
                    descripcion: nil,
                    fecha_nacimiento: Date.new(1995, 6, 25),
                    nacionalidad: 'Argentino',
                    sexo: 'Masculino',
                    link_imagen: nil,
                    direccion: 'Barrio Catupecu Machu M B C 2',
                    localidad: 'Junin',
                    provincia: 'Mendoza',
                    pais: 'Argentina',
                    activado: true,
                    # role: 'Alumno',
                    rol: Rol.find_by(id: 3),
                    carrera: Carrera.find_by(id: 1),
                    role: Rol.find_by(id: 3).nombre,
                    grupo: Rol.find_by(id: 3).grupo }
                ])

Video.create!([
                # Video Clase 1 Materia 1
                { nombre: 'Clase 2019-08-20',
                  link_video: 'DtXUVxWsydw',
                  duracion: '00:15:49' },
                # Video Clase 2 Materia 1
                { nombre: 'Clase 2019-08-23',
                  link_video: 'Ua9_FIARcs0',
                  duracion: '00:09:53' }
              ])

Item.create!([
               # Indice Clase 1 Materia 1
               { titulo: 'Describiendo el problema.',
                 posicion_video: '00:00:05',
                 video_id: 1 },
               { titulo: 'Definiendo el triángulo para calcular la incógnita.',
                 posicion_video: '00:00:58',
                 video_id: 1 },
               # Indice Clase 1 Materia 1
               { titulo: 'Inversas de las operaciones matemáticas.',
                 posicion_video: '00:00:18',
                 video_id: 2 },
               { titulo: 'Cálculo manual de la raíz cuadrada.',
                 posicion_video: '00:02:27',
                 video_id: 2 }
             ])

Documento.create!([
                    # Documento Clase 1 Materia 1
                    { nombre: 'Clase 2019-08-20',
                      link_documento: open('public/doc.zip') },
                    # Documento Clase 2 Materia 1
                    { nombre: 'Clase 2019-08-23',
                      link_documento: open('public/doc.zip') }
                  ])

# # Documento Clase 1 Materia
# Documento.new(nombre: 'Clase 2019-08-20',
#               link_documento: 'doc.zip').save(validate: false)
# # Documento Clase 2 Materia 1
# Documento.new(nombre: 'Clase 2019-08-23',
#               link_documento: 'doc.zip').save(validate: false)

Materia.create!([
                  {
                    codigo: 'AM-ISI-2019',
                    nombre: 'Análisis Matemático',
                    ciclo_lectivo: 2019,
                    descripcion: 'Se dictan clases de Análisis Matemático',
                    fecha_inicio: Date.new(2019, 8, 15),
                    fecha_fin: Date.new(2019, 11, 25),
                    autoarchivar: false,
                    password: 'AM-ISI-2019',
                    fecha_baja: nil,
                    estado: 'Creada',
                    carrera_id: 1
                  },
                  {
                    codigo: 'SO-ISI-2019',
                    nombre: 'Sistemas Operativos',
                    ciclo_lectivo: 2019,
                    descripcion: 'Se dictan clases de Sistemas Operativos',
                    fecha_inicio: Date.new(2019, 8, 15),
                    fecha_fin: Date.new(2019, 11, 25),
                    autoarchivar: false,
                    password: 'SO-ISI-2019',
                    fecha_baja: nil,
                    estado: 'Creada',
                    carrera_id: 1
                  },
                  {
                    codigo: 'QO-IQ-2019',
                    nombre: 'Química Orgánica',
                    ciclo_lectivo: 2019,
                    descripcion: 'Se dictan clases de Química Orgánica',
                    fecha_inicio: Date.new(2019, 8, 15),
                    fecha_fin: Date.new(2019, 11, 25),
                    autoarchivar: false,
                    password: 'QO-IQ-2019',
                    fecha_baja: nil,
                    estado: 'Creada',
                    carrera_id: 2
                  },
                  {
                    codigo: 'CDM-IM-2019',
                    nombre: 'Conocimiento de Materiales',
                    ciclo_lectivo: 2019,
                    descripcion: 'Se dictan clases de Conocimiento de Materiales',
                    fecha_inicio: Date.new(2019, 8, 15),
                    fecha_fin: Date.new(2019, 11, 25),
                    autoarchivar: false,
                    password: 'CDM-IM-2019',
                    fecha_baja: nil,
                    estado: 'Creada',
                    carrera_id: 3
                  }
                ])

MateriaEstado.create!([
                        {
                          # fecha_desde: DateTime.now,
                          fecha_desde: Date.new(2019, 8, 13),
                          fecha_hasta: nil,
                          materia_id: 1,
                          estado: 'Creada'
                        },
                        {
                          fecha_desde: Date.new(2019, 8, 13),
                          fecha_hasta: nil,
                          materia_id: 2,
                          estado: 'Creada'
                        },
                        {
                          fecha_desde: Date.new(2019, 8, 13),
                          fecha_hasta: nil,
                          materia_id: 3,
                          estado: 'Creada'
                        },
                        {
                          fecha_desde: Date.new(2019, 8, 13),
                          fecha_hasta: nil,
                          materia_id: 4,
                          estado: 'Creada'
                        }
                      ])

Clase.create!([
                # Clases Materia 1
                {
                  nombre: 'Clase 1 - Trigonometria',
                  descripcion: 'En esta clase resolvemos un problema de trigonometria utilizando SOHCAHTOA',
                  visible: true,
                  fecha_baja: nil,
                  materia_id: 1,
                  documento_id: 1,
                  video_id: 1,
                  profesor_id: 2,
                  pizarra: true
                },
                {
                  nombre: 'Clase 2 - Cálculo de Raices',
                  descripcion: 'En esta clase vemos como calcular la raíz de un número de forma manual',
                  visible: true,
                  fecha_baja: nil,
                  materia_id: 1,
                  documento_id: 2,
                  video_id: 2,
                  profesor_id: 3,
                  pizarra: true
                }
              # Clases Materia 2
              ])

Enlace.create!([
                 # Enlaces Clase 1 Materia 1
                 { nombre: 'Enlace 1',
                   link_enlace: 'http://fcaglp.unlp.edu.ar/area-docente/Ingreso-2014/Modulos-2014/Modulo_5-TRIGONOMETRIA.pdf',
                   clase_id: 1 },
                 { nombre: 'Enlace 2',
                   link_enlace: 'http://fcaglp.unlp.edu.ar/area-docente/Ingreso-2014/Modulos-2014/Modulo_5-TRIGONOMETRIA.pdf',
                   clase_id: 1 },
                 # Enlaces Clase 2 Materia 1
                 { nombre: 'Enlace 1',
                   link_enlace: 'https://www.cimat.mx/ciencia_para_jovenes/bachillerato/libros/algebra_angel_cap7.pdf',
                   clase_id: 2 },
                 { nombre: 'Enlace 2',
                   link_enlace: 'https://www.cimat.mx/ciencia_para_jovenes/bachillerato/libros/algebra_angel_cap7.pdf',
                   clase_id: 2 }
               ])

Registro.create!([
                   # Inscripcion Profesor1 a MD2019
                   {
                     fecha_inicio: Date.new(2019, 8, 15),
                     fecha_fin: nil,
                     materia_id: 1,
                     usuario_id: 2
                   },
                   # Inscripcion Profesor2 a MD2019
                   {
                     fecha_inicio: Date.new(2019, 8, 15),
                     fecha_fin: nil,
                     materia_id: 1,
                     usuario_id: 3
                   },
                   # Inscripcion Alumno1 a MD2019
                   {
                     fecha_inicio: Date.new(2019, 8, 17),
                     fecha_fin: nil,
                     materia_id: 1,
                     usuario_id: 4
                   },
                   # Inscripcion Alumno2 a MD2019
                   {
                     fecha_inicio: Date.new(2019, 8, 17),
                     fecha_fin: nil,
                     materia_id: 1,
                     usuario_id: 5
                   }
                 ])

Consulta.create!([
                   # Consulta sin responder pero no vista por el profesor
                   {
                     posicion_video: '00:01:25',
                     fecha_consulta: DateTime.new(2019, 8, 20, 9, 24),
                     vista_consulta: DateTime.new(2019, 8, 20, 9, 45),
                     texto_consulta: '¿Por qué 135 grados?',
                     fecha_respuesta: DateTime.new(2019, 8, 20, 9, 48),
                     texto_respuesta: 'Es la suma de los 2 angulos',
                     vista_respuesta: DateTime.new(2019, 8, 20, 9, 55),
                     aclaracion: false,
                     clase_id: 1,
                     alumno_id: 4,
                     profesor_id: 1
                   },
                   # Consulta sin responder y vista por el profesor
                   # {
                   #   posicion_video: '00:06:13',
                   #   fecha_consulta: DateTime.new(2019, 8, 20, 9, 24),
                   #   vista_consulta: DateTime.new(2019, 8, 20, 9, 45),
                   #   texto_consulta: '¿Por qué simplifica los denominadores?',
                   #   fecha_respuesta: nil,
                   #   texto_respuesta: nil,
                   #   vista_respuesta: nil,
                   #   aclaracion: false,
                   #   clase_id: 1,
                   #   alumno_id: 5,
                   #   profesor_id: nil
                   # },
                   # Consulta respondida pero no vista por el alumno
                   {
                     posicion_video: '00:09:07',
                     fecha_consulta: DateTime.new(2019, 8, 20, 9, 38),
                     vista_consulta: DateTime.new(2019, 8, 20, 9, 40),
                     texto_consulta: '¿Qué es el conjugado del denominador?',
                     fecha_respuesta: DateTime.new(2019, 8, 20, 9, 45),
                     texto_respuesta: 'Los conjugados son usados para racionalizar el denominador',
                     vista_respuesta: DateTime.new(2019, 8, 20, 9, 50),
                     aclaracion: false,
                     clase_id: 1,
                     alumno_id: 4,
                     profesor_id: 2
                   },
                   # Consulta respondida y vista por el alumno
                   {
                     posicion_video: '00:00:54',
                     fecha_consulta: DateTime.new(2019, 8, 21, 7, 19),
                     vista_consulta: DateTime.new(2019, 8, 21, 9, 50),
                     texto_consulta: '¿Es necesario utilizar esa calculadora?, tengo una mas vieja.',
                     fecha_respuesta: DateTime.new(2019, 8, 21, 9, 52),
                     texto_respuesta: 'No es necesario, podés usar otra.',
                     vista_respuesta: DateTime.new(2019, 8, 22, 8, 20),
                     aclaracion: false,
                     clase_id: 1,
                     alumno_id: 4,
                     profesor_id: 2
                   },
                   # Aclaracion del profesor
                   {
                     posicion_video: '00:04:55',
                     fecha_consulta: DateTime.new(2019, 8, 22, 8, 20),
                     vista_consulta: DateTime.new(2019, 8, 22, 8, 20),
                     texto_consulta: 'Quise decir que el otro lado está expresado como la resta entre x y 30.',
                     fecha_respuesta: nil,
                     texto_respuesta: nil,
                     vista_respuesta: DateTime.new(2019, 8, 22, 8, 20),
                     aclaracion: true,
                     clase_id: 1,
                     alumno_id: 2,
                     profesor_id: 2
                   }
                 ])


# Model.create!([
#                 {
#
#                 }
#               ])
