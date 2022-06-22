Rails.application.routes.draw do
  resources :users
  resources :posts
  resources :comments
  # route to test your configuration
  get '/hello', to: 'application#hello_world'
end
