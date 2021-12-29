
import React, { Component } from 'react';
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";

import MicRecorder from 'mic-recorder-to-mp3';



const Mp3Recorder = new MicRecorder({ bitRate: 128 });

class AudioPluginForAdmin extends Component {
    constructor(props){
        super(props);
        this.state = {
          isRecording: false,
          blobURL: '',
          isBlocked: false,
        };
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
            this.setState({ blobURL, isRecording: false });
          }).catch((e) => console.log(e));
      };
    
      componentDidMount() {
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
    
    render() {
        return (
            <>
            <div className="content">
              <Row>
                <Col md="12">
                  <Card className="card-plain">
                    <CardHeader>Record your Audio</CardHeader>
                    <CardBody>
                      <div className="container">
                          <div>
                          <div className="App">
                            <button onClick={this.start} disabled={this.state.isRecording}>Record</button>
                            <button onClick={this.stop} disabled={!this.state.isRecording}>Stop</button>
                            <audio src={this.state.blobURL} controls="controls" />
                        </div>
                          </div>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </div>
          </>
        );
    }
}

export default AudioPluginForAdmin;