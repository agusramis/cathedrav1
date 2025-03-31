class Item < ApplicationRecord
  include Resetable
  validates :titulo, presence: true, length: { maximum: 80 }
  validates :posicion_video, presence: true
  belongs_to :video
end
