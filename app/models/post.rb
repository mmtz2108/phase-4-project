class Post < ApplicationRecord
    has_many :comments 
    has_many :users, through: :comments

    # validates :image, presence: true 



    # one to many
    def author
    self.find(poster_id)
    end

    def commenters 
    self.users
    end

end