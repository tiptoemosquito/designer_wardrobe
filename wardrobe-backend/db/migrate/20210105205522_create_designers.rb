class CreateDesigners < ActiveRecord::Migration[6.0]
  def change
    create_table :designers do |t|
      t.string :type
      t.integer :price
      t.string :image
      t.integer :quantity
      t.integer :category_id
      t.timestamps
    end
  end
end
