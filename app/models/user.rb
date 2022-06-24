class User < ApplicationRecord
    has_many :comments 
    has_many :posts, through: :comments

    has_secure_password

    def authored_posts
        Post.where(poster_id: self.id) #covers has_many posts
    end

    def commented_posts 
        self.posts
    end
    # one to many 
end


