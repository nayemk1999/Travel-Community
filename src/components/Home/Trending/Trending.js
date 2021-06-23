import React from 'react';
import Slider from 'react-slick';
import './Trending.css'
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
        <div className='bg-dark container'>
            <h2 className=''>Trending Trips</h2>
            <Slider {...settings}>
                <div className='first-content'>
                    <div className='d-flex'>
                        <img src="https://www.wanderon.in/svg/features/camping.svg" alt="" />
                        "comping"
                    </div>
                </div>
                <div>
                    <h3>2</h3>
                </div>
                <div>
                    <h3>3</h3>
                </div>
                <div>
                    <h3>4</h3>
                </div>
                <div>
                    <h3>5</h3>
                </div>
                <div>
                    <h3>6</h3>
                </div>
                <div>
                    <h3>7</h3>
                </div>
                
            </Slider>
        </div>
    );
};

export default Trending;