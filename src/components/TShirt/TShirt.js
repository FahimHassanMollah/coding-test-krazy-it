import React, { useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
// import './TShirt.css';
import Modal from 'react-modal';
import tshirt from '../../images/tshirt.png';
import Draggable from 'react-draggable';
const TShirt = () => {
    const [text, setText] = useState("");
    const [modalIsOpen,setIsOpen] = useState(false);
    // const [position, setPosition] = useState("centered")
    function openModal() {
      setIsOpen(true);
    }
   
    function afterOpenModal() {
      // references are now sync'd and can be accessed.
    //   subtitle.style.color = '#f00';
    }
   
    function closeModal(){
      setIsOpen(false);
    }
    const modalText = (e) => {
      console.log(e.target.value);
      setText(e.target.value)
    }
    const customStyles = {
        content : {
          top                   : '50%',
          left                  : '50%',
          right                 : 'auto',
          bottom                : 'auto',
          marginRight           : '-50%',
          transform             : 'translate(-50%, -50%)'
        }
      };
      Modal.setAppElement('#root');
  
    return (
        <div>
            <Container>
                <h1 className="text-center">T Shirt</h1>
                <Row className="justify-content-center">
                    <Col md={6}>
                        <div className="image-container" >
                            <img className="" style={{width:"400px"}} src={tshirt} alt="" />
                          
                               <Draggable
                                defaultPosition={{x:0, y: -200}}
                               
                               >
                               <div className="centered" style={{color:"red",fontSize:"25px",cursor:"pointer"}}>{text}</div>
                               </Draggable>
                          
                         
                        
                        
                        </div>
                     
                        <div className="pt-3">
                        <Button onClick={openModal} className="px-3 py-2 mx-3 btn-success">Add Text</Button>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={8}>
                        <Modal
                            isOpen={modalIsOpen}
                            onAfterOpen={afterOpenModal}
                            onRequestClose={closeModal}
                            style={customStyles}
                            contentLabel="Example Modal"
                        >

                            <form>
                            <input onChange={modalText} type="text" class="form-control" placeholder="Enter Text" />
                               
                            </form>
                            <Button className="mt-2" onClick={closeModal}>Submit</Button>
                        </Modal>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default TShirt;