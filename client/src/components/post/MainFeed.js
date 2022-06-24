import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import CreatePost from './CreatePost'
import Post from './Post'

function MainFeed({ user }) {

  const [initialData, setInitialData] = useState([])
  const {id} = useParams

  console.log(id)
  // console.log({hello: initialData})

useEffect(() => {
  fetchPosts()

  }, [])

  function fetchPosts(){
    fetch("/posts")
    .then(resp => resp.json())
    .then(data => {
      if(data.error){
        // console.log(data.error)
      }
      else {
      setInitialData(data)}
    })
  }

  function addSubmit(obj){
    const arr = [...initialData, obj]
    setInitialData(arr)
  }



  // console.log(initialData)

  let postList = []
  if(initialData) {
   postList = initialData.map(post => {
    return <Post fetchPosts={fetchPosts} user={user} post={post} key={post.id}/>

  })
}


if(!user){
  return <></>
}


// console.log(postList)

    // render all posts here
    // when YOUR post renders only YOU can delete it
  return (
    <div>
    <CreatePost id={id} fetchPosts={fetchPosts}  user={user}/>

    {postList}

    </div>

  )
}

export default MainFeed