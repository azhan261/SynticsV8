import React, { Component } from 'react';
import Modal from 'react-modal';
import AudioRecorder from './AudioRecorder';



const MODAL_A = 'modal_a';
const MODAL_B = 'modal_b';

const DEFAULT_TITLE = 'Default title';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
  

  export default class ModalWorkingForAudioRecord extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          title1: DEFAULT_TITLE,
          currentModal: null,
          referenceName: this.props.data
        };
      }
    
      toggleModal = key => event => {
        event.preventDefault();
        if (this.state.currentModal) {
          this.handleModalCloseRequest();
          return;
        }
    
        this.setState({
          ...this.state,
          currentModal: key,
          title1: DEFAULT_TITLE
        });
      }
    
      handleModalCloseRequest = () => {
        // opportunity to validate something and keep the modal open even if it
        // requested to be closed
        this.setState({
          ...this.state,
          currentModal: null
        });
      }
    
      handleInputChange = e => {
        let text = e.target.value;
        if (text == '') {
          text = DEFAULT_TITLE;
        }
        this.setState({ ...this.state, title1: text });
      }
    
      handleOnAfterOpenModal = () => {
        // when ready, we can access the available refs.
        this.heading && (this.heading.style.color = '#5777ba');
      }
    render() {
        const { currentModal } = this.state;
    
        return (
          <div>
            
            <div className="buttonNewTheme mb-2">
                        <button type="submit" className="btnSass play-pause buttonSass" style = {{fontWeight : "bold", height: '110px', width: '110px'}}  onClick={this.toggleModal(MODAL_B)}>
                        <i className="fa fa-microphone fa-lg"></i> <br />Record Audio
                        </button>
                    </div>
           
            <Modal
              ref="mymodal2"
              id="test2"
              aria={{
                labelledby: "heading",
                describedby: "fulldescription"
              }}
              closeTimeoutMS={150}
              contentLabel="modalB"
              isOpen={currentModal == MODAL_B}
              //shouldCloseOnOverlayClick={false}
              onAfterOpen={this.handleOnAfterOpenModal}
              style={customStyles}
              onRequestClose={this.toggleModal(MODAL_B)}>
              <button className="btn" onClick={this.toggleModal(MODAL_B)}><i className="fa fa-times-circle-o"></i></button>
              <br />
              <h2  className = "mt-3" style = {{color: "#5777ba",}} id="heading" ref={h2 => this.heading = h2}>Record Your Audio</h2>
              <div id="fulldescription" tabIndex="0" role="document">
               <AudioRecorder  data={this.state.referenceName}/>
               {/* <div className="buttonNewTheme"> */}
               {/* </div> */}
               
              </div>
            </Modal>
          </div>
        );
      }
  }
  

