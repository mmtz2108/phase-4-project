import React from 'react'
import {useState} from 'react'



function CreatePost({fetchPosts, user}) {
  


  const [description, setDescription] = useState("") 
  const [imageSelect, setImageSelect] = useState("")

function handleSubmit(e) {
    e.preventDefault();
    const obj = {
    description: description,
    image: imageSelect,
    poster_id: user.id,
    likes: 0
  }
    console.log(obj)
    fetch("/posts", {
      method: "POST",
      headers: {'Content-Type': 'application/json'}, 
      body: JSON.stringify(obj)
    })
    .then(resp => resp.json())
    .then(() => fetchPosts())

    setDescription("")
    setImageSelect("")
}


  return (

    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
          <input type="text" value={imageSelect} onChange={(e) => {setImageSelect(e.target.value)}} />
       
              Post an image here


        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )


}

export default CreatePost