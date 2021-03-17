class Api::GamesController < ApplicationController {

    def show
        @game = Game.find_by_id(params[:id])
        render :show
    end

    def index
        @games = Game.all
        render :index;
    end


}