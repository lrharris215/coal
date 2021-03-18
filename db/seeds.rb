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
    release_date: Date.parse("2016-02-26"),
    price: 1499,
    description: "You've inherited your grandfather's old farm plot in Stardew Valley. Armed with hand-me-down tools and a few coins, you set out to begin your new life. Can you learn to live off the land and turn these overgrown fields into a thriving home?"

})

Game.create({
    title: "The Elder Scrolls V: Skyrim Special Edition",
    publisher: "Bethesda Softworks",
    developer: "Bethesda Game Studeo",
    release_date: Date.parse("2016-10-27"),
    price: 3999,
    description: "Winner of more than 200 Game of the Year Awards, Skyrim Special Edition brings the epic fantasy to life in stunning detail. The Special Edition includes the critically acclaimed game and add-ons with all-new features like remastered art and effects, volumetric god rays, dynamic depth of field, screen-space reflections, and more. Skyrim Special Edition also brings the full power of mods to the PC and consoles. New quests, environments, characters, dialogue, armor, weapons and more – with Mods, there are no limits to what you can experience."
})

Game.create({
    title: "Hades",
    publisher: "Supergiant Games",
    developer: "Supergiant Games",
    release_date: Date.parse("2020-09-17"),
    price: 2499,
    description: "Hades is a god-like rogue-like dungeon crawler that combines the best aspects of Supergiant's critically acclaimed titles, including the fast-paced action of Bastion, the rich atmosphere and depth of Transistor, and the character-driven storytelling of Pyre."
})

Game.create({
    title: "Bastion",
    publisher: "Supergiant Games",
    developer: "Supergiant Games",
    release_date: Date.parse("2011-08-16"),
    price: 1499,
    description: "Bastion is an action role-playing experience that redefines storytelling in games, with a reactive narrator who marks your every move. Explore more than 40 lush hand-painted environments as you discover the secrets of the Calamity, a surreal catastrophe that shattered the world to pieces. Wield a huge arsenal of upgradeable weapons and battle savage beasts adapted to their new habitat. Finish the main story to unlock the New Game Plus mode and continue your journey!"
})

Game.create({
    title: "Sid Meier’s Civilization® VI",
    publisher: "2K, Aspyr (Mac), Aspyr (Linux)",
    developer: "Firaxis Games, Aspyr (Mac), Aspyr (Linux)",
    release_date: Date.parse("2016-10-21"),
    price: 5999,
    description: "Civilization VI offers new ways to interact with your world, expand your empire across the map, advance your culture, and compete against history’s greatest leaders to build a civilization that will stand the test of time. Play as one of 20 historical leaders including Roosevelt (America) and Victoria (England)."
})

Game.create({
    title: "The Walking Dead",
    developer: "Telltale Games",
    publisher: "Skybound",
    release_date: Date.parse("2012-04-24"),
    price: 1499,
    description: "The Walking Dead is a five-part game series set in the same universe as Robert Kirkman’s award-winning comic book series. Play as Lee Everett, a convicted criminal, who has been given a second chance at life in a world devastated by the undead. With corpses returning to life and survivors stopping at nothing to maintain their own safety, protecting an orphaned girl named Clementine may offer him redemption in a world gone to hell."
})

Game.create({
    title: "Subnautica",
    developer: "Unknown Worlds Entertainment",
    publisher: "Unknown Worlds Entertainment",
    release_date: Date.parse("2018-01-03"),
    price: 2999,
    description: "Descend into the depths of an alien underwater world filled with wonder and peril. Craft equipment, pilot submarines and out-smart wildlife to explore lush coral reefs, volcanoes, cave systems, and more - all while trying to survive."
})

Game.create({
    title: "The Witness",
    developer: "Thekla, Inc.",
    publisher: "Thekla, Inc.",
    release_date: Date.parse("2016-01-26"),
    price: 3999,
    description: "You wake up, alone, on a strange island full of puzzles that will challenge and surprise you. You don't remember who you are, and you don't remember how you got here, but there's one thing you can do: explore the island in hope of discovering clues, regaining your memory, and somehow finding your way home."
})

Game.create({
    title: "The Talos Principle",
    developer: "Croteam",
    publisher: "Devolver Digital, Croteam",
    release_date: Date.parse("2014-12-11"),
    price: 3999,
    description: "The Talos Principle is a first-person puzzle game in the tradition of philosophical science fiction. Made by Croteam and written by Tom Jubert (FTL, The Swapper) and Jonas Kyratzes (The Sea Will Claim Everything)."

})

