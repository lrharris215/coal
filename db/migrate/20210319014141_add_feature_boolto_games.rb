class AddFeatureBooltoGames < ActiveRecord::Migration[5.2]
  def change
    add_column :games, :featured, :boolean, default: false
    add_index :games, :featured
  end
end
