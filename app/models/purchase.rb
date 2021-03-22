class Purchase < ApplicationRecord
    validates :buyerId, :gameId, presence: true
    validates [:buyerId, :gameId], uniqueness: true

    belongs_to :buyer,
    foreign_key: :buyerId,
    class_name: :User

    belongs_to :game,
    foreign_key: :gameId,
    class_name: :Game
end
