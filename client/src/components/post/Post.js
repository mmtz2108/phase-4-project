// import jsonServerReset from 'json-server-reset/src'
import React from 'react'
import Comment from './comments/Comment'


function Post({post, user, fetchPosts}) {

const {id, image, description, author, likes} = post

function handleDelete(){
  fetch(`/posts/${id}` , {method: "DELETE"})
  .then(()=> fetchPosts())
}

function handleLike(){
  fetch(`/posts/${id}`, {
    method: "PATCH",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify({likes: likes+1})
  })
  .then(()=> fetchPosts())
}


  return (
    <div className="post-card">
        <img src={image}/>
        <div className="buttons">
          <div className='delete'>
            {author.id === user.id ?
            <button id="deleteButton" onClick={handleDelete}>Delete Button</button> : null}
            </div>
            {<button id="likeButton" onClick={handleLike}>Like Button</button>}
        </div>
        <div className='content'>
            <p>{likes}</p>
            <p>{description}</p>
            <p>{author ? author.name : null}</p>
            <Comment />
        </div>
    </div>
  )
}

export default Post