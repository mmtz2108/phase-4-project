import React, { useState, useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route, Link, useNavigate} from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import ErrorPage from './pages/ErrorPage';
import NavBar from './NavBar';
import MainFeed from './post/MainFeed';
import CreatePost from './post/CreatePost';



const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);


const navigate = useNavigate()

  function handleLogOut(){
    fetch("/logout", {
      method: "DELETE"
    })
    .then(resp => resp.json())
    .then(console.log)
    setUser(null)
    navigate("/")
}



  return (
    <div>

        <NavBar user={!user} setUser={setUser}/>
        
        {user && <nav className="navbar2">
          {!user ? 
            <button><Link to="/"> Login here! </Link>Login</button>
          :
            <button className="navbar-button" onClick={handleLogOut}>Logout</button>
          }
        
        </nav>
      }
      <Routes>
          <Route path="/create_posts" element={<CreatePost/>} />
          <Route exact path="/" element={<LoginPage setUser={setUser}/>} />
          <Route path="/MainFeed" element={<MainFeed  user={user}/>} />
          <Route path="*" element={<ErrorPage/>} />

       </Routes>

    </div>
  )
    };

export default App;
