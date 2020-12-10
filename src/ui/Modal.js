import styled, { css } from "styled-components";

const ModalWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.2s ease-in-out !important;
  pointer-events: none;
  ${props => props.show && css`
    opacity: 1;
    pointer-events: all;
  `};
`;

const ModalContent = styled.div`
  background-color: white;
  box-shadow: 1px 1px 5px 2px rgba(0, 0, 0, 0.4);
  border-radius: 6px;
  max-width: calc(100% - 60px);
  max-height: calc(100% - 60px);
  position: relative;
  overflow: hidden;
  .title {
    margin-top: 0;
  }
  .scroller {
    position: relative;
    padding: 30px;
    overflow: hidden;
    overflow-y: scroll;
    max-height: calc(100vh - 60px);
    .close {
        position: absolute;
        top: 10px;
        right: 10px;
        z-index: 1;
        font-size: 16px;
        font-weight: bold;
        cursor: pointer;
    }
  }
  ${(props) =>
    props.width &&
    css`
      width: ${props.width}px;
    `}
  ${(props) =>
    props.height &&
    css`
      height: ${props.height}px;
    `}
`;

function Modal(props) {
  return (
    <ModalWrapper show={props.show}>
      <ModalContent width={props.width} height={props.height}>
        <div className="scroller">
          <h2 className="title">Add new Book</h2>
          {props.children}
          <div className="close" onClick={props.close}>x</div>
        </div>
      </ModalContent>
    </ModalWrapper>
  );
}

export default Modal;
