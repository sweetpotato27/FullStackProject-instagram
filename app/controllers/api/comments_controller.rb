class Api::CommentsController < ApplicationController

    def index
        @comments = Comment.all
        render :index
    end

    def show
        @comment = Comment.find(params[:id])
        render :show
    end

    def create
        @comment = Comment.new(comment_params)
        @comment.user_id = current_user.id
        if @comment.save!
            render :show
        else
            render json: @comment.errors.full_messages, status: 422
        end
    end

    def update
        @comment = Comment.find(params[:id])

        if @comment.update_attributes({
            body: params[:body]
        })
            render :show
        else
            render json: @comment.errors.full_messages, status: 422
        end
    end

    def destroy
        @comment = Comment.find(params[:id])
        @comment.destroy

        render :show
    end

    private

    def comment_params
        params.require(:comment).permit(:user_id, :post_id, :body)
    end

end