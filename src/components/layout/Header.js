import styled from "styled-components";
import { breakpoints as bp } from "../../GlobalStyle";
import { useAuth } from "../../authContext";
import { Button, Tooltip } from "../../ui";

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
  &:first-child {
    font-size: var(--fsize-6);
    i {
      display: none;
      @media (max-width: ${bp.desktop}) {
        display: inline;
      }
    }
  }
`;

function Header({ toggle }) {
  const auth = useAuth();
  return (
    <Grid>
      <div onClick={toggle}>
        <i className="fas fa-bars" />
      </div>
      <div className="mid"></div>
      <div>
        {auth.user.email}{" "}
        <Tooltip text="Lorem ipsum dolor sit amet del consectitore" bg="secondary">
          <Button onClick={async () => await auth.signOut()}>Sign Out</Button>
        </Tooltip>
      </div>
    </Grid>
  );
}

export default Header;
