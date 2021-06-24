import React from 'react';
import '../../Carousels/Carousel/Carousels.css'

const CustomizeContent = (props) => {
    const { img, title} = props.propsData;

    const content = {
        width: "21vw",
        height: "17vw",
        backgroundImage: `linear-gradient(to top, rgb(58, 58, 58) 0%, rgba(58, 58, 58, 0.5) 15%, rgba(58, 58, 58, 0) 25%, rgba(58, 58, 58, 0) 100%), url(${img})`,
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        borderRadius: "1vw",
        overflow: "hidden",
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "center",
    }
    return (
        <div className='slide-container '>
            <div className='slide-content'>
                <div style={content}>
                    <div className='customize-content'>
                        {title}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomizeContent;