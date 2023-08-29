Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  # PostsController
  get '/', to: 'posts#index', as: 'index_post'
  get 'posts/new', to: 'posts#new', as: 'new_post'

  # TopicsController
  get 'topics/new', to: 'topics#new', as: 'new_topic'
  get 'topics/edit/:id', to: 'topics#edit', as: 'edit_topic'

end
