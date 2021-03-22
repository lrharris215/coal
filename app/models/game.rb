class Game < ApplicationRecord

    validates :title, :price, :publisher, :developer, :release_date, presence: true;

    has_many :game_images

    has_many :purchases,
    foreign_key: :gameId,
    class_name: :Purchase

    has_many :buyers,
    through: :purchases,
    source: :buyer
end
