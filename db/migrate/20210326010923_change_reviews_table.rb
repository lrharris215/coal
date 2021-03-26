class ChangeReviewsTable < ActiveRecord::Migration[5.2]
  def change
    remove_column :reviews, :title
    add_column :reviews, :recommended, :boolean, default: true
  end
end
