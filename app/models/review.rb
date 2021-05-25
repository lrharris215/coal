class Review < ApplicationRecord
    validates :author_id, :game_id, presence: true
    validates :author_id, uniqueness: {scope: :game_id}
    validate :doesAuthorOwnGame?

     belongs_to :game,
     foreign_key: :game_id,
     class_name: :Game

     belongs_to :author,
     foreign_key: :author_id,
     class_name: :User
     
    
     def doesAuthorOwnGame?
        if !self.author.games.include?(self.game)
            errors.add(:game_id, "You must own the game to leave a review")
        end

     end

end
