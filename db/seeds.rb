# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
GameImage.delete_all
Game.delete_all
User.delete_all
ActiveRecord::Base.connection.reset_pk_sequence!('users')
ActiveRecord::Base.connection.reset_pk_sequence!('games')
ActiveRecord::Base.connection.reset_pk_sequence!('game_images')

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

#Games 
#date is Date.parse("YYYY-MM-DD")
#1
Game.create({
    title: "Stardew Valley",
    publisher: "ConcernedApe",
    developer: "ConcernedApe",
    release_date: Date.parse("2016-02-26"),
    price: 1499,
    description: "You've inherited your grandfather's old farm plot in Stardew Valley. Armed with hand-me-down tools and a few coins, you set out to begin your new life. Can you learn to live off the land and turn these overgrown fields into a thriving home?",
    featured: true

})

#2
Game.create({
    title: "The Elder Scrolls V: Skyrim Special Edition",
    publisher: "Bethesda Softworks",
    developer: "Bethesda Game Studeo",
    release_date: Date.parse("2016-10-27"),
    price: 3999,
    description: "Winner of more than 200 Game of the Year Awards, Skyrim Special Edition brings the epic fantasy to life in stunning detail. The Special Edition includes the critically acclaimed game and add-ons with all-new features like remastered art and effects, volumetric god rays, dynamic depth of field, screen-space reflections, and more. Skyrim Special Edition also brings the full power of mods to the PC and consoles. New quests, environments, characters, dialogue, armor, weapons and more – with Mods, there are no limits to what you can experience.",
    featured: true
})

#3
Game.create({
    title: "Hades",
    publisher: "Supergiant Games",
    developer: "Supergiant Games",
    release_date: Date.parse("2020-09-17"),
    price: 2499,
    description: "Hades is a god-like rogue-like dungeon crawler that combines the best aspects of Supergiant's critically acclaimed titles, including the fast-paced action of Bastion, the rich atmosphere and depth of Transistor, and the character-driven storytelling of Pyre."
})

#4
Game.create({
    title: "Bastion",
    publisher: "Supergiant Games",
    developer: "Supergiant Games",
    release_date: Date.parse("2011-08-16"),
    price: 1499,
    description: "Bastion is an action role-playing experience that redefines storytelling in games, with a reactive narrator who marks your every move. Explore more than 40 lush hand-painted environments as you discover the secrets of the Calamity, a surreal catastrophe that shattered the world to pieces. Wield a huge arsenal of upgradeable weapons and battle savage beasts adapted to their new habitat. Finish the main story to unlock the New Game Plus mode and continue your journey!"
})

#5
Game.create({
    title: "Sid Meier’s Civilization® VI",
    publisher: "2K, Aspyr (Mac), Aspyr (Linux)",
    developer: "Firaxis Games, Aspyr (Mac), Aspyr (Linux)",
    release_date: Date.parse("2016-10-21"),
    price: 5999,
    description: "Civilization VI offers new ways to interact with your world, expand your empire across the map, advance your culture, and compete against history’s greatest leaders to build a civilization that will stand the test of time. Play as one of 20 historical leaders including Roosevelt (America) and Victoria (England)."
})

#6
Game.create({
    title: "The Walking Dead",
    developer: "Telltale Games",
    publisher: "Skybound",
    release_date: Date.parse("2012-04-24"),
    price: 1499,
    description: "The Walking Dead is a five-part game series set in the same universe as Robert Kirkman’s award-winning comic book series. Play as Lee Everett, a convicted criminal, who has been given a second chance at life in a world devastated by the undead. With corpses returning to life and survivors stopping at nothing to maintain their own safety, protecting an orphaned girl named Clementine may offer him redemption in a world gone to hell."
})

#7
Game.create({
    title: "Subnautica",
    developer: "Unknown Worlds Entertainment",
    publisher: "Unknown Worlds Entertainment",
    release_date: Date.parse("2018-01-03"),
    price: 2999,
    description: "Descend into the depths of an alien underwater world filled with wonder and peril. Craft equipment, pilot submarines and out-smart wildlife to explore lush coral reefs, volcanoes, cave systems, and more - all while trying to survive.",
    featured: true
})

#8
Game.create({
    title: "The Witness",
    developer: "Thekla, Inc.",
    publisher: "Thekla, Inc.",
    release_date: Date.parse("2016-01-26"),
    price: 3999,
    description: "You wake up, alone, on a strange island full of puzzles that will challenge and surprise you. You don't remember who you are, and you don't remember how you got here, but there's one thing you can do: explore the island in hope of discovering clues, regaining your memory, and somehow finding your way home.",
    featured: true
})

#9
Game.create({
    title: "The Talos Principle",
    developer: "Croteam",
    publisher: "Devolver Digital, Croteam",
    release_date: Date.parse("2014-12-11"),
    price: 3999,
    description: "The Talos Principle is a first-person puzzle game in the tradition of philosophical science fiction. Made by Croteam and written by Tom Jubert (FTL, The Swapper) and Jonas Kyratzes (The Sea Will Claim Everything)."

})

#Game Images


#SDValley
GameImage.create({
    game_id: 1,
    img_url: "https://cdn.akamai.steamstatic.com/steam/apps/413150/header.jpg?t=1608624324",
    img_type: "title-card"
})

GameImage.create({
    game_id: 1,
    img_url: "https://cdn.akamai.steamstatic.com/steam/apps/413150/ss_b887651a93b0525739049eb4194f633de2df75be.600x338.jpg?t=1608624324",
    img_type: "screenshot"
})

GameImage.create({
    game_id: 1,
    img_url: "https://cdn.akamai.steamstatic.com/steam/apps/413150/ss_30aeedc47e731232ade368831a598d6545346f70.600x338.jpg?t=1608624324",
    img_type: "screenshot"
})

GameImage.create({
    game_id: 1,
    img_url: "https://cdn.akamai.steamstatic.com/steam/apps/413150/ss_f79d2066dfaf32bbe87868d36db4845f771eddbd.600x338.jpg?t=1608624324",
    img_type: "screenshot"
})

GameImage.create({
    game_id: 1,
    img_url: "https://cdn.akamai.steamstatic.com/steam/apps/413150/ss_980472fb4f4860639155880938b6ec292a0648c4.600x338.jpg?t=1608624324",
    img_type: "screenshot"
})

#Skyrim
GameImage.create({
    game_id: 2,
    img_url: "https://cdn.akamai.steamstatic.com/steam/apps/489830/header.jpg?t=1590515887",
    img_type: "title-card"
})

GameImage.create({
    game_id: 2,
    img_url: "https://cdn.akamai.steamstatic.com/steam/apps/489830/ss_5d19c69d33abca6f6271d75f371d4241c0d6b2d1.600x338.jpg?t=1590515887",
    img_type: "screenshot"
})

GameImage.create({
    game_id: 2,
    img_url: "https://cdn.akamai.steamstatic.com/steam/apps/489830/ss_d64b646612ab1402bdda8e400672aa0dbcb352ea.600x338.jpg?t=1590515887",
    img_type: "screenshot"
})

GameImage.create({
    game_id: 2,
    img_url: "https://cdn.akamai.steamstatic.com/steam/apps/489830/ss_8c7ecd394afb581b9b2137a3de04433f78fdf4ea.600x338.jpg?t=1590515887",
    img_type: "screenshot"
})

GameImage.create({
    game_id: 2,
    img_url: "https://cdn.akamai.steamstatic.com/steam/apps/489830/ss_73c1a0bb7e1720c8a1847186c3ddd837d3ca7a8d.600x338.jpg?t=1590515887",
    img_type: "screenshot"
})

#Hades

GameImage.create({
    game_id: 3,
    img_url: "https://cdn.akamai.steamstatic.com/steam/apps/1145360/header.jpg?t=1615848317",
    img_type: "title-card"
    
})

GameImage.create({
    game_id: 3,
    img_url: "https://cdn.akamai.steamstatic.com/steam/apps/1145360/ss_c0fed447426b69981cf1721756acf75369801b31.600x338.jpg?t=1615848317",
    img_type: "screenshot"
})

GameImage.create({
    game_id: 3,
    img_url: "https://cdn.akamai.steamstatic.com/steam/apps/1145360/ss_8a9f0953e8a014bd3df2789c2835cb787cd3764d.600x338.jpg?t=1615848317",
    img_type: "screenshot"
})

GameImage.create({
    game_id: 3,
    img_url: "https://cdn.akamai.steamstatic.com/steam/apps/1145360/ss_217b70678a2eea71a974fba1a4cd8baa660581bb.600x338.jpg?t=1615848317",
    img_type: "screenshot"
})

GameImage.create({
    game_id: 3,
    img_url: "https://cdn.akamai.steamstatic.com/steam/apps/1145360/ss_abb2427810a4e91cc600f37c3630b912d4e0191b.600x338.jpg?t=1615848317",
    img_type: "screenshot"
})

#Bastion

GameImage.create({
    game_id: 4,
    img_url: "https://cdn.akamai.steamstatic.com/steam/apps/107100/header.jpg?t=1601950406",
    img_type: "title-card"
})

GameImage.create({
    game_id: 4,
    img_url: "https://cdn.akamai.steamstatic.com/steam/apps/107100/ss_d158b1b4ece3a362c7d8acc6168ad14de00e64ba.600x338.jpg?t=1601950406",
    img_type: "screenshot"
})

GameImage.create({
    game_id: 4,
    img_url: "https://cdn.akamai.steamstatic.com/steam/apps/107100/ss_5e3781ab7684f7943b25346f9ae7c3a32dc0e7a5.600x338.jpg?t=1601950406",
    img_type: "screenshot"
})

GameImage.create({
    game_id: 4,
    img_url: "https://cdn.akamai.steamstatic.com/steam/apps/107100/ss_7d3cd935098d3cd0603f713017624ef508c86c98.600x338.jpg?t=1601950406",
    img_type: "screenshot"
})

GameImage.create({
    game_id: 4,
    img_url: "https://cdn.akamai.steamstatic.com/steam/apps/107100/ss_9cc86f936b3b0761cb6f685594ba56f4d5088369.600x338.jpg?t=1601950406",
    img_type: "screenshot"
})

#civ6
GameImage.create({
    game_id: 5,
    img_url: "https://cdn.akamai.steamstatic.com/steam/apps/289070/header.jpg?t=1611862077",
    img_type: "title-card"
})

GameImage.create({
    game_id: 5,
    img_url: "https://cdn.akamai.steamstatic.com/steam/apps/289070/ss_f501156a69223131ee8b12452f3003698334e964.600x338.jpg?t=1611862077",
    img_type: "screenshot"
})
GameImage.create({
    game_id: 5,
    img_url: "https://cdn.akamai.steamstatic.com/steam/apps/289070/ss_36c63ebeb006b246cb740fdafeb41bb20e3b330d.600x338.jpg?t=1611862077",
    img_type: "screenshot"
})
GameImage.create({
    game_id: 5,
    img_url: "https://cdn.akamai.steamstatic.com/steam/apps/289070/ss_a4b07a0fbdd09e35b5ec3a4726239b884f1f1f7d.600x338.jpg?t=1611862077",
    img_type: "screenshot"
})
GameImage.create({
    game_id: 5,
    img_url: "https://cdn.akamai.steamstatic.com/steam/apps/289070/ss_fd6bbe6791ee8ab68f8a91455fa3c25b4dd9bca7.116x65.jpg?t=1611862077",
    img_type: "screenshot"
})

#TWD
GameImage.create({
    game_id: 6,
    img_url: "https://cdn.akamai.steamstatic.com/steam/apps/207610/header.jpg?t=1612901774",
    img_type: "title-card"
})

GameImage.create({
    game_id: 6,
    img_url: "https://cdn.akamai.steamstatic.com/steam/apps/207610/ss_7a2c18f45ed5c6464ae803ae49c32bf3717ae375.600x338.jpg?t=1612901774",
    img_type: "screenshot"
})
GameImage.create({
    game_id: 6,
    img_url: "https://cdn.akamai.steamstatic.com/steam/apps/207610/ss_b8880868558943bf6b8e1aa94fe9ab51ea04472a.600x338.jpg?t=1612901774",
    img_type: "screenshot"
})
GameImage.create({
    game_id: 6,
    img_url: "https://cdn.akamai.steamstatic.com/steam/apps/207610/ss_8652e0679f3de9d0382a0164888c60a5edb0b076.600x338.jpg?t=1612901774",
    img_type: "screenshot"
})
GameImage.create({
    game_id: 6,
    img_url: "https://cdn.akamai.steamstatic.com/steam/apps/207610/ss_044086628ad6b406be3f75d9bbb9656512d5ff18.600x338.jpg?t=1612901774",
    img_type: "screenshot"
})

#Subnautica 
GameImage.create({
    game_id: 7,
    img_url: "https://cdn.akamai.steamstatic.com/steam/apps/264710/header.jpg?t=1609982984",
    img_type: "title-card"
})
GameImage.create({
    game_id: 7,
    img_url: "https://cdn.akamai.steamstatic.com/steam/apps/264710/ss_e182b6b20bb797500f9f63c561586d920d44e37c.600x338.jpg?t=1609982984",
    img_type: "screenshot"
})
GameImage.create({
    game_id: 7,
    img_url: "https://cdn.akamai.steamstatic.com/steam/apps/264710/ss_cebc378d2f7bc78978c21db4e3c5e12ccd067349.600x338.jpg?t=1609982984",
    img_type: "screenshot"
})
GameImage.create({
    game_id: 7,
    img_url: "https://cdn.akamai.steamstatic.com/steam/apps/264710/ss_f0eeabe108c2bc2b3e370b9828fb280035b50db2.600x338.jpg?t=1609982984",
    img_type: "screenshot"
})
GameImage.create({
    game_id: 7,
    img_url: "https://cdn.akamai.steamstatic.com/steam/apps/264710/ss_883a98ad56021ce409219e1b749818866b6115cd.600x338.jpg?t=1609982984",
    img_type: "screenshot"
})

#witness


GameImage.create({
    game_id: 8,
    img_url: "https://cdn.akamai.steamstatic.com/steam/apps/210970/header.jpg?t=1598383120",
    img_type: "title-card"
})
GameImage.create({
    game_id: 8,
    img_url: "https://cdn.akamai.steamstatic.com/steam/apps/210970/ss_9c73ac83c8acfb69db6166f239fdba2ffa099b32.600x338.jpg?t=1598383120",
    img_type: "screenshot"
})
GameImage.create({
    game_id: 8,
    img_url: "https://cdn.akamai.steamstatic.com/steam/apps/210970/ss_6a7964a4dede8ad7d8b4e413e8b291defbbaa55b.600x338.jpg?t=1598383120",
    img_type: "screenshot"
})
GameImage.create({
    game_id: 8,
    img_url: "https://cdn.akamai.steamstatic.com/steam/apps/210970/ss_583fdbf6aa66a179d60a2261bab7b10c102e36e8.600x338.jpg?t=1598383120",
    img_type: "screenshot"
})
GameImage.create({
    game_id: 8,
    img_url: "https://cdn.akamai.steamstatic.com/steam/apps/210970/ss_fabb0939200a1f2bbb40b775c8e07645f21dc44a.600x338.jpg?t=1598383120",
    img_type: "screenshot"
})

#Talos

GameImage.create({
    game_id: 9,
    img_url: "https://cdn.akamai.steamstatic.com/steam/apps/257510/header.jpg?t=1601561095",
    img_type: "title-card"
})
GameImage.create({
    game_id: 9,
    img_url: "https://cdn.akamai.steamstatic.com/steam/apps/257510/ss_8061dc63743404a7829eabdd47590421652c318d.600x338.jpg?t=1601561095",
    img_type: "screenshot"
})
GameImage.create({
    game_id: 9,
    img_url: "https://cdn.akamai.steamstatic.com/steam/apps/257510/ss_3f16d21674b27dad893ccb27b581670b5bb8043a.600x338.jpg?t=1601561095",
    img_type: "screenshot"
})
GameImage.create({
    game_id: 9,
    img_url: "https://cdn.akamai.steamstatic.com/steam/apps/257510/ss_bf869965e8e972acb4dfe3f8d4bf7baa2c2cdf29.600x338.jpg?t=1601561095",
    img_type: "screenshot"
})
GameImage.create({
    game_id: 9,
    img_url: "https://cdn.akamai.steamstatic.com/steam/apps/257510/ss_b42acabe63d45a11580a2949e34f305e1bd10fc7.600x338.jpg?t=1601561095",
    img_type: "screenshot"
})
