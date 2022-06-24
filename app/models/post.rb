class Post < ApplicationRecord
    has_many :comments 
    has_many :users, through: :comments

    # validates :image, presence: true 



    # one to many, covers belongs_to user
def author
    if(self.poster_id)
        User.find(self.poster_id)
    else
        nil
    end
end


def commenters 
    self.users
end

end