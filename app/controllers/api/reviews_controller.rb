class Api::ReviewsController < ApplicationController 
    def game_reviews
        @reviews = Review.where(game_id: params[:game_id])
        render json: @reviews
    end

    def new_game_review
        @review = Review.new(review_params)
        if  @review.save!
           
            render json: @review
        else
            render json: @review.errors.full_messages, status 400;
        end
    end

    private 

    def review_params 
        params.require(:review).permit(:game_id, :author_id, :title, :body)
    end
end