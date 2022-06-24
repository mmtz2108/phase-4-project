import React, {useState, useEffect} from 'react'
import CreatePost from './CreatePost'
import Post from './Post'

function MainFeed({ user }) {
  
  const [initialData, setInitialData] = useState([])
  console.log({hello: initialData})

useEffect(() => {
  fetchPosts()
    
  }, [])

  function fetchPosts(){
    fetch("/posts")
    .then(resp => resp.json())
    .then(data => {
      if(data.error){
        console.log(data.error)
      }
      else {
      setInitialData(data)}
    })
  }

  function addSubmit(obj){
    const arr = [...initialData, obj]
    setInitialData(arr)
  }


  console.log(initialData)

  let postList = []
  if(initialData) {
   postList = initialData.map(post => {
    return <Post post={post} key={post.id}/>
   
  })
} 

    // render all posts here
    // when YOUR post renders only YOU can delete it
  return (
    <div>
    <CreatePost fetchPosts={fetchPosts}  user={user}/>
    {postList}

    </div>

  )
}

export default MainFeed