Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'root#root'

  namespace :api, defaults:  {format: :json} do 
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy]
    get "/games/featured", to: 'games#featured'
    resources :games, only: [:show, :index] do
      get "reviews", to: 'reviews#game_reviews'
      post "reviews", to: 'reviews#new_game_review'
    end
    resources :reviews, only: [:destroy, :update]
    resources :purchases, only:[:create]
  end
end
