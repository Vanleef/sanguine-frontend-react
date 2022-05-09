import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Bem-vindo ao Sanguine!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Texto 1'
              label='Banco 1'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Texto 2'
              label='Banco 2'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Texto 3'
              label='Banco 3'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Texto 4'
              label='Banco 4'
              path='/bancos'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Texto 5'
              label='Banco 5'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
