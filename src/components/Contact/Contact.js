import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Contact = () => {
    return (
        <div id="ordernow" style={{paddingTop:"80px"}}>
            <div className="pt-5">
                <h1>Get in Touch!</h1>
                <p>Please use the form below to contact us. We look forward to working with you <br/>
                and will get back to you as soon as possible
                </p>
                <h5>For quick contact please call <span style={{color:"blueviolet"}}> 1300 520 889</span></h5>
            </div>
            <div class="container py-5">
                <Row className="d-flex justify-content-center">
                    <Col md={6}>
                  
       
       <div class="">
           <form role="form">
               <div className="form-group w-100">
                 
                   <input type="text" className="form-control form-control-lg"placeholder="Enter your name" name="name"/>
               </div>
               <div className="form-group w-100">
                   
                   <input type="text" className="form-control form-control-lg" placeholder="Enter your email" name="email"/>
               </div>
               <div className="form-group w-100">
                   
                   <input type="text" className="form-control form-control-lg" placeholder="Subject" name="sub"/>
               </div>
            
               <div className="form-group w-100">
                  
                   <textarea className="form-control form-control-lg"placeholder="How can we help you" name="notes" rows="6"></textarea>
               </div>
               <button className="pricing-btn">Send your message</button>

           </form>
       </div>
  
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Contact;