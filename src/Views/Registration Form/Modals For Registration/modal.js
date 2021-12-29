import React from 'react';
import Modal from 'react-modal';
import { WebcamCapture } from './Webcam';

const customStyles = {
    content: {
      top: '50%',
      height: "500px",
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
  

export default props => {
  console.log(props.data, "modal.js")
  const {
    title, referenceName ,isOpen, askToClose,
    onAfterOpen, onRequestClose, onChangeInput
  } = props;

  console.log(referenceName, "Reference name on Modal.js")

  return (
    <Modal
      id="test"
      contentLabel="modalA"
      closeTimeoutMS={150}
      isOpen={isOpen}
      style={customStyles}
      onAfterOpen={onAfterOpen}
      onRequestClose={onRequestClose}>
      <div className="buttonNewTheme text-right">
                        <button  className="btnSass play-pause buttonSass" style = {{fontWeight : "bold", height:"65px" , width: "65px"}}  onClick={askToClose}>
                        <i className="fa fa-times" ></i>
                        </button>
      </div>
      <div className = "text-center pt-5">
      <h1>Take a WebCam Selfie</h1>
      
      <WebcamCapture data={referenceName}/>
      
      </div>
      
      
    </Modal>
  );
}
