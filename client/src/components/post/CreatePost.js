import React from 'react'
import {useState} from 'react'

function CreatePost() {

function handleSubmit(e) {
    e.preventDefault(); 
    obj = {
    description: description,
    image: image
    }
}

const [description, setDescription] = useState("")
const [image, setImage] = useState("")     // change this , possible roll back *JUST A STRING U KING :-)*

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default CreatePost