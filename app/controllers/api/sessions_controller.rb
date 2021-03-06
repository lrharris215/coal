class Api::SessionsController < ApplicationController 
    def create
        @user = User.find_by_credentials(
            params[:user][:username],
            params[:user][:password]
        )
        if @user
            login!(@user)
            render 'api/users/show'
        else
            render json: ["The account name or password that you have entered is incorrect."], status: 401
        end
    end

    def destroy
        if current_user
            logout!
            render json: {}
        else
            render json: ["You're not logged in!"], status: 404
        end
    end
end