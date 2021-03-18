class ReaddReleaseDatetoGamesTable < ActiveRecord::Migration[5.2]
  def change
    add_column :games, :release_date, :date, null: false
  end
end
