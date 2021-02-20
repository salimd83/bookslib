import styled from 'styled-components';

const StyledDiv = styled.div`
    margin: 30px 0 30px 0;
    height: 2px;
    background-color: #f0f0f0;
`;

function Divider() {
    return(
        <StyledDiv></StyledDiv>
    )
}

export default Divider;