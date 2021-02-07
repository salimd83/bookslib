import { useState } from "react";
import styled from "styled-components";
import Logo from "./navbar/Logo";
import NavLink from "./navbar/NavLink";
import { breakpoints as bp } from "../../GlobalStyle";
import { Backdrop } from "../../ui/core";
import NavLinkGroup from "./navbar/NavLinksGroup";
import ToggleButton from "./navbar/ToggleButton";

const StyledNav = styled.nav`
  background-color: black;
  height: 100vh;
  position: sticky;
  top: 0;
  transition-property: transform, width !important;
  transition-duration: 0.3s !important;
  transition-timing-function: cubic-bezier(0.4, 0, 1, 1) !important;
  overflow: hidden;
  width: ${(p) => (p.compact ? "70px" : "var(--navbar-width)")};
  display: flex;
  flex-direction: column;
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
    width: 250px;
    transform: translate3d(${(p) => (p.visible ? 0 : -256)}px, 0, 0);
    transition: transform 0.3s
      ${(p) =>
        p.visible
          ? "cubic-bezier(0.4, 0, 1, 1)"
          : "cubic-bezier(0, 0, 0.2, 1))"} !important;
  }
`;

function Navbar(props) {
  const [compact, setCompact] = useState(0);
  return (
    <>
      <Backdrop visible={props.visible} onClick={props.close} />
      <StyledNav
        compact={compact}
        {...props}
        area-label="Booklib sections navigation"
      >
        <Logo compact={compact} />
        <NavLinkGroup compact={compact} />
        <NavLink
          compact={compact}
          to="/settings"
          iconClassName="fas fa-cog"
          label="Settings"
        />
        <NavLink
          compact={compact}
          to="/feedback"
          iconClassName="fas fa-comment-alt"
          label="Feedback"
        />
        <ToggleButton {...{ compact, setCompact }} />
      </StyledNav>
    </>
  );
}

export default Navbar;
