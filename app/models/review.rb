class Review < ApplicationRecord
    validates :author_id, :game_id, presence: true
     validates :author_id, uniqueness: {scope: :game_id}

     belongs_to: game,
     foreign_key: :game_id,
     class_name: :Game
end
