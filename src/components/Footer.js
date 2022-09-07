import React from 'react';
import "./Footer.scss";
import logof from '../assets/images/footer.bmp';
import logo2 from '../assets/images/Logo2.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAccusoft, faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Link, Route, Switch } from 'react-router-dom';


export const Footer = () => {


    return (
        <React.Fragment>
            <div className='footer-container'>
                <div class='footer-links'>
                    <div className='footer-link-wrapper'>
                        <div class='footer-link-items'>
                            <div class='footer-logo'>
                            <img src={logo2} className="finalf" /> 
                            </div>
                        </div>
                        <div class='footer-link-items'>
                            <Link to='/'>PUFI RAIN</Link>
                            <Link to='/'>PUFI PUFF</Link>
                            <Link to='/'>PUFI CART</Link>
                            <Link to='/'>PUFI NAP</Link>

                        </div>
                    </div>
                    <div className='footer-link-wrapper'>
                        <div class='footer-link-items'>

                            <Link to='/'>CONTACTO</Link>
                            <Link to='/'>AYUDA</Link>
                            <Link to='/'>COMO COMPRAR</Link>
                            <Link to='/'>TERMINOS Y CONDICIONES</Link>
                        </div>
                        <div class='footer-link-items'>
                            <h2>COMPRA 100% SEGURA</h2>
                            <img src={logof} className="finalf" /> 

                        </div>
                        <div class='footer-link-items'>
                            <h2>SEGUINOS EN</h2>
                            <div class='social-icons'>
                                <FontAwesomeIcon icon={faFacebook} className="icon" />
                                <FontAwesomeIcon icon={faTwitter} className="icon"/>
                                <FontAwesomeIcon icon={faInstagram} className="icon" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </React.Fragment>
    )
}

