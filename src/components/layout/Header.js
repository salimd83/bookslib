import styled from "styled-components";
import { Link } from "react-router-dom";
import { useAuth } from "../../authContext";
import { breakpoints } from "../../GlobalStyle";
import { Button } from "../../ui/core";

const Grid = styled.div`
  display: grid;
  grid-template-columns: min-content 1fr min-content;
  align-items: stretch;
  height: 48px;
  padding: 0 24px;
  > div {
    display: flex;
    align-items: center;
    &:first-child {
      font-size: var(--fsize-6);
      i {
        display: none;
        @media (max-width: ${breakpoints.desktop}) {
          display: flex;
        }
      }
    }
  }
`;

function Header({ toggleNav }) {
  const auth = useAuth();
  return (
    <Grid>
      <div>
        <span onClick={toggleNav}><i className="fas fa-bars"></i></span>
      </div>
      <div className="mid"></div>
      {auth.user ? (
        <div>
          {auth.user.email}{" "}
          <Button onClick={async () => await auth.signOut()}>Logout</Button>
        </div>
      ) : (
        <Link to="/signin">SignIn</Link>
      )}
    </Grid>
  );
}

export default Header;
