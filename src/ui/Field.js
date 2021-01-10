import styled from 'styled-components';

const StyledDiv = styled.div`
    margin-bottom: 15px;
    display: flex;
    border-bottom: #f0f0f0 1px solid;
    padding-bottom: 20px;
`;

const StyledLabel = styled.label`
    font-weight: bold;
    width: 120px;
`;

function Field(props) {
    return (
        <StyledDiv>
          <StyledLabel htmlFor={props.id}>{props.labelText}: </StyledLabel>
          <div>
              {props.children}
          </div>
        </StyledDiv>
    )
}

export default Field;