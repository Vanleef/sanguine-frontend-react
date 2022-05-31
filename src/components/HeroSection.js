import React from 'react';
import '../App.css';
import './HeroSection.css';
import { Button } from './Button';
import ReactPlayer from 'react-player';
import { useNavigate } from 'react-router-dom';


function HeroSection() {
  let navigate = useNavigate();
  const routeSobre = () => {
    let path = '/sobre';
    navigate(path);
  }
  const routeRegistrar = () => {
    let path = '/sign-up';
    navigate(path);
  }

  return (
    <div className='hero-container'>
      <h1>Sanguine</h1>
      <p>Seja um doador você também</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          onClick={routeRegistrar}
        >
          REGISTRAR
        </Button>
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
