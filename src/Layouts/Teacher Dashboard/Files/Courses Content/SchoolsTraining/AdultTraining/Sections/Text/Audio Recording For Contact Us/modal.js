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
      <h1>{title}</h1>
      {/* <div>Press <i>Start Capture</i> To Start Recording Video</div>
      <div>Press <i>Stop Capture</i> To Stop Recording Video</div>
      <div>Press <i>Download</i> To Download Recorded Video</div> */}
      <button onClick={askToClose}>close</button>
      <WebCamStreamVideoCapture />
    </Modal>
  );
}
