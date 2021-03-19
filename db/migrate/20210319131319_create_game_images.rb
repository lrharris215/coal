class CreateGameImages < ActiveRecord::Migration[5.2]
  def change
    create_table :game_images do |t|
      t.integer :game_id, null: false
      t.string :img_url, null: false
      t.string :img_type, null: false

      t.timestamps
    end
    add_index :game_images, :game_id
  end
end
