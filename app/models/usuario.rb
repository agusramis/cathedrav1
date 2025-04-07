class Usuario < ApplicationRecord
  self.table_name = "usuario"
  include Resetable
  # Carrierwave
  mount_base64_uploader :link_imagen, ImagenUploader
  # autenticacion
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  # validaciones
  validates :nombre_usuario, presence: true, uniqueness: true
  # validate :setear_nombreusuario
  validate :verificar_password
  validate :validar_positivo
  validates :telefono, length: { maximum: 20 }
  validates :celular, length: { maximum: 20 }
  # validates :encrypted_password, presence: true, format: { with: /\A(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}\z/, message: 'Al menos 8 caracteres, una letra mayúscula y un numero.' }
  # validates :encrypted_password, presence: true, format: { with: /\A(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}\z/,
  #                                                          message: 'Al menos 8 caracteres, una letra mayúscula y un numero.' }
  validates :email, presence: true, uniqueness: true, format: { with: /\A([\w+\-].?)+@[a-z\d\-]+(\.[a-z]+)*\.[a-z]+\z/i, message: 'debe ingresar un email con formato válido' }, length: { maximum: 150 }
  validates :legajo, presence: true, uniqueness: true, length: { maximum: 8 }
  validates :dni, presence: true, uniqueness: true, length: { maximum: 8 }
  validates :nombre, presence: true, length: { maximum: 80 }, format: { with: /\A[a-zA-ZÁÉÍÓúáéíóú]+(([',. -][a-zA-ZÁÉÍÓúáéíóú])?[a-zA-ZÁÉÍÓúáéíóú]*)*\z/i, message: 'solo se permiten letras mayusculas y minúsculas, controlar que no sobren espacios' }
  validates :apellido, presence: true, length: { maximum: 80 }, format: { with: /\A[a-zA-ZÁÉÍÓúáéíóú]+(([',. -][a-zA-ZÁÉÍÓúáéíóú])?[a-zA-ZÁÉÍÓúáéíóú]*)*\z/i, message: 'solo se permiten letras mayusculas y minúsculas, controlar que no sobren espacios' }
  validates :fecha_nacimiento, presence: true
  validates :nacionalidad, presence: true, length: { maximum: 100 }
  validates :direccion, length: { maximum: 150 }
  validates :localidad, length: { maximum: 90 }
  validates :provincia, length: { maximum: 90 }
  validates :pais, length: { maximum: 90 }
  validate :validar_edad
  validates :descripcion, length: { maximum: 250 }
  validates :sexo, presence: { message: 'debe seleccionar una opción' }
  validates :rol_id, presence: { message: 'debe seleccionar una opción' }
  # validates :carrera_id, presence: { if: :role == 'Alumno', message: 'Debe seleccionar una opción' }
  validates :carrera_id, presence: { message: 'debe seleccionar una opción' }, if: lambda { |o| o.grupo == 'Alumnos' }
  # atributos
  # enum role: { Alumno: 'alumno', Administrador: 'admin', Profesor: 'profesor' }
  # relaciones
  has_many :consultas_profesor, class_name: 'Consulta', foreign_key: 'profesor_id'
  has_many :consultas_alumno, class_name: 'Consulta', foreign_key: 'alumno_id'
  has_many :registros
  has_many :materias, through: :registros
  has_many :clases_profesor, class_name: 'Clase', foreign_key: 'profesor_id'
  belongs_to :carrera, optional: true
  belongs_to :rol
  # metodos publicos
  def baja
    # Da de baja los registros actuales del usuario
    registros.each do |registro|
      registro.update_attribute(:fecha_fin, Time.now)
    end
    update_attribute(:fecha_baja, Time.now)
  end

  def restaurar
    update_attribute(:fecha_baja, nil)
  end

  def notificaciones
    @notificaciones = []
    if role == 'Alumno'
      consultas_alumno.each do |consulta|
        @notificaciones << consulta if consulta.fecha_respuesta.present? and consulta.vista_respuesta.nil?
      end
    end
    if role == 'Profesor'
      @clases_activas = []
      @notificaciones = []
      # buscar todas las materias actuales del profesor (materias en las cuales el registro se encuentra activo)
      @materiasact = materias.where(estado: 'Creada').references(:registros).where(registro: { fecha_fin: nil })
      # buscar todas las consultas no vistas que pertenezcan a las materias activas
      @notificaciones = Consulta.where(vista_consulta: nil).joins(:clase).where(clase: { materia: @materiasact })
    end
    return @notificaciones
  end

  def tiene_materias_activas
    materiasact = materias.where(estado: 'Creada').references(:registros).where(registro: { fecha_fin: nil })
    if materiasact.count == 0
      return false
    else
      return true
    end
  end

  def tiene_registro_activo(materia_id)
    if materias.where(estado: 'Creada', id: materia_id).references(:registros).where(registro: { fecha_fin: nil }).count > 0
      true
    else
      false
    end
  end

  def materias_activas_profesor
    materias.where(estado: 'Creada').references(:registros).where(registro: { fecha_fin: nil })
  end

  def materias_archivadas_profesor
    materias.where(estado: 'Archivada').references(:registros).where(registro: { fecha_fin: nil })
  end

  def materias_activas_alumno
    materias.where(estado: 'Creada').references(:registros).where(registro: { fecha_fin: nil })
  end

  def materias_profesor
    materias.references(:registros).where(registro: { fecha_fin: nil })
  end

  def authenticate(password)
    valid_password?(password)
  end

  def administradores?
    rol.grupo == 'Administradores' ? true : false
  end

  def alumnos?
    rol.grupo == 'Alumnos' ? true : false
  end

  def profesores?
    rol.grupo == 'Profesores' ? true : false
  end

  # metodos privados

  private

  # validaciones custom
  def validar_edad
    unless fecha_nacimiento.nil?
      edad_alumno = Parametro.where(nombre: 'EdadAlumnos').first.valor.to_i
      edad_personal = Parametro.where(nombre: 'EdadPersonal').first.valor.to_i
      if :grupo == 'Alumnos'
        if fecha_nacimiento >= Time.now.ago(edad_alumno.years)
          errors.add :fecha_nacimiento, 'Debe tener al menos ' + edad_alumno.to_s + ' años.'
        end
      else
        if fecha_nacimiento >= Time.now.ago(edad_personal.years)
          errors.add :fecha_nacimiento, 'Debe tener al menos ' + edad_personal.to_s + ' años.'
        end
      end
    end
  end

  def validar_positivo
    unless telefono == ''
      unless telefono.to_s =~ /^[+]?\d+$/
        errors.add(:telefono, 'no es un número valido')
      end
    end
    unless celular == ''
      unless celular.to_s =~ /^[+]?\d+$/
        errors.add(:celular, 'no es un número valido')
      end
    end
    unless dni.to_s =~ /^[+]?\d+$/
      errors.add(:dni, 'no es un número valido')
    end
    unless legajo.to_s =~ /^[+]?\d+$/
      errors.add(:legajo, 'no es un número valido')
    end
  end

  # def setear_nombreusuario
  #   if email.nil?
  #     errors.add :usuario, 'no puede estar en blanco'
  #   end
  # end

  def verificar_password
    return if password.blank? || password =~ /\A(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}\z/
    errors.add :password, 'debe tener al menos una letra mayúscula y un número.'
  end
end
