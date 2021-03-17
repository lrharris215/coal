class CreateGames < ActiveRecord::Migration[5.2]
  def change
    create_table :games do |t|
      t.string :title, null: false
      t.text :description
      t.string :developer, null: false
      t.string :publisher, null: false
      t.integer :price, null: false
      t.string :release_date, null: false

      t.timestamps
    end
  end
end
