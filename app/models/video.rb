class Video < ApplicationRecord
  include Resetable
  # validaciones
  validates :link_video, presence: true
  has_many :clases
  has_many :items
end
