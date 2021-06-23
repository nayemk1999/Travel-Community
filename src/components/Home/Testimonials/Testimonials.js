import React from 'react';
import Slider from "react-slick";
import './Testimonials.css'

const Testimonials = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className='mt-5 container p-5'>
            <h1 className='text-dark'>TESTIMONIALS</h1>
            <h5 className='text-dark'>Awesome experiences! Happy Customers!</h5>
            <div className='p-5'>
                <Slider {...settings}>
                    <div className='testimonial-1'>

                    </div>
                    <div className='testimonial-2'>
                    </div>
                    <div className='testimonial-3'>
                    </div>
                </Slider>
            </div>

        </div>
    );
};

export default Testimonials;