json.partial! 'api/users/user', user: @user
json.ownedGames(@user.games) do |game|
    json.extract! game, :id, :title
    json.titleCard game.game_images.where(img_type: "title-card")
end