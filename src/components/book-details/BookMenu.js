import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const StyledUl = styled.ul`
  list-style: none;
  padding: 0;
  li {
    padding: 6px;
    margin: 4px;
    background-color: #f0f0f0;
    display: inline-block;
    &.active {
        background-color: #ccc;
    }
  }
`;

function BookMenu({ url, ...rest }) {
  const location = useLocation();
  return (
    <StyledUl {...rest}>
      <li className={(location.pathname === url && 'active').toString()}>
        <Link to={`${url}`}>General information</Link>
      </li>
      <li className={(location.pathname === `${url}/authors` && 'active').toString()}>
        <Link to={`${url}/authors`}>Authors</Link>
      </li>
      <li className={(location.pathname === `${url}/photos` && 'active').toString()}>
        <Link to={`${url}/photos`}>Photos</Link>
      </li>
    </StyledUl>
  );
}

export default BookMenu;
