import styled, { css } from "styled-components";
import {Loading} from '../ui';

const ButtonStyled = styled.button`
  border: none;
  background-color: DodgerBlue;
  padding: 8px 20px;
  color: white;
  font-weight: bold;
  border-radius: 6px;
  font-size: 15px;
  cursor: pointer;
  ${(props) =>
    props.outline &&
    css`
      border: 1px solid DarkGray;
      background-color: transparent;
      color: black;
    `}
`;

function Button({ loading, ...rest }) {
  return (
    <ButtonStyled disabled={loading} {...rest}>
      {loading ? <Loading /> : rest.children}
    </ButtonStyled>
  );
}

export default Button;
