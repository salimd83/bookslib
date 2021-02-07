import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
import { breakpoints as bp } from "../../../GlobalStyle";

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  padding: 0 24px;
  min-height: 56px;
  font-size: var(--fsize-4);
  font-weight: 500;
  color: rgba(255, 255, 255, 0.7);
  white-space: nowrap;
  box-shadow: 0 -1px 0 0 rgba(255, 255, 255, 0.1);
  transition-property: color, background-color;
  transition-duration: .2s;
  span {
    padding-left: 14px;
    line-height: 19px;
    opacity: ${(p) => (p.compact ? 0 : 1)};
    transition: opacity 0.3s cubic-bezier(0.4, 0, 1, 1);
  }
  i {
    min-height: 22px;
    min-width: 22px;
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &:hover {
    text-decoration: none;
    background-color: rgba(255 255 255 / 5%);
  }
  &.active {
    color: var(--color-primary);
  }

  @media (max-width: ${bp.desktop}) {
    span {
      opacity: 1;
    }
  }
`;

function NavLink({ children, iconClassName, label, ...rest }) {
  return (
    <StyledLink className="nav-link" {...rest}>
      {children || (
        <>
          <i className={iconClassName}></i> <span className="label">{label}</span>
        </>
      )}
    </StyledLink>
  );
}

export default NavLink;
