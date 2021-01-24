import styled, {css} from 'styled-components';

const Figure = styled.figure`
    width: 100px;
    height: 100px;
    display: inline-block;
    position: relative;
    margin: 4px;
    background-color: black;
    transition: all 0.2s ease-in;
    transform: scale(1);
    opacity: 1;
    img {
        object-fit: cover;
        width: 100px;
        height: 100px;
        opacity: .85;
    }
    div {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0;
        height: 4px;
        background-color: lightgreen;
    }
    ${({percent}) => css`
        div {
            width: ${percent}%;
        }
    `}
    ${({percent}) => percent === 100 && css`
        transform: scale(0);
        opacity: 0;
    `}
`;

function ImgProgress({imgURL, percent}) {
    return (
        <Figure percent={percent}>
            <img src={imgURL} alt=""/>
            <div></div>
        </Figure>
    )
}

export default ImgProgress;