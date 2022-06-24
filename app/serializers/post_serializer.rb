class PostSerializer < ActiveModel::Serializer
  attributes :id, :image, :description, :author, :likes
end
