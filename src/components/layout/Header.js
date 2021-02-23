import styled from "styled-components";
import { breakpoints as bp } from "../../GlobalStyle";
import { useAuth } from "../../authContext";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Avatar, IconButton } from "../../ui/core";
import Tooltip from "../../ui/Tooltip";
import AccountInfo from "./header/AccountInfo";

const Grid = styled.div`
  display: grid;
  grid-template-columns: min-content 1fr min-content;
  height: 48px;
  align-items: stretch;
  padding: 0 24px;
  > div {
    display: flex;
    align-items: center;
  }
  button {
    white-space: nowrap;
  }
  .nav-toggle {
    font-size: var(--fsize-6);
    pointer-events: none;
    opacity: 0;
    @media (max-width: ${bp.desktop}) {
      opacity: 1;
      pointer-events: all;
    }
  }
`;

function Header({ toggle }) {
  const auth = useAuth();

  return (
    <Grid>
      <IconButton
        className="nav-toggle"
        onClick={toggle}
        icon={faBars}
        style={{ marginLeft: "-11px" }}
      />
      <div className="mid"></div>
      <div>
        <Tooltip text={<AccountInfo user={auth.user} />} delay={0.3}>
          <IconButton size="5" bg="primary">
            <Avatar
              size={5}
              bg="primary"
              name={auth.user.displayName || auth.user.email}
              image={auth.user.profileImage}
            />
          </IconButton>
        </Tooltip>
        {/* <Tooltip
          text="Lorem ipsum dolor sit amet del consectitore"
          bg="secondary"
        >
          <Button onClick={async () => await auth.signOut()}>Sign Out</Button>
        </Tooltip> */}
      </div>
    </Grid>
  );
}

export default Header;
