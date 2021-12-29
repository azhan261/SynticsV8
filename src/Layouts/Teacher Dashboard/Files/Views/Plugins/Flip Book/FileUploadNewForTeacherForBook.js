import React, { useState, useEffect, useRef, Component } from 'react'
import { Editor } from '@tinymce/tinymce-react';
import { Formik, FormikConsumer, useFormik } from 'formik'
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import { useRouteMatch, useHistory, useLocation,  useParams } from "react-router-dom";
import { createAudioFile } from "../../../Apis/apiForAudio"
import EditorComponent from './EditorComponent';



class FileUploadNewForTeacherForBook extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.id)
    console.log(window.location.pathname)
    var PathName = window.location.pathname
    var findingIndex = PathName.indexOf("teacher")
    var UrlId = PathName.slice((findingIndex + 18), PathName.length)
    this.state = {
      files: [],
      file: '',
      filesNewName: UrlId,
      newName: '',
    }
    console.log(this.state.filesNewName)
    //let {id} = this.props.match.params
    //console.log(this.state.filesNewName.id)
    this.loadFiles = this.loadFiles.bind(this);
  }

  componentDidMount() {
    this.loadFiles();
  }

  loadFiles() {

    fetch('https://syntics.co/api/files')
      .then(res => res.json())
      .then(files => {
        if (files.message) {
          console.log('No Files');
          this.setState({ files: [] })
        } else {
          this.setState({ files })
        }
      });
  }

  fileChanged(event) {
    var testingFileChange  = event.target.files[0]
    //testingFileChange.name = "hi"
    var file = testingFileChange;
    var blob = file.slice(0, file.size, file.type);
    var random = Math.floor(Math.random() * 100000) + 100
    this.state.newName = this.state.filesNewName  + random + file.name 
    var newFile = new File([blob], this.state.newName, {type: file.type});
    console.log(newFile)
    const f = newFile
    this.setState({
      file: f
    });
  
  }

  deleteFile(event) {
    event.preventDefault();
    const id = event.target.id;

    fetch('https://syntics.co/api/files/'+id, {
      method: 'DELETE'
    }).then(res => res.json())
      .then(response => {
        console.log(response);
        if (response.success) this.loadFiles()
        else alert('Delete Failed');
      })
  }
  onEditiorClick() {
    return(
      <div>
        <EditorComponent data={this.state.newName} />
      </div>
    )
  }
  uploadFile(event) {
    event.preventDefault();
    let data = new FormData();
    data.append('file', this.state.file);
    console.log(this.state.file)
    var TeacherId = this.state.filesNewName
    console.log(data)
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

  render() {
    const { files } = this.state;
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
      <input type="file" onChange={this.fileChanged.bind(this)}/>
        <button onClick={this.uploadFile.bind(this)}>Upload</button>
      </div>
      <div className="card-body">
        {this.onEditiorClick()}
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
}

export default FileUploadNewForTeacherForBook;
