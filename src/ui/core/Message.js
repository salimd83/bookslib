import styled, { css } from "styled-components";

const PStyled = styled.p`
  padding: 10px;
  border: 1px solid lightGray;
  background-color: #f0f0f0;
  border-radius: 6px;
  ${(props) =>
    props.type === "error" &&
    css`
      border-color: transparent;
      background-color: Tomato;
      color: white;
    `};
  ${(props) =>
    props.type === "success" &&
    css`
      border-color: transparent;
      background-color: YellowGreen;
      color: white;
    `};
`;

function Message({ text, type }) {
  return (
    <>
      {text && (
        <PStyled type={type} className={type}>
          {text}
        </PStyled>
      )}
    </>
  );
}

export default Message;
