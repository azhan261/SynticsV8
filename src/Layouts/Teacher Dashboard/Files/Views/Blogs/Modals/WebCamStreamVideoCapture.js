import React from 'react'
import { useRef, useEffect } from 'react';
import ReactDOM from 'react-dom'
import Webcam from "react-webcam";
import { createAudioFile } from '../../../../../../Apis/apiForAudioSending';

function WebCamStreamVideoCapture() {
  
  useEffect(() => {
    const fetchItems = async function() {
        loadFiles()
      }
    fetchItems()
    }, []);
  const webcamRef = React.useRef(null);
  const mediaRecorderRef = React.useRef(null);
  const [filesSetting, setFilesSetting] = React.useState({files: [], file: '',});
  const [capturing, setCapturing] = React.useState(false);
  const [recordedChunks, setRecordedChunks] = React.useState([]);
  const handleStartCaptureClick = React.useCallback(() => {
    setCapturing(true);
    mediaRecorderRef.current = new MediaRecorder(webcamRef.current.stream, {
      mimeType: "video/webm"
    });
    mediaRecorderRef.current.addEventListener(
      "dataavailable",
      handleDataAvailable
    );
    mediaRecorderRef.current.start();
  }, [webcamRef, setCapturing, mediaRecorderRef]);
  const loadFiles = () => {
    fetch('/api/files')
      .then(res => res.json())
      .then(files => {
        if (files.message) {
          console.log('No Files');
          setFilesSetting({ files: [] })
        } else {
          setFilesSetting({ files })
        }
      });
  }


  const fileChanged = (data) => {
    //const f = event.target.files[0];
    //const test = this.state.blobURL
    //console.log(f)
    console.log(data, "testing")
    filesSetting.file = data
    uploadFile()
  }
  
  const deleteFile = (event) =>{
    event.preventDefault();
    const id = event.target.id;

    fetch('/api/files/'+id, {
      method: 'DELETE'
    }).then(res => res.json())
      .then(response => {
        console.log(response);
        if (response.success){
          loadFiles()
        }
        else alert('Delete Failed');
      })
  }
  
  

  const handleDataAvailable = React.useCallback(
    ({ data }) => {
      if (data.size > 0) {
        setRecordedChunks((prev) => prev.concat(data));
      }
    },
    [setRecordedChunks]
  );

  const handleStopCaptureClick = React.useCallback(() => {
    mediaRecorderRef.current.stop();
    setCapturing(false);
  }, [mediaRecorderRef, webcamRef, setCapturing]);

  const handleDownload = React.useCallback(() => {
    if (recordedChunks.length) {
      const blob = new Blob(recordedChunks, {
        type: "video/webm"
      });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      document.body.appendChild(a);
      a.style = "display: none";
      a.href = url;
      a.download = "react-webcam-stream-capture.webm";
      var file = new File([blob], "react-webcam-stream-capture.webm" , { type: blob.type })
      fileChanged(file)
      a.click();
      window.URL.revokeObjectURL(url);
      setRecordedChunks([30]);
    }
  }, [recordedChunks]);

  const createVideoRecordingFile = (todo) => fetch("https://syntics.co/video/create", {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(todo)
  }) 
  const handleClick = React.useCallback(() => {
   //createVideoRecordingFile()
  })

  const uploadFile = (event) => {
    //event.preventDefault();
    console.log(filesSetting.file)
    let data = new FormData();
    data.append('file', filesSetting.file);
    console.log(data)
    createAudioFile(data)
    /*
    fetch('/api/files', {
      method: 'POST',
      body: data
    }).then(res => res.json())
      .then(data => {
        if (data.success) {
          loadFiles();
        } else {
          alert('Upload failed');
        }
      });
      */
  }
  return (
    <>
    <div style = {{height : "250px"}}> 
      <Webcam audio={false} ref={webcamRef} />
      {capturing ? (
        <div className = "buttonNewTheme">
        <button  onClick={handleStopCaptureClick}><i className="fa fa-pause-circle-o fa-lg"></i><span style = {{paddingLeft : "15px", fontWeight : "bold"}}>Stop Recording</span></button>
        </div>
      ) : (
        <div className = "buttonNewTheme">
        <button onClick={handleStartCaptureClick}><i className="fa fa-play-circle-o fa-lg"></i><span style = {{paddingLeft : "15px", fontWeight : "bold"}}>Start Recording</span></button>
        </div>
       
      )}
      {recordedChunks.length > 0 && (
        <div className = "buttonNewTheme">
        <button onClick={handleDownload}><i className="fa fa-arrow-circle-o-down fa-lg"></i><span style = {{paddingLeft : "15px", fontWeight : "bold"}}>Download Recording</span></button>
        </div>
      )}
      </div>
    </>
  );
}

export default WebCamStreamVideoCapture
