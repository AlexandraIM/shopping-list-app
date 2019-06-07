import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const Overlay = styled.div`
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(0,0,0); 
  background-color: rgba(0,0,0,0.4); 
`;

const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  max-width: 100%;
  background: #fefefe;
  height: 400px;
  max-height: 100%;
  z-index: 1010;
  padding:10px;
`
const Close = styled.span`
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
  cursor: pointer;
`


const Modal = ({isShowing, hide, ...props}) => isShowing ? ReactDOM.createPortal(
  <React.Fragment>
    <Overlay />
    <StyledModal  aria-modal aria-hidden tabIndex={-1} role="dialog">
      <div >
          <Close aria-hidden="true" onClick={hide}>×</Close>
      </div>
      <div>
        {props.children}
      </div>
    </StyledModal>
  </React.Fragment>, document.body
) : null;

export default Modal;