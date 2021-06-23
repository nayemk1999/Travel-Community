import React from 'react';
import Explores from '../Explore/Explores';
import Footer from '../Footer/Footer/Footer';
import FooterTop from '../Footer/FooterTop/FooterTop';
import Header from '../Header/Header';
import SocialReviews from '../SocialReviews/SocialReviews';
import TalkSection from '../TalkSection/TalkSection';
import Testimonials from '../Testimonials/Testimonials';
import Trending from '../Trending/Trending';
import { Widget } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';


const Home = () => {
    const icon = 'https://www.wanderon.in/wanderon-logo.svg'
    return (
        <div>
            <Header />
            <Explores />
            <Trending />
            <TalkSection />
            <Testimonials />
            <SocialReviews />
            <FooterTop />
            <Footer />
            <Widget
                subtitle="Please Enter Your Phone Number"
            />
        </div>
    );
};

export default Home;