class ChangeGamesReleaseDateToDateType < ActiveRecord::Migration[5.2]
  def change
    remove_column :games, :release_date
  end
end
