class Enlace < ApplicationRecord
  include Resetable
  validates :nombre, presence: true, length: { maximum: 80 }
  validates :link_enlace, presence: true, length: { maximum: 250 }
  belongs_to :clase
end
