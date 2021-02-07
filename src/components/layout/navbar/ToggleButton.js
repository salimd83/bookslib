import styled from "styled-components";
import { breakpoints as bp } from "../../../GlobalStyle";

const Button = styled.button`
  background-color: transparent;
  border: none;
  height: 42px;
  color: rgba(255, 255, 255, 0.7);
  text-align: ${(p) => (p.compact ? "center" : "right")};
  padding: 0 24px;
  box-shadow: 0 -1px 0 0 rgb(255 255 255 / 10%);
  display: none;
  @media (min-width: ${bp.desktop}) {
    display: block;
  }
`;

function ToggleButton(props) {
  return (
    <Button
      {...props}
      className="nav-toggle"
      onClick={() => props.setCompact(Number(!props.compact))}
    >
      <i
        className={"fas fa-chevron-".concat(props.compact ? "right" : "left")}
      ></i>
    </Button>
  );
}

export default ToggleButton;
