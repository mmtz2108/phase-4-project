import React from 'react'
import {useState} from 'react'
import Axios from 'axios'
import {Image} from 'cloudinary-react'

function CreatePost() {


function handleSubmit(e) {
    e.preventDefault();
    obj = {
    description: description,
    image: image
    }
}

const [imageSelect, setImageSelect] = useState("")

const uploadImage = () => {
  const formData = new FormData()
  formData.append("file", imageSelect)
  formData.append("upload_preset", "p4pp4p")

  Axios.post("https://api.cloudinary.com/v1_1/jacobmccannstudent/image/upload", formData).then((response) => {
    console.log(response)
  })
};


const [description, setDescription] = useState("")
// const [image, setImage] = useState("")     // change this , possible roll back *JUST A STRING U KING :-)*

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
          <input
            type="file"
            onChange={(e) => {
              setImageSelect(e.target.files)
            }}
            />
            <button onClick={uploadImage}>
              Img
            </button>

        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )


}

export default CreatePost