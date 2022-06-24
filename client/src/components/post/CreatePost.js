import React from 'react'
import {useState} from 'react'
// import Axios from 'axios'
// import {Image} from 'cloudinary-react'

function CreatePost({fetchPosts, user}) {
  


//   function handleClick(){
//     fetch(`http://localhost:8000/adventures/${adventure.id}`, {"method": "delete"});
//     onRemoveAdventure(adventure.id)
// }

  const [description, setDescription] = useState("") // change this , possible roll back *JUST A STRING U KING :-)*
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

// function handleDelete(){
//   fetch("/posts")
// }

// const uploadImage = () => {
//   const formData = new FormData()
//   formData.append("file", imageSelect)
//   formData.append("upload_preset", "p4pp4p")

//   Axios.post("https://api.cloudinary.com/v1_1/jacobmccannstudent/image/upload", formData).then((response) => {
//     console.log(response)
//   })
// };


  return (

    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
          <input type="text" value={imageSelect} onChange={(e) => {setImageSelect(e.target.value)}} />
            {/* <button onClick={uploadImage}> */}
              Post an image here
            {/* </button> */}

        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )


}

export default CreatePost