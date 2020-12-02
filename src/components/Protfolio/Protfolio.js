import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import one from '../../images/one.jpg';
import two from '../../images/two.jpg';
import four from '../../images/four.jpg';
import five from '../../images/five.jpg';
import six from '../../images/six.jpg';
import seven from '../../images/seven.jpg';
import eight from '../../images/eight.jpg';
import nine from '../../images/nine.jpg';
import ten from '../../images/ten.jpg';
import elven from '../../images/eleven.jpg';
import twelve from '../../images/twelve.jpg';
import { Container, Row } from 'react-bootstrap';
const Protfolio = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };
    return (

        <Container className="" id="protfolio" style={{ paddingTop: "100px",paddingBottom:"80px" }}>
            <div className="text-center pb-5">
                <h2>Our Major Clients</h2>
                <p className="text-muted pt-2">Some of our largest backers, who continue to work with us and are extremely <br />
                   satisfied with our service delivery, playing a major part in jumpstarting their <br />
                   respective business’ overall infrastructure.
                   </p>
            </div>
            <Slider {...settings}>
                <div>
                    <img className="w-75" src={one} alt="" />
                </div>
                <div>
                    <img className="w-75" src={two} alt="" />
                </div>
                <div>
                    <img className="w-75" src={four} alt="" />
                </div>
                <div>
                    <img className="w-75" src={five} alt="" />
                </div>
                <div>
                    <img className="w-75" src={six} alt="" />
                </div>
                <div>
                    <img className="w-75" src={seven} alt="" />
                </div>
                <div>
                    <img className="w-75" src={eight} alt="" />
                </div>
                <div>
                    <img className="w-75" src={nine} alt="" />
                </div>
                <div>
                    <img className="w-75" src={ten} alt="" />
                </div>
                <div>
                    <img className="w-75" src={elven} alt="" />
                </div>
                <div>
                    <img className="w-75" src={twelve} alt="" />
                </div>

            </Slider>
        </Container>
    )
};

export default Protfolio;