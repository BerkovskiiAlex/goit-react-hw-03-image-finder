import { Component } from 'react';
import { CloseButton, ModalContent, ModalWrapper } from './Modal.styled';

export class Modal extends Component {
  timeotID = null;
  intervalID = null;

  componentDidMount() {
    //Встановлюємо слухач подій, а саме натискання клавіш
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    console.log('Component was deleted');
    //Видаляємо слухача
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  onBackdropClick = e => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };
  handleKeyDown = e => {
    if (e.key === 'Escape') {
      console.log(e.key);
      this.props.onClose();
    }
  };
  render() {
    return (
      <ModalWrapper onClick={this.onBackdropClick}>
        <ModalContent>
          <>
            <h1>Modal</h1>
            <hr />
          </>
          <CloseButton onClick={this.props.onClose}>×</CloseButton>
          {this.props.children}
        </ModalContent>
      </ModalWrapper>
    );
  }
}

// .Overlay {
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100vw;
//   height: 100vh;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background-color: rgba(0, 0, 0, 0.8);
//   z-index: 1200;
// }

// .Modal {
//   max-width: calc(100vw - 48px);
//   max-height: calc(100vh - 24px);
// }
