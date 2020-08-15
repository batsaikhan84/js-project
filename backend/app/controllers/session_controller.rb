class SessionController < ApplicationController
    @@current_user = []
    def create
        @user = User.find_by(email: params[:email], password: params[:password])
        if @user
            @@current_user << @user
            render json: UserSerializer.new(@user).to_serialized_json
        else
            render json: {message: 'user not signed in'}
        end
    end
    def destroy
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
