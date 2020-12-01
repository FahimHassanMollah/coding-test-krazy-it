import React from 'react';
import About from '../About/About';
import Header from '../Header/Header';
import Protfolio from '../Protfolio/Protfolio';
import Service from '../Service/Service';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <About></About>
            <Service></Service>
            <Protfolio></Protfolio>
        </div>
    );
};

export default Home;