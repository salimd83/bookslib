import { useState, useEffect } from "react";
import styled from "styled-components";
import { breakpoints } from "../../GlobalStyle";
import Header from "./Header";
import Navbar from "./Navbar";

const Grid = styled.div`
  display: grid;
  grid: "nav header" min-content "nav main" 1fr / min-content 1fr;
  min-height: 100vh;
`;
const GridNav = styled.div`
  grid-area: nav;
  z-index: 2000;
`;
const GridHeader = styled.header`
  grid-area: header;
  z-index: 1000;
`;
const GridMain = styled.main`
  grid-area: main;
  position: relative;
`;

function Layout({ children, ...rest }) {
  const [showNav, setShowNav] = useState(0);
  useEffect(() => {
    function handleResize() {
      if(window.innerWidth >= Number(breakpoints.desktop.slice(0, -2))) setShowNav(0);
    }
    window.addEventListener('resize', handleResize);
  }, []);
  const toggleNav = () => {
    setShowNav(Number(!showNav));
  };
  return (
    <Grid {...rest}>
      <GridNav>
        <Navbar visible={showNav} close={toggleNav} />
      </GridNav>
      <GridHeader>
        <Header toggleNav={toggleNav} />
      </GridHeader>
      <GridMain>{children}</GridMain>
    </Grid>
  );
}

export default Layout;
