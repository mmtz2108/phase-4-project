class PostSerializer < ActiveModel::Serializer
  attributes :id, :image, :description, :poster_id
end
