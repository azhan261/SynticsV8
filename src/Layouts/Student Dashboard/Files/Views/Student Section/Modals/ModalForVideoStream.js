import React, { Component } from 'react';
import Modal from 'react-modal';
import AnswerVideo from '../AnswerVideo';


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
  

export default class ModalForVideoStream extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          title1: DEFAULT_TITLE,
          currentModal: null
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
        this.heading && (this.heading.style.color = '#F00');
      }
    render() {
        const { currentModal } = this.state;
    
        return (
          <div>
          
            
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
              shouldCloseOnOverlayClick={false}
              onAfterOpen={this.handleOnAfterOpenModal}
              style={customStyles}
              onRequestClose={this.toggleModal(MODAL_B)}>
              <h1 id="heading" ref={h1 => this.heading = h1}>This is the modal 2!</h1>
              <div id="fulldescription" tabIndex="0" role="document">
               <AnswerVideo />
               <button onClick={this.toggleModal(MODAL_B)}>close</button>
              </div>
            </Modal>
          </div>
        );
      }
  }
  
