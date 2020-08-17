class UsersController < ApplicationController
    @@current_user = []
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
        @user = User.new(email: email, 
                            password: password,
                            firstName: firstName, 
                            lastName: lastName,
                            gender: gender,
                            age: age)
        
        if @user.save
            @@current_user<<@user
            render json: UserSerializer.new(@user).to_serialized_json
        else
            render json: {message: 'Sorry user not created'}
        end
    end
    @@current_user = []
    def sign_in
        @user = User.find_by(email: params[:email], password: params[:password])
        if @user
            @@current_user << @user
            render json: UserSerializer.new(@user).to_serialized_json
        else
            render json: {message: 'user not signed in'}
        end
    end
    def sign_out
        @@current_user.clear
        render json: {message: 'user signed out'}
    end
    def current_user
        if !@@current_user.empty?
            render json: UserSerializer.new(@@current_user[0]).to_serialized_json
        else
            render json: {message: 'no current user found'}
        end
    end
end
