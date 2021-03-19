class GameImage < ApplicationRecord
    validates :game_id, :img_type, :img_url, presence: true;
    validates :img_type, inclusion: {in: ["screenshot", "title-card"]}
end
