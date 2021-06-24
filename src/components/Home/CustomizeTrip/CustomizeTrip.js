import React from 'react';
import Slider from 'react-slick';
import { CustomizeTripData } from '../../SlideData/SlideData';
import CustomizeContent from './CustomizeContent';

const CustomizeTrip = () => {

    const settings = {
        className: "text-center",
        centerMode: true,
        infinite: true,
        centerPadding: "10px",
        slidesToShow: 3,
        speed: 500,
        rows: 1,
        slidesPerRow: 1
    };
    const h1Style = {
        fontSize: '2.5vw',
        fontWeight: '600',
        color: 'rgb(58, 58, 58)',
        textTransform: 'uppercase'
    }
    const pStyle = {
        fontSize: '1.5vw',
        fontWeight: '400',
        color: 'rgb(58, 58, 58)',
        textAlign: 'center'
    }
    return (
        <div className=' mt-5 pt-5 container'>
            <h1 style={h1Style}>CUSTOMISE YOUR TRIP</h1>
            <p style={pStyle}>Didn’t find what you were looking for? Have a look at our customized trips curated for your group and plan your next vacation with WanderOn!</p>
            <Slider {...settings}>
                {
                    CustomizeTripData.map(propsData => <CustomizeContent propsData={propsData} />)
                }
            </Slider>
        </div>
    );
};

export default CustomizeTrip;