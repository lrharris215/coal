# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_06_08_181919) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "game_images", force: :cascade do |t|
    t.integer "game_id", null: false
    t.string "img_url", null: false
    t.string "img_type", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["game_id"], name: "index_game_images_on_game_id"
  end

  create_table "games", force: :cascade do |t|
    t.string "title", null: false
    t.text "description"
    t.string "developer", null: false
    t.string "publisher", null: false
    t.integer "price", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.date "release_date", null: false
    t.boolean "featured", default: false
    t.index ["featured"], name: "index_games_on_featured"
  end

  create_table "purchases", force: :cascade do |t|
    t.integer "gameId", null: false
    t.integer "buyerId", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["buyerId", "gameId"], name: "index_purchases_on_buyerId_and_gameId", unique: true
    t.index ["buyerId"], name: "index_purchases_on_buyerId"
    t.index ["gameId"], name: "index_purchases_on_gameId"
  end

  create_table "reviews", force: :cascade do |t|
    t.integer "author_id", null: false
    t.integer "game_id", null: false
    t.text "body"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.boolean "recommended", default: true
    t.index ["author_id", "game_id"], name: "index_reviews_on_author_id_and_game_id", unique: true
    t.index ["author_id"], name: "index_reviews_on_author_id"
    t.index ["game_id"], name: "index_reviews_on_game_id"
  end

  create_table "taggings", force: :cascade do |t|
    t.integer "game_id", null: false
    t.integer "tag_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["game_id", "tag_id"], name: "index_taggings_on_game_id_and_tag_id", unique: true
  end

  create_table "tags", force: :cascade do |t|
    t.string "name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["name"], name: "index_tags_on_name", unique: true
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "email", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
    t.index ["username"], name: "index_users_on_username", unique: true
  end

end
