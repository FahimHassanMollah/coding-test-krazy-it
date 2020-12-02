import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Service.css';
import one from '../../images/Group 65@2x.png';
import two from '../../images/Group 66@2x.png';
import three from '../../images/Group 69@2x.png';
import four from '../../images/Group 72@2x.png';
const Service = () => {

    return (
        <div id="service" className="text-white" style={{ backgroundColor: "#55404e",paddingTop:"99px" }}>
            <div className="text-center">
                <h1 className="pb-0 mb-0" style={{ fontFamily: "YesevaOne-Regular", fontWeight: "600" }}>What We Offer</h1>
                <div>
                    <p className="pt-2">We offer unlimited solutions to all your business needs. In the installation package we prepare search engine optimization, social <br /> media support, we provide corporate identity and graphic design services. Just to name a few more:</p>
                </div>
            </div>
            <div className="wave">
                <Container className="pt-5 ">
                    <Row className="d-flex justify-content-center">
                        <Col md={4} lg={3} className="mb-5 fards px-5 py-3">

                            <div className="">
                                <div style={{ height: '80px' }} className="text-center mb-4">

                                    <img className="rounded-circle" style={{ height: '80px', width: '80px' }} src={one} alt="ima" />
                                </div>
                                <div className="text-center mt-2">
                                    <p className="font-weight-bold">WEB DESIGN & DEVELOPMENT</p>

                                </div>
                            </div>

                        </Col>
                        <Col md={4} lg={3} className="mb-5 fards px-5 py-3 ">

                            <div className="">
                                <div style={{ height: '80px' }} className="text-center mb-4">

                                    <img className="rounded-circle" style={{ height: '80px', width: '80px' }} src={two} alt="ima" />
                                </div>
                                <div className="text-center mt-2">
                                    <p className="font-weight-bold">MOBILE APPS  DEVELOPMENT</p>

                                </div>
                            </div>

                        </Col>
                        <Col md={4} lg={3} className="mb-5 fards px-5 py-3">

                            <div className="">
                                <div style={{ height: '80px' }} className="text-center mb-4">

                                    <img className="rounded-circle" style={{ height: '80px', width: '80px' }} src={three} alt="ima" />
                                </div>
                                <div className="text-center mt-2">
                                    <p className="font-weight-bold">CORE IT <br /> SOLUTION</p>

                                </div>
                            </div>

                        </Col>
                        <Col md={4} lg={3} className="mb-5 fards px-5 py-3">

                            <div className="">
                                <div style={{ height: '80px' }} className="text-center mb-4">

                                    <img className="rounded-circle" style={{ height: '80px', width: '80px' }} src={four} alt="ima" />
                                </div>
                                <div className="text-center mt-2">
                                    <p className="font-weight-bold"> SEARCH ENGINE OPTIMIZATION</p>

                                </div>
                            </div>

                        </Col>
                        <Col md={4} lg={3} className="mb-5 fards px-5 py-3">

                            <div className="">
                                <div style={{ height: '80px' }} className="text-center mb-4">

                                    <img className="rounded-circle" style={{ height: '80px', width: '80px' }} src={four} alt="ima" />
                                </div>
                                <div className="text-center mt-2">
                                    <p className="font-weight-bold"> SEARCH ENGINE OPTIMIZATION</p>

                                </div>
                            </div>

                        </Col>
                        <Col md={4} lg={3} className="mb-5 fards px-5 py-3">

                            <div className="">
                                <div style={{ height: '80px' }} className="text-center mb-4">

                                    <img className="rounded-circle" style={{ height: '80px', width: '80px' }} src={three} alt="ima" />
                                </div>
                                <div className="text-center mt-2">
                                    <p className="font-weight-bold">CORE IT <br /> SOLUTION</p>

                                </div>
                            </div>

                        </Col>
                        <Col md={4} lg={3} className="mb-5 fards px-5 py-3 ">

                            <div className="">
                                <div style={{ height: '80px' }} className="text-center mb-4">

                                    <img className="rounded-circle" style={{ height: '80px', width: '80px' }} src={two} alt="ima" />
                                </div>
                                <div className="text-center mt-2">
                                    <p className="font-weight-bold">WEB APPLICATION DEVELOPMENT</p>

                                </div>
                            </div>

                        </Col>
                        <Col md={4} lg={3} className="mb-5 fards px-5 py-3">

                            <div className="">
                                <div style={{ height: '80px' }} className="text-center mb-4">

                                    <img className="rounded-circle" style={{ height: '80px', width: '80px' }} src={one} alt="ima" />
                                </div>
                                <div className="text-center mt-2">
                                    <p className="font-weight-bold">MANAGED IT <br/> SERVICES</p>

                                </div>
                            </div>

                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Service;