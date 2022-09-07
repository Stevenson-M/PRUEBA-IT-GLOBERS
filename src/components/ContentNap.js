import React from 'react';

import "./Content.scss"

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faChevronRight} from '@fortawesome/free-solid-svg-icons'
import pillow from '../assets/images/productos/pillow.jpg';
import nap from '../assets/images/productos/nap.jpg';

export const ContentNap = () => {
    return (

<React.Fragment>
<div className='rain' id="nap">
<img src={pillow} />
<h3>Pufi NAP</h3>
<hr className='hr'></hr>
<p>Descripcion del producto.Este es un texto simulado</p>
<div>
    <p><FontAwesomeIcon icon={faChevronRight}/> VER MAS</p>
</div>
</div>
<img src={nap} className='imagen' />
</React.Fragment>

)
}
