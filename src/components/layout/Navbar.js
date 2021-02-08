import styled from "styled-components";
import Logo from "./navbar/Logo";
import { breakpoints as bp } from "../../GlobalStyle";
import Backdrop from "../../ui/Backdrop";

const StyledNav = styled.nav`
  background-color: black;
  width: var(--navbar-width);
  height: 100vh;
  position: relative;
  z-index: 1000;
  &::before {
    content: "";
    background-color: rgba(var(--color-secondary-rgb), 0.2);
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
  @media (max-width: ${bp.desktop}) {
    position: fixed;
    transform: translate3d(
      ${(p) =>
        p.visible ? 0 : "calc(var(--navbar-width) - var(--navbar-width)*2)"},
      0,
      0
    );
    transition: transform 0.3s
      ${(p) =>
        p.visible
          ? "cubic-bezier(0.4, 0, 1, 1)"
          : "cubic-bezier(0, 0, 0.2, 1)"} !important;
  }
`;

function Navbar(props) {
  return (
    <>
      <Backdrop visible={props.visible} onClick={props.close} />
      <StyledNav {...props}>
        <Logo />
      </StyledNav>
    </>
  );
}

export default Navbar;
