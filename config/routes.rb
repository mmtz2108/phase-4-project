Rails.application.routes.draw do
  resources :users, only: [:index, :show]
  resources :posts
  resources :comments, only: [:create, :update, :destroy]
  # route to test your configuration
  get '/hello', to: 'application#hello_world'
end
