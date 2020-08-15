Rails.application.routes.draw do
  get '/current_user' => 'session#current_user'
  get '/users' => 'users#index'
  get '/users/:id' => 'users#show'
  post '/users' => 'users#create'
  post '/signin' => 'session#create'
  get '/signout' => 'session#destroy'
  get '/expenses' => 'expenses#index'
  get '/expenses/:id' => 'expenses#show'
  get '/incomes' => 'incomes#index'
  get '/incomes/:id' => 'incomes#show'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
