import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import CreatePost from './CreatePost'
import Post from './Post'

function MainFeed({ user }) {

  const [initialData, setInitialData] = useState([])
  const [showPostForm, setShowPostForm] = useState(false)

  const {id} = useParams

  console.log(id)


useEffect(() => {
  fetchPosts()

  }, [])

  function fetchPosts(){
    fetch("/posts")
    .then(resp => resp.json())
    .then(data => {
      if(data.error){
  
      }
      else {
      setInitialData(data)}
    })
  }

  function addSubmit(obj){
    const arr = [...initialData, obj]
    setInitialData(arr)
  }





  let postList = []
  if(initialData) {
   postList = initialData.map(post => {
    return <Post fetchPosts={fetchPosts} user={user} post={post} key={post.id}/>

  })
}


if(!user){
  return <></>
}


  return (
    <div>
    {showPostForm ? 
    <CreatePost id={id} fetchPosts={fetchPosts}  user={user}/>
    : null
    } 

    <button onClick={() => setShowPostForm(!showPostForm)}>Create a post here!</button>
    {postList}

    </div>

  )
}

export default MainFeed