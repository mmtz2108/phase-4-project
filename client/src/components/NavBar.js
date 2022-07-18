import React from "react";
import { useNavigate } from "react-router-dom";



function NavBar({user, setUser}) {

    function handleLogOut(){
        setUser(null)
        navigate("/")
    }

    fetch('/users')
    .then(resp => resp.json())
    .then(data => {
        console.log(data)
    })

    
const navigate = useNavigate()

    return (
        <div className="navbar">
            <h1 id="title">Welcome to Flatagram</h1>
        </div>

    )
  };

  export default NavBar;


