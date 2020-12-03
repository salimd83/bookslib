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

function Message({ error, type }) {
  return (
    <>
      {error && (
        <PStyled type={type} className={type}>
          {error}
        </PStyled>
      )}
    </>
  );
}

export default Message;
