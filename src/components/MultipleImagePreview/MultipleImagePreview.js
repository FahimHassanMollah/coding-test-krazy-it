import React, { useState } from 'react';
import NavBar from '../NavBar/NavBar';
import ImageUploading from 'react-images-uploading';
import { Button, Card, CardColumns, Col, Container, Row } from 'react-bootstrap';
import './MultipleImagePreview';
const MultipleImagePreview = () => {
    const [images, setImages] = useState([]);
    const maxNumber = 69;
    const onChange = (imageList, addUpdateIndex) => {
        // data for submit
        console.log(imageList, addUpdateIndex);
        setImages(imageList);
    };

    return (
        <div className="d-flex justify-content-center" style={{backgroundColor:"#f2f2f2",height:"100vh"}}>
          
          
            <div className="apps h-100 " style={{overflowY:"scroll"}}>
                <div>
                <h1 className="text-center">Multiple images input with preview.</h1>
                <ImageUploading
                    multiple
                    value={images}
                    onChange={onChange}
                    maxNumber={maxNumber}
                    dataURLKey="data_url"
                >
                    {({
                        imageList,
                        onImageUpload,
                        onImageRemoveAll,
                        onImageUpdate,
                        onImageRemove,
                        isDragging,
                        dragProps,
                    }) => (
                            // write your building UI
                            <div className="upload__image-wrapper ">
                                <Container>
                                    <Row className="d-flex justify-content-center">
                                        <Col md={6}>
                                            <Button
                                                className=""
                                                style={isDragging ? { color: 'red' } : undefined}
                                                onClick={onImageUpload}
                                                {...dragProps}
                                            >
                                                Click or Drop here Images
                                             </Button>
                                      &nbsp;
                                            {
                                                images.length > 0 && <Button onClick={onImageRemoveAll}>Remove all images</Button>
                                            }
                                        </Col>
                                    </Row>
                                </Container>
                                <Container style={{}}>
                                    <Row>
                                        <CardColumns>
                                        {imageList.map((image, index) => (
                                            <Card className="py-3">
                                                <div key={index} className="image-item">
                                                    <img src={image['data_url']} alt="" width="100" />
                                                    <div className="image-item__btn-wrapper">
                                                        <Button className="btn-success mx-2" onClick={() => onImageUpdate(index)}>Update</Button>
                                                        <Button className="btn-danger mx-2" onClick={() => onImageRemove(index)}>Remove</Button>
                                                    </div>
                                                </div>
                                            </Card>
                                        ))}
                                        </CardColumns>
                                        {/* {imageList.map((image, index) => (
                                            <Col md={4}>
                                                <div key={index} className="image-item">
                                                    <img src={image['data_url']} alt="" width="100" />
                                                    <div className="image-item__btn-wrapper">
                                                        <Button className="btn-success mx-2" onClick={() => onImageUpdate(index)}>Update</Button>
                                                        <Button className="btn-danger mx-2" onClick={() => onImageRemove(index)}>Remove</Button>
                                                    </div>
                                                </div>
                                            </Col>
                                        ))} */}
                                    </Row>
                                </Container>
                                {/* {imageList.map((image, index) => (
                                    <div key={index} className="image-item bg-danger">
                                        <img src={image['data_url']} alt="" width="100" />
                                        <div className="image-item__btn-wrapper">
                                            <Button className="btn-success mx-2" onClick={() => onImageUpdate(index)}>Update</Button>
                                            <Button className="btn-danger mx-2" onClick={() => onImageRemove(index)}>Remove</Button>
                                        </div>
                                    </div>
                                ))} */}
                            </div>
                        )}
                </ImageUploading>
                </div>
            </div>
            </div>
      
    );
};

export default MultipleImagePreview;