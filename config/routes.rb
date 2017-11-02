Rails.application.routes.draw do

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:new, :create, :show]
    resources :episodes, only: [:show, :index] do
      resources :comments, only: [:create, :index, :show, :destroy]
    end
    resources :series, only: [:show, :index]
    resources :watchlist_adds
    resource :session, only: [:show, :create, :destroy]
  end

  root "static_pages#root"
end
