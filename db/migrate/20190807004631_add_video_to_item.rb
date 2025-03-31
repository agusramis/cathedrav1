class AddVideoToItem < ActiveRecord::Migration[5.2]
  def change
    add_reference :item, :video, foreign_key: true
  end
end
