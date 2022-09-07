import React from 'react';

import "./Content.scss"

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faChevronRight} from '@fortawesome/free-solid-svg-icons'
import purple from '../assets/images/productos/purple.jpg';
import beach from '../assets/images/productos/beach.jpg';


export const ContentPuff = () => {
    return (

<React.Fragment>
<div className='rain' id="puff">
<img src={purple} />
<h3>Pufi PUFF</h3>
<hr className='hr'></hr>
<p>Descripcion del producto.Este es un texto simulado</p>
<div>
    <p><FontAwesomeIcon icon={faChevronRight}/> VER MAS</p>
</div>
</div>
<img src={beach} className='imagen' />
</React.Fragment>

)
}
