import React from 'react';

const Explore = (props) => {
    const {img, title} = props.explore
    return (
        <div className='col-md-2 mt-5'>
            <img src={img} alt="" style={{height: '5vw'}}/>
            <div className='explore-content'>
                {title}
            </div>
        </div>
    );
};

export default Explore;