class Materia < ApplicationRecord
  include Resetable
  # validaciones
  validates :codigo, presence: true, uniqueness: true, length: { maximum: 16 }
  validates :nombre, presence: true, length: { maximum: 150 }
  validates :descripcion, length: { maximum: 250 }
  validates :ciclo_lectivo, presence: true, numericality: { greater_than_or_equal_to: Time.now.year - 1 }
  validates :fecha_inicio, presence: true
  validates :fecha_fin, presence: true
  validate :fechainicio_nomenor_anioactual?
  validates :carrera_id, presence: { message: 'debe seleccionar una opción' }
  validate :fechafin_despues_fechainicio?
  # validate :fechfin_mayor_fechaactual?
  validates :password, presence: true, length: { minimum: 8, maximum: 16 }
  # atributos
  enum estado: { Creada: 'creada', Archivada: 'archivada', Baja: 'baja' }
  # relaciones
  has_many :materia_estados
  belongs_to :carrera
  has_many :clases
  has_many :registros
  has_many :usuarios, through: :registros

  # metodos publicos
  def archivar
    update_attribute(:estado, 'Archivada')
    update_attribute(:fecha_baja, Time.now)
    materia_estados.each do |materia_estado_actual|
      next unless materia_estado_actual.fecha_hasta.nil?
      materia_estado_actual.update_attribute(:fecha_hasta, Time.now)
      MateriaEstado.create!([
                              {
                                fecha_desde: Time.now,
                                fecha_hasta: nil,
                                materia_id: self.id,
                                estado: 'Archivada'
                              }
                            ])
      break
    end
    registros.each do |registro|
      if registro.usuario.rol.grupo == 'Alumnos'
        registro.update_attribute(:fecha_fin, Time.now)
      end
    end
  end

  def baja
    update_attribute(:estado, 'Baja')
    materia_estados.each do |materia_estado_actual|
      puts materia_estado_actual.estado
      next unless materia_estado_actual.fecha_hasta.nil?

      materia_estado_actual.update_attribute(:fecha_hasta, Time.now)
      MateriaEstado.create!([
                              {
                                fecha_desde: Time.now,
                                fecha_hasta: nil,
                                materia_id: self.id,
                                estado: 'Baja'
                              }
                            ])
      break
    end
    registros.each do |registro|
      registro.update_attribute(:fecha_fin, Time.now)
    end
    update_attribute(:fecha_baja, Time.now)
  end

  def restaurar
    update_attribute(:estado, 'Creada')
    materia_estados.each do |materia_estado_actual|
      puts materia_estado_actual.estado
      next unless materia_estado_actual.fecha_hasta.nil?

      materia_estado_actual.update_attribute(:fecha_hasta, Time.now)
      MateriaEstado.create!([
                              {
                                fecha_desde: Time.now,
                                fecha_hasta: nil,
                                materia_id: self.id,
                                estado: 'Creada'
                              }
                            ])
      break
    end
    update_attribute(:fecha_baja, nil)
  end

  # Busca todos los profesores de la materia que estan registrados actualmente
  def profesores
    profesores_materia = usuarios.references(:registros).where(registro: { fecha_fin: nil }).where(grupo: 'Profesores')
  end

  def alumnos
    alumnos_materia = usuarios.references(:registros).where(registro: { fecha_fin: nil }).where(grupo: 'Alumnos')
  end

  # metodos privados

  private

  # validaciones custom
  def fechfin_mayor_fechaactual?
    if fecha_fin.present? && (fecha_fin < Time.now)
      errors.add :fecha_fin, 'la fecha de fin de cursado debe ser mayor a la fecha actual'
    end
  end


  def fechafin_despues_fechainicio?
    # if fecha_inicio.nil?
    #   errors.add :fecha_inicio, 'Ingresar fecha inicio.'
    # end
    # if fecha_fin.nil?
    #   errors.add :fecha_fin, 'Ingresar fecha fin.'
    # end
    if fecha_fin.present? && fecha_inicio.present? && (fecha_fin < fecha_inicio)
      errors.add :fecha_fin, 'la fecha de fin de cursado debe ser mayor a la fecha de inicio'
    end
  end

  def fechainicio_nomenor_anioactual?
    if fecha_inicio.present? && (fecha_inicio.year < (Time.now.year - 1))
      errors.add :fecha_fin, 'la fecha de inicio de cursado debe pertenecer al año ' + (Time.now.year - 1).to_s + ' o superior'
    end
  end
end
