import React from 'react'
import logofinal from '../assets/images/logofinal.bmp';
import "./Copyright.scss"

export const Copyright = () => {
  return (
    <React.Fragment>
    <div className='copyright'>
      <p>PUFI Copyright 2017 - Todos los derechos reservados</p>
      <img src={logofinal}/> 
    </div>
    </React.Fragment>
  )
}