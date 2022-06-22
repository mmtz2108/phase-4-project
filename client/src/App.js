// import Home from "./pages/Home";
// import Register from "./pages/Register";
// import Login from "./pages/Login";


// import React, {useState} from 'react';
// import ReactDOM from 'react-dom';
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import NavBar from "./components/NavBar";

const App = () => {
  const [page, setPage] = useState("/")

  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<LoginPage />} />
          <Route path="" element={<MainFeed />} />
          <Route path="*" element={<ErrorPage/>} />

        </Routes>
      </Router>


      {/* <NavBar onChangePage={setPage} />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/Cart' element={<Cart />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Register' element={<Register />} />
      </Routes> */}
    </div>
  )
};

export default App;
