import React, { useState, useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route, Link, useNavigate} from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import ErrorPage from './pages/ErrorPage';
import NavBar from './NavBar';
import MainFeed from './post/MainFeed';
import CreatePost from './post/CreatePost';

// import { Link } from 'react-router-dom';


const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

  // let history = useNavigate()
  // if(!user) {
  //   history("/")
  // }



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



  //const [page, setPage] = useState("/")

  //function handleDelete(id){
    // const filteredAdventures = adventures.filter(adventure => adventure.id !== id)
  // setAdventures(filteredAdventures)
  //}


  return (
    <div>
    {/* <Router> */}
        <NavBar user={!user} setUser={setUser}/>
{/* if user exists  */}
        {user && <nav className="navbar2">
          <Link to="/CreatePosts"> Create A Post! </Link>
          <button className="navbar-button" onClick={handleLogOut}>Logout</button>
        </nav>
      }
      <Routes>
          <Route exact path="/" element={<LoginPage setUser={setUser}/>} />
          <Route path="/MainFeed" element={<MainFeed  user={user}/>} />
          <Route path="*" element={<ErrorPage/>} />

       </Routes>
    {/* </Router> */}
    </div>
  )
    };

export default App;
