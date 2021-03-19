json.partial! 'game', game: @game 

@game.game_images.each do |image|
        json.gameImages do
            json.set! image.id do
                json.extract! image, :id, :img_type, :img_url
            end
        end
end
