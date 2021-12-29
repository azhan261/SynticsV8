import React, { Component, useState } from 'react';
import Webcam from "react-webcam";

function WebCamCapture(props) {
    console.log(props.data)
    const [image,setImage]=useState('');
    const capture = React.useCallback(
        () => {
        const imageSrc = webcamRef.current.getScreenshot();
        setImage(imageSrc)
        });
    const videoConstraints = {
        width: 220,
        height: 200,
        facingMode: "user"
      };
      const webcamRef = React.useRef(null);
      return (
        <div className="webcam-container">
          <h1>Hi</h1>
        <Webcam
          audio={false}
          height={200}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          width={220}
          videoConstraints={videoConstraints}
        />
        <button 
        onClick={(e)=>{e.preventDefault();capture();}}>
        Capture</button>
        <div className="webcam-container">
        <div className="webcam-img">
        
        {image==''?<Webcam
        audio={false}
        height={200}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={220}
        videoConstraints={videoConstraints}
        />:<img src={image}/>}
        </div>
        </div>
      </div>
      )
}

export default WebCamCapture
