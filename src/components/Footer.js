import React, { useState, useEffect } from 'react';
import './Navbar.css';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {

    const [button, setButton] = useState(true);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                {button && <Button buttonStyle='btn--outline'>Registrar</Button>}
                <p className='footer-subscription-heading'>
                    {/* Registrar */}
                </p>
                <p className='footer-subscription-text'>
                    Registre-se para acessar mais informações sobre os bancos de sangue mais próximos de você
                </p>
                {/* <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Seu Email'
            />
          </form>
        </div> */}
            </section>
        </div>

    );
}

export default Footer;