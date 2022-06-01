import React, { useState, useEffect } from 'react';
import './Navbar.css';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';


function Footer() {
    const [button, setButton] = useState(true);

    const { signed } = useAuth();
    const [isLogged, setIsLogged] = useState();

    function Private(Item, Item2) {
        if (Item == null) return signed ? <></> : <Item2 />;
        if (Item2 == null) return signed ? <Item /> : <></>;

        return signed ? <Item /> : <Item2 />;
    };

    const registerInfo = () => {
        return (
            <div>
                <Link to="/login">{button && <Button buttonStyle='btn--outline'>Registrar</Button>}
                </Link>
                <p className='footer-subscription-text'>
                    Registre-se para acessar mais informações sobre os bancos de sangue mais próximos de você
                </p>
            </div>
        );
    };

    const faqInfo = () => {
        return (
            <p className='footer-subscription-text'>
                Acesse a nossa página de Dúvidas para obter mais informações sobre o nosso projeto
            </p>
        );
    };


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

    useEffect(() => {
        if (signed) {
          setIsLogged(signed);
        }
        }, [signed, isLogged]);

    window.addEventListener('resize', showButton);

    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                {Private(faqInfo, registerInfo)}
            </section>
        </div>

    );
}

export default Footer;