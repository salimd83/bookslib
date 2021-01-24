import styled, {css} from "styled-components";
import Loading from "./Loading";

const Div = styled.div`
  cursor: pointer;
  ${({color}) => color && css`
    i {
      color: ${color}
    }
  `}
  ${({size}) => size && css`
    i {
      font-size: ${size}
    }
  `}
`;

function IconButton({ iconClass, color, size, loading, onClick }) {
  return (
    <Div size={size} color={color}>
      {loading ? (
        <Loading />
      ) : (
        <div onClick={onClick}>
          <i className={iconClass}></i>
        </div>
      )}
    </Div>
  );
}

export default IconButton;
