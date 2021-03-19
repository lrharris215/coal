class Api::GamesController < ApplicationController 

    def show
        @game = Game.find_by_id(params[:id])
        render :show
    end

    def index
        @games = Game.all
        render :index
    end

    def featured
        puts "featturreee"
        @games= Game.where(featured: true)
        render :index
    end


end