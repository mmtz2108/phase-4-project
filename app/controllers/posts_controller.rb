class PostsController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :invalid

    # rescue_from ActiveRecord::RecordNotFound, with: :not_found

    # before_action :authorize

    def index 
        posts = Post.all.reverse
        render json: posts, status: 200
    end

    def show
        post = Post.find_by!(id: params[:id])
        render json: post, status: 200
    end

    def create
        post = Post.create!(post_params)
        render json: post, status: 201
    end

    def update 
        post = Post.find_by!(id: params[:id])
        post.update!(post_params)
        render json: post, status: 201
    end

    def destroy 
        post = Post.find_by!(id: params[:id])
        post.destroy
        render json: {}
    end

    private 

    def post_params 
        params.permit(:image, :description, :poster_id) # come back to this and see 
    end


    def invalid errorobj
        render json: { errors: errorobj.record.errors.full_messages }, status: 422
    end

    def not_found
        render json: {error: "Post not found"}, status: 404
    end

    def authorize
        return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
    end
end
