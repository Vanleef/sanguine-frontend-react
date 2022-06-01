import React, { useState, useEffect } from 'react';
import '../App.css';
import './HeroSection.css';
import { Button } from './Button';
import ReactPlayer from 'react-player';
import { useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';


function HeroSection() {
  const {signed} = useAuth();
  const [isLogged, setIsLogged] = useState();

  function Private(Item, Item2) {
    if(Item==null) return signed ? <></> : <Item2/>;
    if(Item2==null) return signed ? <Item/> : <></>;

    return signed ? <Item/> : <Item2/>;
  };

  const registerButton = () => { 
    return (
      <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          onClick={routeRegistrar}
        >
          REGISTRAR
        </Button>
    );
  };
  

  let navigate = useNavigate();
  const routeSobre = () => {
    let path = '/sobre';
    navigate(path);
  }
  const routeRegistrar = () => {
    let path = '/sign-up';
    navigate(path);
  }

  useEffect(() => {
    if (signed) {
      setIsLogged(signed);
    }
    }, [signed, isLogged]);

  return (
    <div className='hero-container'>
      <h1>Sanguine</h1>
      <p>Seja um doador você também</p>
      <div className='hero-btns'>
        {Private(null, registerButton)}
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          onClick={routeSobre}
        >
          DÚVIDAS <i className='far fa-play-circle' />
        </Button>
      </div>

      <div>
        <ReactPlayer
          className='vplayer'
          url='videos/video-1.mp4'
          width='95%'
          height='85%'
          controls={true}
          autoPlay
        />
      </div>
    </div>
  );
}

export default HeroSection;
