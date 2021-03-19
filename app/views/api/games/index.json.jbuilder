@games.each do |game|
    json.set! game.id do
        json.partial! 'game', game: game

        game.game_images.each do |image|
            json.gameImages do 
                json.set! image.id do
                    json.extract! image, :id, :img_url, :img_type
                end
            end
        end
    end
end