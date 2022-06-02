import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import useAuth from "../hooks/useAuth";


const Navbar = ()=> {

  const {signed, signout} = useAuth();
  const [isLogged, setIsLogged] = useState();
  
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  
  function Private(Item, Item2) {
    if(Item==null) return signed ? <></> : <Item2/>;
    if(Item2==null) return signed ? <Item/> : <></>;

    return signed ? <Item/> : <Item2/>;
  };
  const Bancos = () => {
    return(
      <li className='nav-item'> <Link to='/bancos' className='nav-links' onClick={closeMobileMenu}>Bancos</Link>
      </li>
  );
  }

  const LogoutButton = () => {
    return (
    // const msg = "Olá, " + userName;
    // <h3>{msg}</h3>
    <Link to='/'> {button && <Button onClick={logout} buttonStyle='btn--outline'>Sair</Button>}</Link>
    );
  }

  const LoginButton = () => {
    return (
    <Link to='/login'> {button && <Button buttonStyle='btn--outline'>Entrar</Button>}</Link>
    );
  }

  const ProfileButton = () => {
    return (
    <Link to='/perfil'> {button && <Button buttonStyle='btn--outline'>Perfil</Button>}</Link>
    );
  }


  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  async function logout(){
    await signout();
    setIsLogged(!signed);
    alert("Logout Efetuado");
  }


  useEffect(() => {
    showButton();
  },);

  useEffect(() => {
  if (signed) {
    setIsLogged(signed);
  }
  }, [signed, isLogged]);

  window.addEventListener('resize', showButton);


  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <div className="login-logo">
            <img
              src='/images/logo.png' alt="logo"
            />
          </div>

          <Link to='/' className='navbar-logo' src="images/logo.png" onClick={closeMobileMenu}>

            <i class='fab fa-typo3' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link
                to='/'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Início
              </Link>
            </li>
            {Private(Bancos, null)}
            <li className='nav-item'>
              <Link
                to='/sobre'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Mais
              </Link>
            </li>
          </ul>
          {Private(ProfileButton, LoginButton)}
          {Private(LogoutButton, null)}
          
        </div>
      </nav>
    </>
  );
  
}

export default Navbar;
