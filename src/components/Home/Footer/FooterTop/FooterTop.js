import React from 'react';
import FooterTopCol from './FooterTopCol';



const noNamed = [
    { name: "We at WanderOn are a modern travel community that provides end to end travel packages in India and abroad. We design the best travel itineraries that encourage group traveling for like-minded people. Our services include road trips, trekking expeditions, corporate trips, and customized tour packages. On our trips, we ensure hassle-free traveling, top-notch accommodation and guided sightseeing that too in a budget that won’t burn a hole in your pocket. Just give us your dates and be ready to experience traveling like never before.", link: "" },
]
const QuickLinks = [
    { name: "Privacy Policy", link: "//google.com/map" },
    { name: "Cancellation Policy", link: "//google.com/map" },
    { name: "Terms & Conditions", link: "//google.com/map" },
    { name: "Disclaimer", link: "//google.com/map" },
]
const WeekendTrips = [
    { name: "Bir Billing", link: "/" },
    { name: "Chopta Tungnath", link: "/" },
    { name: "Kasol Kheerganga", link: "/" },
    { name: "Tirthan Valley", link: "/" },
    { name: "Manali Solang", link: "/" }
]
const HimalayanEscapades = [
    { name: "Kasol Manali", link: "/" },
    { name: "Parvati Valley", link: "/" },
    { name: "Bir Kasol", link: "/" },
    { name: "Mcleod Bir Tirthan", link: "/" },
    { name: "Mcleod Bir Barot", link: "/" },
    { name: "Kalpa Chitkul Shimla", link: "/" }
]
const BackpackingTrips = [
    { name: "Himachal Backpacking", link: "/" },
    { name: "Spiti Valley Trips", link: "/" },
    { name: "Ladakh Trips", link: "/" },
    { name: "Meghalaya Backpacking", link: "/" },
    { name: "Tawang Roadtrip", link: "/" },
    { name: "Bhutan Roadtrip", link: "/" },
]
const Blogs = [
    { name: "Beautiful Places to Visit in Spring in India", link: "/" },
    { name: "Workcations: The New Trend of Travel", link: "/" },
    { name: "Breathtaking Monasteries of Ladakh", link: "/" },
    { name: "Soul-Satisfying things to do in Spiti Valley", link: "/" },
    { name: "Mesmerising Waterfalls of Meghalaya to Visit", link: "/" },
]
const FooterTop = () => {

    return (
        <div style={{ backgroundColor: 'rgb(58, 58, 58)' }} className='mt-5 mb-5 p-5'>
            <div className='row'>
                <FooterTopCol key={1} menuTitle={"About"} menuItems={noNamed} />
                <div className='footerTop-content-1'>
                    <FooterTopCol key={2} menuTitle="Weekend Trips" menuItems={WeekendTrips} />
                    <FooterTopCol key={3} menuTitle="Himalayan Escapades" menuItems={HimalayanEscapades} />
                </div>
                <div className='footerTop-content-1'>
                    <FooterTopCol key={4} menuTitle="Backpacking Trips" menuItems={BackpackingTrips} />
                    <FooterTopCol key={5} menuTitle="Blogs" menuItems={Blogs} />
                </div>
                <FooterTopCol key={4} menuTitle="Quick Links" menuItems={QuickLinks} />
            </div>
        </div>
    );
};

export default FooterTop;