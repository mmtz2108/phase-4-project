Rails.application.routes.draw do
  get 'sessions/create'
  get 'sessions/destroy'
  resources :users, only: [:index, :show]
  resources :posts
  resources :comments, only: [:create, :update, :destroy]

  get "/me", to: "users#show"
  get '/users', to: 'users#index'
  post '/signup', to: 'users#create'
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  # route to test your configuration
  get '/hello', to: 'application#hello_world'

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
  
end
