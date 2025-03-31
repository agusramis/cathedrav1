class RemoveNumeroFromItem < ActiveRecord::Migration[5.2]
  def change
    remove_column :item, :numero, :integer
  end
end
