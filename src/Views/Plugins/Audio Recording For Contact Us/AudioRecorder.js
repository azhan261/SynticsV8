import React, { Component } from 'react'
import MicRecorder from 'mic-recorder-to-mp3';
import './AudioRecord.css'
import { createAudioFile } from '../../../Apis/apiForAudioSending';
import './Sass.scss'

const Mp3Recorder = new MicRecorder({ bitRate: 128 });
export default class AudioRecorder extends Component {
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

  handlePlay = () => {
    console.log('hi')
    if(document.getElementById('player').play() == true){
      console.log("hit play")
    }
    else{
      console.log("Zack")
    }
    const buttons = Array.from(document.querySelectorAll("button"));

    buttons.forEach(btn => {
      btn.addEventListener("click", () => {
        document.getElementById('player').pause();
        btn.classList.toggle("active");
      });
    });
  }

  render() {
    const { files } = this.state;
    return (
      <div>
        <div>
          <center>
          <audio src={this.state.blobURL}  controls="controls" className=""  />
          <div className="mt-4">
          <button className="btn border border-rounded border-danger" onClick={this.start} disabled={this.state.isRecording}><i className="fas fa-record-vinyl fa-lg" style={{color: 'red'}}></i><span style = {{color: 'red', fontWeight: 'bold'}}> Rec </span></button>
          <button className="btn border border-rounded" onClick={this.stop} disabled={!this.state.isRecording}><i className="fas fa-stop fa-lg"></i></button>
          <button className="btn border border-rounded" onClick={this.uploadFile.bind(this)}><i class="fas fa-upload fa-lg"></i></button>
          </div>
         </center>
          {/*}
          <div className="containerSass">
          <button className="btn btn-outline-primary">
            <div className="iconSass-container">
              <svg className="iconSass play">
                <use xlinkHref="#play" />
              </svg>
            </div>
            <div className="iconSass-container">
              <svg className="iconSass pause">
                <use xlinkHref="#pause" />
              </svg>
            </div>
          </button>
        </div>
    */}
        <div>
        <svg xmlns="http://www.w3.org/2000/svg" className="iconSass">
          <symbol id="play" viewBox="0 0 448 512">
            <path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z" />
          </symbol>
          <symbol id="pause" viewBox="0 0 448 512">
            <path d="M144 479H48c-26.5 0-48-21.5-48-48V79c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48
					48zm304-48V79c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48v352c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48z" />
          </symbol>
          <symbol id="plus" viewBox="0 0 448 512">
            <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67
					14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33
					32-32v-32c0-17.67-14.33-32-32-32z" />
          </symbol>
          <symbol id="minus" viewBox="0 0 448 512">
            <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33
					32-32v-32c0-17.67-14.33-32-32-32z" />
          </symbol>
          <symbol id="twitter" viewBox="0 0 512 512">
            <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452
					0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568
					130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3
					27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431
					13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258
					216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502
					12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273
					41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
          </symbol>
          <symbol id="codepen" viewBox="0 0 512 512">
            <path d="M502.285 159.704l-234-156c-7.987-4.915-16.511-4.96-24.571 0l-234 156C3.714 163.703 0 170.847 0
					177.989v155.999c0 7.143 3.714 14.286 9.715 18.286l234 156.022c7.987 4.915 16.511 4.96 24.571
					0l234-156.022c6-3.999 9.715-11.143 9.715-18.286V177.989c-.001-7.142-3.715-14.286-9.716-18.285zM278
					63.131l172.286 114.858-76.857 51.429L278 165.703V63.131zm-44 0v102.572l-95.429 63.715-76.857-51.429L234
					63.131zM44 219.132l55.143 36.857L44 292.846v-73.714zm190 229.715L61.714 333.989l76.857-51.429L234
					346.275v102.572zm22-140.858l-77.715-52 77.715-52 77.715 52-77.715 52zm22 140.858V346.275l95.429-63.715 76.857
					51.429L278 448.847zm190-156.001l-55.143-36.857L468 219.132v73.714z" />
          </symbol>
        </svg>
      </div>
        </div>
      </div>
    );
  }
}
