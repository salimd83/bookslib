import styled from 'styled-components';

const ToasterStyled = styled.div`
    position: fixed;
    right: 20px;
    bottom: 20px;
    width: 200px;
    border-radius: 6px;
    background: #fefefe;
    border: #ccc 1px solid;
    box-shadow: 1px 1px 5px 2px rgba(0,0,0, 0.4);
`;

function Toaster(props) {
    return (
        <ToasterStyled>
            {props.text}
        </ToasterStyled>
    )
}

export default Toaster;