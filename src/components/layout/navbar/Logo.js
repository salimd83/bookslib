import styled from 'styled-components';
import { Link } from "react-router-dom";
import {breakpoints as bp} from '../../../GlobalStyle'; 

const StyledLink = styled(Link)`
    font-size: calc(var(--fsize-6) + 4px);
    font-weight: 700;
    color: var(--color-primary) !important;
    min-height: 48px;
    display: flex;
    align-items: center;
    padding: 0 20px 0 25px;
    border-bottom: rgba(255,255,255, 0.1) 1px solid;
    &:hover {
        text-decoration: none;
    }
    span {
        font-weight: 400;
        color: rgba(255 255 255 / 90%);
        transition: opacity 0.3s cubic-bezier(0.4, 0, 1, 1);
        opacity: ${p => p.compact ? 0 : 1};
    }
    @media (max-width: ${bp.desktop}) {
        span {
            opacity: 1;
        }
    }
`;

function Logo(props) {
    return (
        <StyledLink {...props} to="/">S<span>toreLord</span></StyledLink>
    )
}

export default Logo;