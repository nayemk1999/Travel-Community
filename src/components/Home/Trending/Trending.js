import React from 'react';
import Slider from 'react-slick';
import { trendingData } from '../../SlideData/SlideData';
import './Trending.css'
import TrendingContent from './TrendingContent';
const Trending = () => {
    const settings = {
        className: "text-center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500,
        rows: 1,
        slidesPerRow: 1
    };
    return (
        <div className='container mt-3'>
            <h2 className='title'>Trending Trips</h2>
            <Slider {...settings}>
                {
                    trendingData.map(trending => <TrendingContent trending={trending}/>)
                }
            </Slider>
        </div>
    );
};

export default Trending;