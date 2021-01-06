class CreateDesigners < ActiveRecord::Migration[6.0]
  def change
    create_table :designers do |t|
      t.string :name
      t.integer :price
      t.boolean :leather_textile
      t.integer :category_id
      t.timestamps
    end
  end
end
