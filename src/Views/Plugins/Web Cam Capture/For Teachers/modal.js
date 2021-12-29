import React from 'react';
import Modal from 'react-modal';
import WebCamStreamVideoCapture from './WebCamStreamVideoCapture';

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
  

export default props => {
  const {
    title, isOpen, askToClose,
    onAfterOpen, onRequestClose, onChangeInput
  } = props;

  return (
    <Modal
      id="test"
      contentLabel="modalA"
      closeTimeoutMS={150}
      isOpen={isOpen}
      style={customStyles}
      onAfterOpen={onAfterOpen}
      onRequestClose={onRequestClose}>
      <h1 style = {{color : "#5777ba"}}>Record Video</h1>
      <div>Press <i>Start Capture</i> To Start Recording Video</div>
      <div>Press <i>Stop Capture</i> To Stop Recording Video</div>
      <div>Press <i>Download</i> To Download Recorded Video</div>
      <div className = "buttonNewTheme">
        <button onClick={askToClose}><i className="fa fa-times-circle-o fa-lg"></i><span style = {{paddingLeft : "15px", fontWeight : "bold"}}>Close</span></button>
      </div>
      <WebCamStreamVideoCapture />
    </Modal>
  );
}
