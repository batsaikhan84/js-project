class UsersController < ApplicationController
    def index
        users = User.all
        render json: UserSerializer.new(users).to_serialized_json
    end
    def show
        user = User.find_by(id: params[:id])
        if user
            render json: UserSerializer.new(user).to_serialized_json
        else
            render json: { message: 'User not found'}
        end
    end
    def create
        email = params[:email]
        password = params[:password]
        firstName = params[:firstName]
        lastName = params[:lastName]
        gender = params[:gender]
        age = params[:age]
        @user = User.create(email: email, 
                            password: password,
                            firstName: firstName, 
                            lastName: lastName,
                            gender: gender,
                            age: age)
        if @user
            session[:user_id] = @user.id
            render json: UserSerializer.new(@user).to_serialized_json
        else
            render json: {message: 'Sorry user not created'}
        end
    end
end
