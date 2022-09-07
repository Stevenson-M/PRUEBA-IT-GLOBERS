import React from 'react';
import "./Nabvar.scss";
import logo from '../assets/images/Logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartArrowDown, faCouch, faUmbrella, faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { faAccusoft } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';


export const Navbar = () => {
    return (
      <React.Fragment>
      <div className='navbar'>
      <img src={logo}  className='logo' /> 
         <ul className='menuProductos'>
              <li>  
                  <Link to="/puff"  className="product" >
                  <FontAwesomeIcon icon={faCouch} className="icon" />
                    PUFI PUFF
                  </Link>  
              </li>
  
              <li>
                  <Link to="rain"  className="product" >
                  <FontAwesomeIcon icon={faUmbrella} className="icon" />
                    PUFI RAIN
                  </Link>  
             </li>
  
              <li>    
                  <Link to="cart"  className="product" >
                  <FontAwesomeIcon icon={faCartArrowDown} className="icon" />
                    PUFI CART
                  </Link>  
             </li>
              
              <li>
                  <Link to="nap"  className="product" >
                  <FontAwesomeIcon icon={faAccusoft} className="icon" />
                    PUFI NAP
                  </Link>  
              </li>
  
          </ul> 
               <div className='usuario'>
                <p>MI CUENTA</p>
                <FontAwesomeIcon icon={faAngleDown} />
                <p>MI COMPRA</p>  
              </div>
      </div>






      </React.Fragment>
    )
  }