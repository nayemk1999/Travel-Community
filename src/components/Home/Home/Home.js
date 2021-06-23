import React from 'react';
import Explores from '../Explore/Explores';
import Header from '../Header/Header';
import Trending from '../Trending/Trending';

const Home = () => {
    return (
        <div>
            <Header/>
            <Explores/>
            <Trending/>
        </div>
    );
};

export default Home;