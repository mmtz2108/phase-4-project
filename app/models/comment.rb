class Comment < ApplicationRecord
    belongs_to :post 
    belongs_to :user

    # validates :description, presence: true
    # validates :description !! LENGTH
    # validates :description, uniqueness: true
end
