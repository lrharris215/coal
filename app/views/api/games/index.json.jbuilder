@games.each do |game|
    json.set! game.id do
        json.partial! 'game', game: game

        game.game_images.where(img_type: "title-card").each do |image|
            json.gameImage do 
                json.set! image.id do
                    json.extract! image, :id, :img_url, :img_type
                end
            end
        end
    end
end