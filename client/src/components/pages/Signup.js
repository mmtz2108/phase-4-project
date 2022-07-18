import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = () => {

    let navigate = useNavigate()

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [password_confirmation, setPasswordConfirmation] = useState("")
    function handleSubmit(e) {
        e.preventDefault(); 
        fetch("/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password, password_confirmation }),
        }).then(resp => resp.json())
        .then(user => {
            if(user.id){
                navigate('/')
            }
        })
        
    }
  return (
    <div className='signUpForm'>
        <h1>Signup</h1>

    <form onSubmit={handleSubmit}>
    <input type="text" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)} />    <br />
    <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />     <br />
    <input type="password" placeholder="password" value={password_confirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} />     <br />
    <button>Signup</button>

    </form> 
    </div>
    
  )
}

export default Signup