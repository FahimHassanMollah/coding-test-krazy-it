import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Pricing.css';
const Pricing = () => {
    return (
        <div>
            <div id="pricing" className="background-img-pricing" style={{ backgroundColor: "#fafffd", paddingTop: "80px", paddingBottom: "50px" }}>
                <h2 className="text-center" style={{ fontFamily: "YesevaOne-Regular", fontWeight: "bold" }}>Choose Your Dedicated Team</h2>
                <div className="pricing py-5">
                    <Container>
                        <Row className="d-flex justify-content-center">
                            <Col md={6} lg={4} className="pricing py-3">
                                <div className="card mb-5 mb-lg-0">
                                    <div className="card-body">
                                        <h6 className="card-price text-center">$199</h6>
                                        <h6 className="text-uppercase text-center mt-1">For Basic</h6>

                                        <hr className="hidden-hr" style={{ color: "#3cedce", backgroundColor: "#3cedce" }} />
                                        <ul className=" ">

                                            <li >Homepage</li>
                                            <li>No Inner Page</li>
                                            <li>Community Access</li>
                                            <li className="">Asset file</li>
                                            <li className="">Source file</li>
                                            <li className="">Free Stock Photos</li>
                                            <li className="">10 Days Free Support</li>
                                            <li className="">24/7 Support</li>
                                        </ul>
                                        <div className="text-center">
                                            <a href="#" className="btn text-center ">Order Now</a>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col md={6} lg={4} className="pricing py-3">
                                <div className="card mb-5 mb-lg-0">
                                    <div className="card-body">
                                        <h6 className="card-price text-center">$399</h6>
                                        <h6 className="text-uppercase text-center mt-1">For Preferred</h6>

                                        <hr className="hidden-hr" style={{ color: "#3cedce", backgroundColor: "#3cedce" }} />
                                        <ul className=" ">

                                            <li>Homepage</li>
                                            <li>No Inner Page</li>
                                            <li>Community Access</li>
                                            <li className="">Asset file</li>
                                            <li className="">Source file</li>
                                            <li className="">Free Stock Photos</li>
                                            <li className="">20 Days Free Support</li>
                                            <li className="">24/7 Support</li>
                                        </ul>
                                        <div className="text-center">
                                            <a href="#" className="btn text-center">Order Now</a>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col md={6} lg={4} className="pricing py-3">
                                <div className="card mb-5 mb-lg-0">
                                    <div className="card-body">
                                        <h6 className="card-price text-center">$599</h6>
                                        <h6 className="text-uppercase text-center mt-1">For Beta</h6>

                                        <hr className="hidden-hr" style={{ color: "#3cedce", backgroundColor: "#3cedce" }} />
                                        <ul className=" ">

                                            <li>Homepage</li>
                                            <li>No Inner Page</li>
                                            <li>Community Access</li>
                                            <li className="">Asset file</li>
                                            <li className="">Source file</li>
                                            <li className="">Free Stock Photos</li>
                                            <li className="">30 Days Free Support</li>
                                            <li className="">24/7 Support</li>
                                        </ul>
                                        <div className="text-center">
                                            <a href="#" className="btn text-center">Order Now</a>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </div>
    );
};

export default Pricing;