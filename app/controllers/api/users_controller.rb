class Api::UsersController < ApplicationController
    def index
        @users = User.all.with_attached_photo
        render :index
    end

    def show
        @user = User.find(params[:id])
        render :show
        # render json: user
    end

    def create
        @user = User.new(user_params)
        @user.photo.attach(io: File.open("#{Rails.root}/app/assets/images/session/default_profile.jpg"))
        if @user.save
            login!(@user)
            render :show
        else
            render json: @user.errors.full_messages, status: 422 
        end
    end

    private

    def user_params
        params.require(:user).permit(:username, :password, :email, :photo) #could probably permit more!!!!!
    end
end
