import React, { Component } from 'react'
import MicRecorder from 'mic-recorder-to-mp3';
import './AudioRecord.css'
import AudioTestingFunctional from './AudioTestingFunctional';
import FilesUploadComponent from './FileUploadComponent';
import FilesUploadFunctional from './FilesUploadFunctional';
import { createAudioFile } from '../../apiForAudioSending';

const Mp3Recorder = new MicRecorder({ bitRate: 128 });
export default class AudioRecorderForStudent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      files: [],
      file: '',
      isRecording: false,
      blobURL: '',
      isBlocked: false,
    }

    this.loadFiles = this.loadFiles.bind(this);
  }

  start = () => {
    if (this.state.isBlocked) {
      console.log('Permission Denied');
    } else {
      Mp3Recorder
        .start()
        .then(() => {
          this.setState({ isRecording: true });
        }).catch((e) => console.error(e));
    }
  };

  stop = () => {
    Mp3Recorder
      .stop()
      .getMp3()
      .then(([buffer, blob]) => {
        const blobURL = URL.createObjectURL(blob)
        console.log(blob)
        var file = new File([blob], "testing.mp3", { type: blob.type })
        this.fileChanged(file)
        this.setState({ blobURL, isRecording: false });
      }).catch((e) => console.log(e));
  };


  componentDidMount() {
    this.loadFiles();
    navigator.getUserMedia({ audio: true },
      () => {
        console.log('Permission Granted');
        this.setState({ isBlocked: false });
      },
      () => {
        console.log('Permission Denied');
        this.setState({ isBlocked: true })
      },
    );
  }

  loadFiles() {
    fetch('/api/files')
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
    //const f = event.target.files[0];
    //const test = this.state.blobURL
    //console.log(f)
    console.log(event)
    this.setState({
      file: event
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
    })
    /*
    .then(res => res.json())
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
        <div>
          <input type="file" onChange={this.fileChanged.bind(this)}/>
          <button onClick={this.uploadFile.bind(this)}>Upload</button>
          
          <button onClick={this.start} disabled={this.state.isRecording}>Record</button>
          <button onClick={this.stop} disabled={!this.state.isRecording}>Stop</button>
          <audio src={this.state.blobURL} controls="controls" />
        </div>
      </div>
    );
  }
}
