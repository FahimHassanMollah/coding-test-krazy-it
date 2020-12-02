import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './About.css'
const About = () => {
    return (
        <div id="about" style={{backgroundColor:"rgb(250, 255, 253)"}} className="py-5 mt-5">
            <Container>
                <Row>
                    <Col md={12} >
                        <div className="text-left py-5" style={{ fontFamily: "YesevaOne-Regular", fontWeight: "" }}>
                            <h1 className="text-uppercase pb-3 " style={{color:"#151515", fontWeight: ""}}>WHAT IS KRAZY IT?</h1>
                            <p className="para">Krazy IT is an Australian based company that continually exceeds our clients’ expectations, with our uniquely designed services.</p>
                            <p className="para">Before providing a quote, we carefully evaluate your requirements, analysing and working together with you, to outline step by step checkpoints for developing exactly what you need.</p>
                            <p className="para">At Krazy IT our team has extensive experience, developed over two decades, so no matter what size your enterprise is, whether you are just starting out or have already blossomed into a well established company, we are capable of suiting all your IT needs.
                        </p>
                            <p className="para">Whether it’s creating a completely new business IT infrastructure or building your business from scratch, we’ve got you covered.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default About;