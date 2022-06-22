class CommentsController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :invalid

    def create
        comment = Comment.create!(comment_params)
        render json: comment, status: 201
    end

    def update 
        comment = Comment.find_by!(id: params[:id])
        comment.update!(comment_params)
        render json: post, status: 201
    end

    def destroy 
        comment = Comment.find_by!(id: params[:id])
        comment.destroy
        render json: {}
    end

    private

    def invalid errorobj
        render json: { errors: errorobj.record.errors.full_messages }, status: 422
    end

    def comment_params 
        params.permit(:description, :post_id, :user_id)
    end
end
