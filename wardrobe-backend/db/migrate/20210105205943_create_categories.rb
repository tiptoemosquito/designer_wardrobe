class CreateCategories < ActiveRecord::Migration[6.0]
  def change
    create_table :categories do |t|
      t.string :type
      t.integer :price
      t.integer :designer_id
      t.string :image
      t.string :textile

      t.timestamps
    end
  end
end
