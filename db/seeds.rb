# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

# user1 = User.create(username: "zdrake", password: "123")

# post1 = Post.create(image: 'elephant', description: 'saw the elephants!', poster_id: user1.id)
Post.destroy_all
Comment.destroy_all
puts "Destroying Data"
#ActiveRecord::Base.connection.reset_pk_sequence!(:posts)
#ActiveRecord::Base.connection.reset_pk_sequence!(:comments)
puts "Resetting Data"

images = ['https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/sunset-quotes-21-1586531574.jpg', 'https://cdn.britannica.com/39/155239-050-674BBCE2/Image-Andromeda-Galaxy-NASA-Wide-field-Infrared-Survey.jpg', "https://i.ytimg.com/vi/JHJFTBQdPAA/maxresdefault.jpg", "https://i.ytimg.com/vi/cs2QmUKivl8/maxresdefault.jpg", "https://i.ytimg.com/vi/c4vFxKX3nOg/maxresdefault.jpg", "https://i.ytimg.com/vi/iXJNyDorfmM/maxresdefault.jpg", "https://i.ytimg.com/vi/agBFwIO_Be8/maxresdefault.jpg", "https://i.ytimg.com/vi/FtEKJOGyeTE/maxresdefault.jpg", "https://i.ytimg.com/vi/BUyrhLRzAwU/maxresdefault.jpg", "https://i.ytimg.com/vi/35ydsnC_ncI/maxresdefault.jpg", "https://i.ytimg.com/vi/KcJdUC3EmKA/maxresdefault.jpg"]

10.times do
    post = Post.create(poster_id: User.all.sample.id,
      image: images.sample,
      description: Faker::Name.first_name
    )

    rand(0..7).times do
      post.comments.create(
        description: Faker::Lorem.sentence, user_id: User.all.sample.id
      )
    end
end

puts "Seeding done!"



