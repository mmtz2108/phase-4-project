import React from 'react'


function Post({post}) {
    // remember to add author.name
const {id, image, description, author} = post

  return (
    <div>
        <img src={image}/>
        <p>{description}</p>
        <p>{author.name}</p>
    </div>
  )
}

export default Post