class PostsController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :invalid

    rescue_from ActiveRecord::RecordNotFound, with: :not_found

    def index 
        posts = Post.all 
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

    def patch 
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


    def invalid 
        render json: {errors: ["validation errors"]}, status: 422
    end

    def not_found
        render json: {error: "Post not found"}, status: 404
    end
end
