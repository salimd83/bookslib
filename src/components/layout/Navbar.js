import styled from 'styled-components';
import Logo from "./navbar/Logo";

const StyledNav = styled.nav`
    background-color: black;
    width: var(--navbar-width);
    height: 100vh;
    position: relative;
    &::before {
        content: "";
        background-color: rgba(var(--color-secondary-rgb), .2);
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: -1;
    }
`;

function Navbar() {
  return (
    <StyledNav>
      <Logo />
    </StyledNav>
  );
}

export default Navbar;
