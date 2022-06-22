class UsersController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :invalid

    rescue_from ActiveRecord::RecordNotFound, with: :not_found

    def index 
        users = User.all 
        render json: users, status: 200
    end

    def show
        user = User.find_by!(id: params[:id])
        render json: user, status: 200
    end

    private 

    def invalid errorobj
        render json: { errors: errorobj.record.errors.full_messages }, status: 422
    end

    def not_found
        render json: {error: "User not found"}, status: 404
    end
end
