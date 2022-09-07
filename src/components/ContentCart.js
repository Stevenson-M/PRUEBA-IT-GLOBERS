import React from 'react';

import "./Content.scss"

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faChevronRight} from '@fortawesome/free-solid-svg-icons'
import car from '../assets/images/productos/car.jpg';
import bag from '../assets/images/productos/bag.jpg';

export const ContentCart = () => {
    return (

<React.Fragment>
<img src={car} className='imagen' />
<div className='rain' id="cart">
    <img src={bag} />
    <h3>Pufi CART</h3>
    <hr className='hr'></hr>
    <p>Descripcion del producto.Este es un texto simulado</p>
    <div>
        <p><FontAwesomeIcon icon={faChevronRight}/> VER MAS</p>
    </div>
</div>
</React.Fragment>

)
}
