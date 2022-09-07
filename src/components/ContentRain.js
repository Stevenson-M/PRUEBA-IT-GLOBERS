import React from 'react';

import "./Content.scss"

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faChevronRight} from '@fortawesome/free-solid-svg-icons'

import umbrella from '../assets/images/productos/umbrella.jpg';


export const ContentRain = () => {
    return (

<React.Fragment>
<div className='imagenUno'>
    <div className='btn_imagenUno'>
        <button>SHOP</button>
    </div>
</div>
<div className='rain' >

    <img src={umbrella} />
    <h3>PUFI RAIN</h3>
    <hr className='hr'></hr>
    <p>Descripcion del producto.Este es <br />un texto simulado</p>
    <div>
        <p><FontAwesomeIcon icon={faChevronRight}/> VER MAS</p>
    </div>
</div>
</React.Fragment>

)
}
