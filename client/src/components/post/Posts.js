import React, {useState, useEffect} from 'react'
import Post from './Post'

function Posts() {
  
  const [intitialData, setInitialData] = useState([])

useEffect(() => {
    fetch("/posts")
    .then(resp => resp.json())
    .then(data => setInitialData(data))

  }, [])

  console.log(intitialData)

  const postList = intitialData.map(post =>{
    return <Post post={post} key={post.id}/>
  })

    // render all posts here
    // when YOUR post renders only YOU can delete it
  return (
    <div>{postList}</div>
  )
}

export default Posts