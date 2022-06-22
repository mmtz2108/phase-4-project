# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

# user1 = User.create(username: "zdrake", password: "123")

# post1 = Post.create(image: 'elephant', description: 'saw the elephants!', poster_id: user1.id)

50.times do
    post = Post.create(
      user: Faker::Name.first_name
    )

    rand(1..20).times do
      Comment.create(
        text: Faker::Lorem.sentence
      )
    end
end

    photocloud: Cloudinary::Uploader.upload(file, options = {})




  end


