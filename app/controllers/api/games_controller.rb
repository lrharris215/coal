class Api::GamesController < ApplicationController 

    def show
        @game = Game.find_by_id(params[:id])
        if @game
            render :show
        else
            render json: ["Sorry, the game you are looking for cannot be found"], status: 404
        end
    end

    def index
        @games = Game.all
        render :index
    end

    def featured
        @games= Game.where(featured: true)
        render :index
    end


end