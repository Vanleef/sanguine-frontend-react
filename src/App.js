import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import SignUp from './components/pages/SignUp';
import Login from './components/pages/Login';
import Bancos from './components/pages/Bancos';
import Sobre from './components/pages/Sobre';
import { AuthProvider } from "./contexts/auth";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import useAuth from "./hooks/useAuth";

const Private = ({ Item }) => {
  const { signed } = useAuth();

  return signed > 0 ? <Item /> : <Login />;
};


function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <Navbar/>
          <Routes>
            <Route path='/' element={ <Home/>} />
            <Route path='/login' element={<Login />} />
            <Route path='/sign-up' element={<SignUp />} />
            <Route path='/bancos' element={<Bancos />} />
            <Route path='/sobre' element={<Sobre />} />
            <Route path='*' element={ <Home/>} />
          </Routes>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
