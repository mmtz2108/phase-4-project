import React, { useState, useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import MainFeed from './pages/MainFeed';
import ErrorPage from './pages/ErrorPage';
import NavBar from './NavBar';

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);


  //const [page, setPage] = useState("/")

  //function handleDelete(id){
    // const filteredAdventures = adventures.filter(adventure => adventure.id !== id)
  // setAdventures(filteredAdventures)
  //}

  return (
    <div>
      <NavBar user={user} setUser={setUser}/>
      {user? <h2>Welcome</h2>: <LoginPage setUser={setUser}/>}
      {/* <Router>
        <Routes>
          
          <Route exact path="/" element={<LoginPage />} />
          {/* <Route path="" element={<MainFeed />} /> */}
          {/* <Route path="*" element={<ErrorPage/>} /> */}

        {/* </Routes>
      </Router> */} 
      
    </div>
  )
    };

export default App;
