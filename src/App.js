import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import SignUp from './components/pages/SignUp';
import Login from './components/pages/Login';
import Bancos from './components/pages/Bancos';
import Sobre from './components/pages/Sobre';
import Profile from './components/pages/Profile';
import { AuthProvider } from "./contexts/auth";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import useAuth from "./hooks/useAuth";


  const Private = (Item, Item2) => {
    const signed = useAuth();
    if(Item==null) return signed ? <></> : <Item2/>;
    if(Item2==null) return signed ? <Item/> : <></>;

    return signed ? <Item/> : <Item2/>;
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
            <Route path='/sign-up' element={<SignUp/>} />
            <Route path='/bancos' element={<Bancos />} />
            <Route path='/sobre' element={<Sobre />} />
            <Route path='/perfil' element={<Profile />} />
            <Route path='*' element={ <Home/>} />
          </Routes>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
