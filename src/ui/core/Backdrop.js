import styled, {css} from "styled-components";
import {breakpoints as bp} from "../../GlobalStyle"; 

const Backdrop = styled.div`
    position: fixed;
    height: 100vh;
    width: 100vw;
    opacity: 0;
    pointer-events: none;
    background-color: rgba(0,0,0, .4);
    transition: opacity .2s cubic-bezier(0.4, 0, 1, 1) !important;
    ${p => p.visible && css`
        opacity: 1;
        pointer-events: all;
    `}
    @media(min-width: ${bp.desktop}) {
        opacity: 0;
        pointer-events: none;
    }
`;

export default Backdrop;