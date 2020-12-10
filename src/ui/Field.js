import styled from 'styled-components';

const StyledDiv = styled.div`
    margin-bottom: 15px;
`;

const StyledLabel = styled.label`
    font-weight: bold;
`;

function Field(props) {
    return (
        <StyledDiv>
          <StyledLabel htmlFor={props.id}>{props.labelText}: </StyledLabel>
          {props.children}
        </StyledDiv>
    )
}

export default Field;