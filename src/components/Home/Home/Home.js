import React from 'react';
import Explores from '../Explore/Explores';
import Header from '../Header/Header';
import TalkSection from '../TalkSection/TalkSection';
import Trending from '../Trending/Trending';

const Home = () => {
    return (
        <div>
            <Header/>
            <Explores/>
            <Trending/>
            <TalkSection/>
        </div>
    );
};

export default Home;