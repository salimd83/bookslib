import styled from "styled-components";

const Button = styled.button`
    background-color: transparent;
    border: none;
    height: 42px;
    color: rgba(255,255,255, .7);
    padding: 0 24px;
    box-shadow: 0 -1px 0 0 rgba(255 255 255 / 10%);
    text-align: ${p => p.compact ? 'center' : 'right'};
    i {
        transition: transform 0.2s linear;
        transform: rotate(${p => p.compact ? "180deg" : "0deg"});
    }
`;

function NavToggle(props) {
  return (
    <Button
      {...props}
      className="nav-toggle"
      onClick={() => props.setCompact(Number(!props.compact))}
    >
      <i className="fas fa-chevron-left"></i>
    </Button>
  );
}

export default NavToggle;
