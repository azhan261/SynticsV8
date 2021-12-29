import React, { Component } from 'react';
import logo from '../logo.svg';
import MicRecorder from 'mic-recorder-to-mp3';
import '../style/App.css';


const Mp3Recorder = new MicRecorder({ bitRate: 128 });
class App extends Component {
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
        var file = new File([blob], "sasas.mp3", { type: blob.type })
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
  }

  render() {
    const { files } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-content">
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
          <button onClick={this.start} disabled={this.state.isRecording}>Record</button>
          <button onClick={this.stop} disabled={!this.state.isRecording}>Stop</button>
          <audio src={this.state.blobURL} controls="controls" />
        </div>
      </div>
    );
  }
}

export default App;
