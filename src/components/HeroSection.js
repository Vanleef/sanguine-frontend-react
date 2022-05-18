import React from 'react';
import '../App.css';
import './HeroSection.css';
import { Button } from './Button';
import ReactPlayer from 'react-player';


function HeroSection() {
  return (
    <div className='hero-container'>
      <h1>Sanguine</h1>
      <p>Seja um doador você também</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          REGISTRAR
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          onClick={console.log('hey')}
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
          autoplay
        />
      </div>
    </div>
  );
}

export default HeroSection;
