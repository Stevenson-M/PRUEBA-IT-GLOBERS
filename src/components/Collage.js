import React from 'react'
import "./Collage.scss"
import G1 from '../assets/images/G1.jpg';
import G2 from '../assets/images/G2.jpg';
import G3 from '../assets/images/G3.jpg';
import G4 from '../assets/images/G4.jpg';
import G5 from '../assets/images/G5.jpg';
import G6 from '../assets/images/G6.jpg';

import {Suscribir} from "./Form";

export const Collage = () => {
  return (
    <React.Fragment>
    <div className='granContenedor'>
      <div id="texto">
        <h1 className='text'>INSTAGRAM</h1>
        <h2>#ESPUFI</h2>
      </div>

      <div className="contenedorDeImagenes">
        <img id="imgCol" src={G1}></img>
        <img id="imgCol" src={G2}></img>
        <img id="imgCol" src={G3}></img>
      </div>

      <div className="contenedorDeImagenes2">
        <img id="imgCol" src={G4}></img>
        <img id="imgCol" src={G5}></img>
        <img id="imgCol" src={G6}></img>
      </div>

      <div id="texto">
      <h1 className='text'>NEWSLETTER</h1><br/>
        <h2 >SUSCRIBETE  </h2>
        <p>Y enterate de todas las novedades</p>
        </div>
        <Suscribir/>


    </div>
    </React.Fragment>
  );
}

