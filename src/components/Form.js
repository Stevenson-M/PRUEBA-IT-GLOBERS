import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
import "./Form.scss"

export const Suscribir = () => {
    const [state, handleSubmit] = useForm("xkneovgn");
    if (state.succeeded) {
        return <p className="form-positioning">Gracias por suscribirte!</p>;
    }
    return (
        
      <div className="form-positioning">
      <div className="subscription">
        <form onSubmit={handleSubmit}>
        <input
          className="input"
          id="email"
          type="email" 
          name="email"
          placeholder='Ingresa tu email'
        />
        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
        />
        <button type="submit" disabled={state.submitting} className='btn-send'>  <FontAwesomeIcon icon={faArrowAltCircleRight} className="icon" /></button>
      </form>
      </div>
      </div>
    );
  
}