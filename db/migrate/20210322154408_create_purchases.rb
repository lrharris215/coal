class CreatePurchases < ActiveRecord::Migration[5.2]
  def change
    create_table :purchases do |t|
      t.integer :gameId, null: false
      t.integer :buyerId, null: false

      t.timestamps
    end
    add_index :purchases, :gameId
    add_index :purchases, :buyerId
    add_index :purchases, [:buyerId, :gameId], unique: true
  end
end
