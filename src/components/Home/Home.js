import React from 'react';
import About from '../About/About';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Pricing from '../Pricing/Pricing';
import Protfolio from '../Protfolio/Protfolio';
import Service from '../Service/Service';
import Video from '../Video/Video';
import YouTube from 'react-youtube';
import Contact from '../Contact/Contact';
const Home = () => {
    return (
        <div id="home">
            <Header></Header>
            <About></About>
            <Video></Video>
            <Service></Service>
            <Protfolio></Protfolio>
            <Pricing></Pricing>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;