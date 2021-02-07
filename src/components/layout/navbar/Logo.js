import {Link} from 'react-router-dom';
import styled from 'styled-components';

const StyleLink = styled(Link)`
    font-size: var(--fsize-7);
    font-weight: 700;
    color: var(--color-primary);
    min-height: 48px;
    display: flex;
    align-items: center;
    padding: 0 20px 0 25px;
    border-bottom: rgba(255,255,255, 0.1) 1px solid;
    &:hover {
        text-decoration: none;
    }
`;

function Logo(props) {
    return <h1>
        <StyleLink {...props} to="/">StoreLord</StyleLink>
      </h1>
}

export default Logo;