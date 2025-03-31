class Documento < ApplicationRecord
  include Resetable
  # Carrierwave
  mount_base64_uploader :link_documento, DocumentoUploader
  has_many :clases
end
