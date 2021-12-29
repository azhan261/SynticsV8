import React, { useState, useEffect, useRef, Component } from 'react'
import { Editor } from '@tinymce/tinymce-react';
import { Formik, FormikConsumer, useFormik } from 'formik'
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import { useRouteMatch, useHistory, useLocation,  useParams } from "react-router-dom";
import { getAudioFile } from '../../../../../../Apis/apiForAudio';
import { createAudioFile } from '../../../../../../Apis/apiForAudio';


function CourseContentAdultDrawingModule() {
  let {id} = useParams()
  const location = useLocation();
  const editorRef = useRef(null);
  const history = useHistory()
  const [files, setFiles] = useState([])
  const [file, setFile] = useState()
  const [filesNewName, setFilesNewName] = useState(id)
  const [newName, setNewName] = useState([])

  const fileChanged = (e) => {
    var testingFileChange  = e.target.files[0]
    //testingFileChange.name = "hi"
    var file = testingFileChange;
    var blob = file.slice(0, file.size, file.type);
    var random = Math.floor(Math.random() * 100000) + 100
    var settingName = id + random + file.name 
    var newFile = new File([blob], settingName, {type: file.type});
    setNewName(settingName)
    console.log(newFile)
    const f = newFile
    setFile(f)
  }


 const onEditiorClick = () => {
   
  }

 const uploadFile = (e) => {
    e.preventDefault();
    let data = new FormData();
    data.append('file', file);
    console.log(file)
    console.log(data)
    //createAudioFile(data)
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

    return (
<>
<div>
<div >
{/* Content Wrapper */}
<div id="content-wrapper" className="d-flex flex-column">
{/* Main Content */}
<div id="content">
  {/* Begin Page Content */}
  <div className="containerBlackDashboard-fluid">
    {/* Page Heading */}
    <h1 className="h3BlackDashboard text-gray-800"></h1>
    {/* DataTales Example */}
    <div className="card shadow text-center">
      <div className="card-header py-3" style = {{color : "white", backgroundColor : "#306EFF"}}>
        <h6 className="m-0 font-weight-bold text-white"></h6>
      </div>
      <div className="card-body">
      <input type="file" onChange={(e) => fileChanged(e)}/>
        <button onClick={(e) => uploadFile(e)}>Upload</button>
      </div>
      <div className="card-body">
        {onEditiorClick()}
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
      </>
    )
}

export default CourseContentAdultDrawingModule;
