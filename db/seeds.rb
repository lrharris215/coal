# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Game.delete_all
User.delete_all
ActiveRecord::Base.connection.reset_pk_sequence!('users')
ActiveRecord::Base.connection.reset_pk_sequence!('games')

User.create({
    username: "Guest",
    email: "guest@guest.com",
    password: "password"
})

User.create({
    username: "Woofs",
    email: "woofs@woofs.com",
    password: "password"
})

User.create({
    username: "Brian",
    email: "brian@brian.com",
    password: "password"
})

#date is (YYYY, MM, DD)
Game.create({
    title: "Stardew Valley",
    publisher: "ConcernedApe",
    developer: "ConcernedApe",
    release_date: Date.new(2016, 02, 26),
    price: 1499,
    description: "You've inherited your grandfather's old farm plot in Stardew Valley. Armed with hand-me-down tools and a few coins, you set out to begin your new life. Can you learn to live off the land and turn these overgrown fields into a thriving home?"

})



