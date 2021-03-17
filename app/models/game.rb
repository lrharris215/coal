class Game < ApplicationRecord

    validates :title, :price, :publisher, :developer, :release_date, presence: true;
    # will belong to user after i make the shopping cart/library
    #belongs_to :user

    #has many game images
    
end
