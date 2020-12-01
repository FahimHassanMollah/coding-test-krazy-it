import React from 'react';
import './HeaderMain.css'
import { Button, Col, Container, Row } from 'react-bootstrap';
import headerMainCover from '../../images/headerMainCover.png'
const HeaderMain = () => {
    return (
        <div>
        <Container>
            <Row style={{ paddingTop: "40px", paddingBottom: "40px" }} className="h-100">
                <Col md={6} className="d-flex align-items-center">
                    <div>
                        <h2 style={{ fontFamily: "YesevaOne-Regular", fontWeight: "600" }} className=" text-color">One stop block for everything IT</h2>
                        <p className="mt-3 text-color">We are your go to personalized tailor made IT solutions provider for Web & Mobile applications development, Cloud services, Networking, Content Creation, Infrastructure and anything else you can call IT!.</p>
                        <div className="pt-3">
                            <button className="pricing-btn">See Pricing</button>
                        </div>
                    </div>
                </Col>
                <Col md={6} className="text-center h-100">
                    <img className="w-100" src={headerMainCover} alt="" />
                </Col>
            </Row>
        </Container>
    </div>
    );
};

export default HeaderMain;