import React from 'react';
import Explore from './Explore';
import './Explores.css'
const ExploreData =[
    {
        img: 'https://www.wanderon.in/svg/backpacking-trips.svg',
        title: 'Backpacking Trips'
    },
    {
        img: 'https://www.wanderon.in/svg/weekend-trips.svg',
        title: 'Weekend Trips'
    },
    {
        img: 'https://www.wanderon.in/svg/workcations.svg',
        title: 'Workcations Stays'
    },
    {
        img: 'https://www.wanderon.in/svg/scuba.svg',
        title: 'Adventure Courses'
    },
    {
        img: 'https://www.wanderon.in/svg/customised-trips.svg',
        title: 'Customised Trips'
    },
    {
        img: 'https://www.wanderon.in/svg/corporate-trips.svg',
        title: 'Corporate Trips'
    },
]
const Explores = () => {
    return (
        <div className='explores-container m-5'>
           <h1>Explore WanderOn</h1> 
           <div className="row">
               {
                  ExploreData.map(explore => <Explore explore={explore}/>) 
               }
           </div>
        </div>
    );
};

export default Explores;