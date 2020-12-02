import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import YouTube from 'react-youtube';
import './Video.css'
const Video = () => {
    const opts = {
        height: '390',
        width: '540',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };
     function _onReady(event) {
      
        event.target.pauseVideo();
      }
    return (
        <div className="text-center" style={{backgroundColor:"#f5f5f5",paddingTop:"80px",paddingBottom:"100px"}}>
            <div className="text-center pb-3" style={{ fontFamily: "YesevaOne-Regular", fontWeight: "600" }}>
                <h1>Krazy Customer Stories</h1>
                <p>Learn about us from our Krazy beautiful customers around Australia.</p>
            </div>
            <Container>
                <Row>
                    <Col xl={6} className="pr-2">
                     <YouTube videoId="H_cE9lws--0" opts={opts}/>
                    </Col>
                    <Col xl={6}className="pk-2">
                     <YouTube videoId="x-U8eb_vuS0" opts={opts}  />
                    </Col>
                </Row>
            </Container>
        </div>
        
    );
};

export default Video;