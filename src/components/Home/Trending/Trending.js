import React from 'react';
import Carousels from '../../Carousels/Carousel/Carousels';
import { trendingData } from '../../SlideData/SlideData';
const Trending = () => {
    return (
        <div className='container mt-3'>
            <h2 className='title'>Trending Trips</h2>
               <Carousels trendingData={trendingData}/>
        </div>
    );
};

export default Trending;