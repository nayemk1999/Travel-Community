import React from 'react';
import Carousels from '../../Carousels/Carousel/Carousels';
import { HimalayanData } from '../../SlideData/SlideData';

const HimalayanEscapades = () => {
    return (
        <div>
            <div className='container mt-3'>
            <h2 className='title'> Himalayan Escapades</h2>
               <Carousels HimalayanData={HimalayanData}/>
        </div>
        </div>
    );
};

export default HimalayanEscapades;