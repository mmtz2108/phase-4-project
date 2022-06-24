import React from 'react'
import Comment from './comments/Comment'


function Post({post}) {
    // remember to add author.name
const {id, image, description, author} = post

  return (
    <div className="post-card">
        <img src={image}/>
        <p>{description}</p>
        <p>{author ? author.name : null}</p>
        <Comment />
    </div>
  )
}

export default Post