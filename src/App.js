import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import SignUp from './components/pages/SignUp';
import Login from './components/pages/Login';
import Bancos from './components/pages/Bancos';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';




function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/bancos' element={<Bancos />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
