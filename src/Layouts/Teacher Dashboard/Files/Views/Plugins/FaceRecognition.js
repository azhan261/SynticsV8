
import React, { useRef, useEffect } from "react";
//import "./App.css";
import * as tf from "@tensorflow/tfjs";
// OLD MODEL
//import * as facemesh from "@tensorflow-models/facemesh";

// NEW MODEL
import * as facemesh from "@tensorflow-models/face-landmarks-detection";
import Webcam from "react-webcam";
import { drawMesh } from "./utilities";
//import createFaceRecognitions from "../../Apis/"

function FaceRecognition() {
    const webcamRef = useRef(null);
    const canvasRef = useRef(null);
  
    //  Load posenet
    const runFacemesh = async () => {
      // OLD MODEL
      // const net = await facemesh.load({
      //   inputResolution: { width: 640, height: 480 },
      //   scale: 0.8,
      // });
      // NEW MODEL
      const net = await facemesh.load(facemesh.SupportedPackages.mediapipeFacemesh);
      setInterval(() => {
        detect(net);
      }, 10);
    };
  
    const detect = async (net) => {
      if (
        typeof webcamRef.current !== "undefined" &&
        webcamRef.current !== null &&
        webcamRef.current.video.readyState === 4
      ) {
        // Get Video Properties
        const video = webcamRef.current.video;
        const videoWidth = webcamRef.current.video.videoWidth;
        const videoHeight = webcamRef.current.video.videoHeight;
  
        // Set video width
        webcamRef.current.video.width = videoWidth;
        webcamRef.current.video.height = videoHeight;
  
        // Set canvas width
        canvasRef.current.width = videoWidth;
        canvasRef.current.height = videoHeight;
  
        // Make Detections
        // OLD MODEL
        //       const face = await net.estimateFaces(video);
        // NEW MODEL
        const face = await net.estimateFaces({input:video});
        console.log(face, "checking");
       
        
        if (face.length == 0) {
          document.getElementById("checking").innerHTML = "Student not Active"
        }
        else{
          document.getElementById("checking").innerHTML = "Student Active"
        }
        
       
        // Get canvas context
        const ctx = canvasRef.current.getContext("2d");
        requestAnimationFrame(()=>{drawMesh(face, ctx)});
      }
    };
  
    useEffect(()=>{runFacemesh()}, []);
  
    return ( 
        <div>
        <div className = "mt-5 pt-4">
        {/* Content Wrapper */}
        <div id="content-wrapper" className="d-flex flex-column">
        {/* Main Content */}
        <div id="content">
          {/* Begin Page Content */}
          <div className="containerBlackDashboard-fluid">
            {/* Page Heading */}
            <h1 className="h3BlackDashboard mb-2 text-gray-800">Live Class</h1>
            {/* DataTales Example */}
            <div className="card shadow mb-4 text-center">
              <div className="card-header py-3" style = {{color : "white", backgroundColor : "#306EFF"}}>
                <h6 className="m-0 font-weight-bold text-white"></h6>
              </div>
              <div className="card-body">
              <h1 id = "checking" className="h3BlackDashboard mb-2 text-gray-800"></h1>
              <Webcam
            ref={webcamRef}
            
          />
  
          <canvas
            ref={canvasRef}
            style={{
              position: "absolute",
              marginLeft: "auto",
              marginRight: "auto",
              left: 0,
              right: 0,
              textAlign: "center",
              zindex: 9,
              width: 640,
              height: 480,
            }}
          />
          
              </div>
              
            </div>
          </div>
          {/* /.containerBlackDashboard-fluid */}
        </div>
        {/* End of Main Content */}
        {/* Footer */}
        <footer className="sticky-footer bg-white">
          <div className="containerBlackDashboard my-auto">
            <div className="copyright text-center my-auto">
              <span></span>
            </div>
          </div>
        </footer>
        {/* End of Footer */}
        </div>
        {/* End of Content Wrapper */}
        {/* End of Page Wrapper */}
              </div>
              </div>

  );
}

export default FaceRecognition
