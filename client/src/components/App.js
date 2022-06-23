import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import MainFeed from './pages/MainFeed';
import ErrorPage from './pages/ErrorPage';

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (user) {
    return <h2>Welcome, {user.username}!</h2>;
  } else {
    return <Login onLogin={setUser} />;
  }
}
  //const [page, setPage] = useState("/")

  //function handleDelete(id){
    // const filteredAdventures = adventures.filter(adventure => adventure.id !== id)
  // setAdventures(filteredAdventures)
  //}

  return (
    <div>
      <LoginPage />
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
