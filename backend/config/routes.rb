Rails.application.routes.draw do
  get '/users' => 'users#index'
  get '/users/:id' => 'users#show'
  get '/expenses' => 'expenses#index'
  get '/expenses/:id' => 'expenses#show'
  get '/incomes' => 'incomes#index'
  get '/incomes/:id' => 'incomes#show'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
