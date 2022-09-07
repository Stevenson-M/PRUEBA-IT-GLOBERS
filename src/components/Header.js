import React from 'react';
import "./Header.scss";
import { Navbar } from './Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleDot } from '@fortawesome/free-solid-svg-icons'


export const Header = () => {
    return (
        <React.Fragment>
            <div className='fondo'>
                <Navbar />

                <div className='titulo'>
                    <h1>ESTAR CÓMODO,<br/> NUNCA FUE TAN FÁCIL.</h1>
                </div>

                <div className='btn'>
                    <button>SHOP</button>
                </div>

                <div className='btns'>

                <FontAwesomeIcon icon={faCircleDot} className="icons iconx" />
                <FontAwesomeIcon icon={faCircleDot} className="icons" />
                <FontAwesomeIcon icon={faCircleDot} className="icons" />
                </div>

            </div>
        </React.Fragment>
    )
}