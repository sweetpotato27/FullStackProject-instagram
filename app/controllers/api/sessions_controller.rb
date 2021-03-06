class Api::SessionsController < ApplicationController
    
    def create
        @user = User.find_by_credentials(
            params[:user][:username],
            params[:user][:email],
            params[:user][:password]
        )

        if @user
            login!(@user)
            render "api/users/show"
        else
            render json: ["invalid username or password or email"], status: 401
        end
    end

    def destroy
        @user = current_user
        if @user
            logout!
            render "api/users/show"
        else
            render json: ["nobody signed in"], status: 404
        end
    end

end
