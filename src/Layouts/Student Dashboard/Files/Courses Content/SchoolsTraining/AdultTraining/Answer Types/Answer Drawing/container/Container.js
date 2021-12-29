import React, { useState, useEffect, useRef, Component } from 'react'
import html2canvas from 'html2canvas';
import { useRouteMatch, useHistory, useLocation,  useParams } from "react-router-dom";
import BoardForTeacher from '../board/Board';
import { createAudioFile } from '../../../../../../Apis/apiForAudioSending';
import './style.css';

function ContainerForStudents() {
    let{id} = useParams()
    const editorRef = useRef(null);
    const history = useHistory()
    const location = useLocation();
    const [files, setFiles] = useState([])
    const [file, setFile] = useState()
    const [filesNewName, setFilesNewName] = useState(id)
    const [newName, setNewName] = useState([])
    const [color, setColor] = useState("#000000")
    const [size, setSize] = useState("5")



        function takeshot(e) {
        let div =
            document.getElementById('photo');

        // Use the html2canvas
        // function to take a screenshot
        // and append it
        // to the output div
        html2canvas(div).then(
            function (canvas) {
                console.log(canvas)
                var snap = canvas
                var flatten = snap.getContext('2d');
                var img = snap.toDataURL();
                console.log(snap.toDataURL())
                var file = dataURItoBlob(img)
                //fileChanged(canvas)
                //var dataURL = canvas.toDataURL('image/jpeg', 0.5);
                //var blob = dataURItoBlob(dataURL);
                //var fd = new FormData(document.forms[0]);
                let data = new FormData(document.forms[0])
                data.append('file', file, location.state.refereceNameForDraw)
                //fd.append("canvasImage", blob);
                console.log(data)
                createAudioFile(data)
                /*
                canvas.toBlob(function(blob) {
                  var newImg = document.createElement('img'),
                      url = URL.createObjectURL(blob);
                
                  newImg.onload = function() {
                    // no longer need to read the blob so it's revoked
                    URL.revokeObjectURL(url);
                  };
                
                  newImg.src = url;
                  document.body.appendChild(newImg);
                  console.log(newImg)
                });
                */
            })
    }
    function dataURItoBlob(dataURI) {
      // convert base64/URLEncoded data component to raw binary data held in a string
      var byteString;
      if (dataURI.split(',')[0].indexOf('base64') >= 0)
          byteString = atob(dataURI.split(',')[1]);
      else
          byteString = unescape(dataURI.split(',')[1]);
      // separate out the mime component
      var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
      // write the bytes of the string to a typed array
      var ia = new Uint8Array(byteString.length);
      for (var i = 0; i < byteString.length; i++) {
          ia[i] = byteString.charCodeAt(i);
      }
      return new Blob([ia], {type:mimeString});
      }
    
    
    
    const fileChanged = (canvas) => {
        //var testingFileChange  = e.target.files[0]
        //testingFileChange.name = "hi"
        //var file = testingFileChange;
        var blob = canvas;
        var random = Math.floor(Math.random() * 100000) + 100
        var settingName = location.state.refereceNameForDraw
        var newFile = new File([blob], settingName, {type: 'image/png'});
        console.log(newFile)
        setNewName(settingName)
        console.log(newFile)
        //const f = newFile
        //setFile(f)
        uploadFile(newFile)
      }
  
     const uploadFile = (newFile) => {
        
        let data = new FormData();
        data.append('file', newFile);
        createAudioFile(data)
        /*
        fetch('/api/files', {
          method: 'POST',
          body: data
        }).then(res => res.json())
          .then(data => {
            if (data.success) {
              this.loadFiles();
            } else {
              alert('Upload failed');
            }
          });
          */
      }
      
    const changeColor = (params) => {
        setColor(params.target.value)
    }

    const changeSize = (params) => {
        setSize(params.target.value)
    }
    console.log(location.state)
    const handleBack = (e) => {
      history.push({
        pathname: `/student/view-question-type-drawing/${id}`,
        state: location.state
      })
    }
        return (
            <div className="containerWhiteBoard">
                
                <div class="tools-section">
                    <div className="color-picker-container">
                        Select Brush Color : &nbsp; 
                        <input className = "mt-2" type="color" value={color} onChange={(params) => changeColor(params)}/>
                    </div>

                    <div className="brushsize-container">
                    <span style ={{color: 'white'}}>Select Brush Size : &nbsp;</span>
                        <select value={size} onChange={(params) => changeSize(params)}>
                            <option> 5 </option>
                            <option> 10 </option>
                            <option> 15 </option>
                            <option> 20 </option>
                            <option> 25 </option>
                            <option> 30 </option>
                        </select>
                    </div>
                    &nbsp;&nbsp;&nbsp;
                    <button onClick={(e) => takeshot(e)}>
                    Take Screenshot
                    </button>
                    <button onClick={(e) => handleBack(e)}>
                      Go Back to Answer
                    </button>

                </div>

                <div id="photo" class="board-container">
                    <BoardForTeacher color={color} size={size}></BoardForTeacher>
                </div>
                
            </div>
        )
    }

export default ContainerForStudents