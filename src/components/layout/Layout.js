import { useState } from "react";
import styled from "styled-components";
import Header from "./Header";
import Navbar from "./Navbar";

const Grid = styled.div`
  display: grid;
  grid-template:
    "nav header" min-content
    "nav main" 1fr / min-content 1fr;
  min-height: 100vh;
`;

const GridNav = styled.div`
  grid-area: nav;
  z-index: 2000;
`;

const GridHeader = styled.header`
  grid-area: header;
`;

const GridMain = styled.main`
  grid-area: main;
`;

function Layout({ children, ...rest }) {
    const [showNav, setShowNav] = useState(0);
    const toggle = () => setShowNav(Number(!showNav));
  return (
    <Grid {...rest}>
      <GridNav>
        <Navbar visible={showNav} close={toggle} />
      </GridNav>
      <GridHeader>
        <Header toggle={toggle} />
      </GridHeader>
      <GridMain>{children}</GridMain>
    </Grid>
  );
}

export default Layout;
