import React from 'react';
import { ContentRain } from "./ContentRain";
import { ContentPuff } from "./ContentPuff";
import { ContentCart } from "./ContentCart";
import { ContentNap } from "./ContentNap";
import "./Content.scss"




export const Content = () => {
    return (
        <React.Fragment>

            <div className='productos'>
                <ContentRain />
                <ContentPuff />
                <ContentCart />
                <ContentNap />
            </div>

        </React.Fragment>
    )
}

