import React from 'react'
import {useState} from 'react'

function CreatePost() {

handleSubmit(obj) {
    description: description
}

const [description, setDescription] = useState("")

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