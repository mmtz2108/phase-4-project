import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import LoginPage from './components/pages/LoginPage'

const App = () => {
  // const [page, setPage] = useState("/")

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
