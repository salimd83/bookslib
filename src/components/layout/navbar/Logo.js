import { Link } from "react-router-dom";
import styled from "styled-components";
import {breakpoints as bp} from '../../../GlobalStyle';

const StyleLink = styled(Link)`
  font-size: var(--fsize-7);
  font-weight: 700;
  color: var(--color-primary);
  min-height: 48px;
  display: flex;
  align-items: center;
  padding: 0 20px 0 25px;
  border-bottom: rgba(255, 255, 255, 0.1) 1px solid;
  &:hover {
    text-decoration: none;
  }
  span {
      font-weight: 500;
      color: rgba(255,255,255, .9);
      opacity: ${p => Number(!p.compact)};
      transition: opacity 0.3s cubic-bezier(0.4, 0, 1, 1);
  }
  @media(max-width: ${bp.desktop}) {
      span {
          opacity: 1;
      }
  }
`;

function Logo(props) {
  return (
    <StyleLink {...props} to="/">
      S<span>toreLord</span>
    </StyleLink>
  );
}

export default Logo;
