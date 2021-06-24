import React from 'react';
import Carousels from '../../Carousels/Carousel/Carousels';
import { weekendTripsData } from '../../SlideData/SlideData';

const WeekendTrips = () => {
    return (
        <div className='container mt-3'>
            <h2 className='title'>Weekend Trips</h2>
               <Carousels weekendTripsData={weekendTripsData}/>
        </div>
    );
};

export default WeekendTrips;