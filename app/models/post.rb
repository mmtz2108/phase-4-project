class Post < ApplicationRecord
    has_many :comments 
    has_many :users, through: :comments

    # validates :image, presence: true 



    # one to many, covers belongs_to user
    def author
    User.find(self.poster_id)
    
    end

    def commenters 
    self.users
    end

end