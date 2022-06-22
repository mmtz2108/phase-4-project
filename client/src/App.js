import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import LoginPage from './components/pages/LoginPage'
import MainFeed from './components/pages/MainFeed';
import ErrorPage from './components/pages/ErrorPage';

const App = () => {
  // const [page, setPage] = useState("/")

  function handleDelete(id){
    // const filteredAdventures = adventures.filter(adventure => adventure.id !== id)
  // setAdventures(filteredAdventures)
  }

  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<LoginPage />} />
          <Route path="" element={<MainFeed />} />
          <Route path="*" element={<ErrorPage/>} />

        </Routes>
      </Router>
    </div>
  )
};

export default App;
