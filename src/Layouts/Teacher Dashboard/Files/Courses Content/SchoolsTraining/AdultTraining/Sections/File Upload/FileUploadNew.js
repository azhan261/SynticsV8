import React, { useState, useEffect, useRef, Component } from 'react'
import { Editor } from '@tinymce/tinymce-react';
import { Formik, FormikConsumer, useFormik } from 'formik'
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import { useRouteMatch, useHistory, useLocation,  useParams } from "react-router-dom";
import { createAudioFile } from '../../../../../Apis/apiForAudio';
import { getAudioFile } from '../../../../../Apis/apiForAudio';


class FileUploadNewForTeacher extends Component {
  constructor(props) {
    super(props);

    this.state = {
      files: [],
      file: ''
    }

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
    const f = event.target.files[0];
    this.setState({
      file: f
    });
  }

  deleteFile(event) {
    event.preventDefault();
    const id = event.target.id;

    fetch('/api/files/'+id, {
      method: 'DELETE'
    }).then(res => res.json())
      .then(response => {
        console.log(response);
        if (response.success) this.loadFiles()
        else alert('Delete Failed');
      })
  }

  uploadFile(event) {
    event.preventDefault();
    let data = new FormData();
    data.append('file', this.state.file);
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
        
        <div>
           {/* Content Wrapper */}
<div id="content-wrapper" className="d-flex flex-column">
{/* Main Content */}
<div id="content">
  {/* Begin Page Content */}
  <div className="containerBlackDashboard-fluid">
    {/* Page Heading */}
    <h1 className="h3BlackDashboard mb-2 text-gray-800">Emails</h1>
    
    {/* DataTales Example */}
    <div className="card shadow mb-4">
      <div className="card-header py-3">
        <h6 className="m-0 font-weight-bold text-primary">List Of Emails</h6>
      </div>
      <div className="card-body">
      <input type="file" onChange={this.fileChanged.bind(this)}/>
                    <button onClick={this.uploadFile.bind(this)}>Upload</button>
                    <table className="App-table">
                      <thead>
                        <tr>
                            <th>File</th>
                            <th>Uploaded</th>
                            <th>Size</th>
                            <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        {files.map((file, index) => {
                          var d = new Date(file.uploadDate);
                          return (
                            <tr key={index}>
                              <td><a href={`https://syntics.co/api/files/${file.filename}`}>{file.filename}</a></td>
                              <td>{`${d.toLocaleDateString()} ${d.toLocaleTimeString()}`}</td>
                              <td>{(Math.round(file.length/100) / 10)+'KB'}</td>
                              <td><button onClick={this.deleteFile.bind(this)} id={file._id}>Remove</button></td>
                            </tr>
                          )
                        })}
                      </tbody>
                    </table>
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
    );
  }
}

export default FileUploadNewForTeacher;
