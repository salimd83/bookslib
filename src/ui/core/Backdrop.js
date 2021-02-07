import styled, {css} from "styled-components";

const Backdrop = styled.div`
    position: fixed;
    /* z-index: 1; */
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0, 0.4);
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.2s cubic-bezier(0.4, 0, 1, 1) !important;
    ${p => p.visible && css`
        opacity: 1;
        pointer-events: all;
    `}
`;

export default Backdrop;