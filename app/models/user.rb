class User < ApplicationRecord
    has_many :comments 
    has_many :posts, through: :comments

    def authored_posts
        Post.where(poster_id: self.id)
    end

    def commented_posts 
        self.posts
    end
    # one to many 
end


