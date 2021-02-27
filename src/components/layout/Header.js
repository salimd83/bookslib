import styled from "styled-components";
import { breakpoints as bp } from "../../GlobalStyle";
import { useAuth } from "../../authContext";
import Tooltip from "../../ui/Tooltip";
import { Avatar, IconButton } from "../../ui/core";
import AccountInfo from "./header/AccountInfo";
import { faBars } from "@fortawesome/free-solid-svg-icons";

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
        <Tooltip text={<AccountInfo user={auth.user} />}>
          <IconButton bg="primary" size={5}>
            <Avatar
              size={5}
              bg="primary"
              image={auth.user.profileImage}
              name={auth.user.displayName || auth.user.email}
            ></Avatar>
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
