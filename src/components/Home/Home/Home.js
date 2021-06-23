import React from 'react';
import Explores from '../Explore/Explores';
import Footer from '../Footer/Footer/Footer';
import FooterTop from '../Footer/FooterTop/FooterTop';
import Header from '../Header/Header';
import SocialReviews from '../SocialReviews/SocialReviews';
import TalkSection from '../TalkSection/TalkSection';
import Testimonials from '../Testimonials/Testimonials';
import Trending from '../Trending/Trending';

const Home = () => {
    return (
        <div>
            <Header/>
            <Explores/>
            <Trending/>
            <TalkSection/>
            <Testimonials/>
            <SocialReviews/>
            <FooterTop/>
            <Footer/>
        </div>
    );
};

export default Home;