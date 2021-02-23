import styled, { css, keyframes } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const StyledButton = styled.button.attrs((p) => {
  const bg = p.bg || "dark";
  const size = p.size || 6;
  return {
    bg,
    color: p.color || `${bg}-contrast`,
    size,
  };
})`
  border-radius: 99999px;
  width: calc(var(--space-${(p) => p.size}) + 14px);
  height: calc(var(--space-${(p) => p.size}) + 14px);
  border: transparent 4px solid;
  background-color: transparent;
  color: var(--color-${(p) => p.bg});
  padding: 0;
  overflow: hidden;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: var(--fsize-${(p) => Number(p.size)}, var(--fsize-1));
  box-shadow: none;
  position: relative;
  &:enabled:hover {
    background-color: rgba(
      var(--color-${(p) => p.bg}-rgb, var(--color-dark-rgb)),
      0.15
    );
  }
  &:active,
  &:disabled {
    opacity: 0.6;
    box-shadow: none;
  }
  &:focus{ 
    outline: none;
  }
  ${(p) =>
    p.solid &&
    css`
      box-shadow: 0px 1px 2px 1px rgba(0, 0, 0, 0.15);
      background-color: var(--color-${(p) => p.bg});
      color: var(--color-${(p) => p.bg}-contrast);
      &:enabled:hover {
        background-color: var(
          --color-${(p) => p.bg}-hover,
          var(--color-${(p) => p.bg})
        );
      }
    `}
  ${(p) =>
    p.loading &&
    css`
      border-width: 0;
      &::after {
        content: "";
        position: absolute;
        width: calc(100% - ${p => p.icon ? '6px' : '13px'});
        height: calc(100% - ${p => p.icon ? '6px' : '13px'});
        border-radius: 99999px;
        border: black 2px solid;
        border-color: ${(p) =>
            ("var(--color-" + p.bg + ((!p.solid && p.icon) ? ")" : "-contrast) ")).repeat(3)}
          transparent;
        animation: ${spin} 0.8s linear infinite;
      }
    `}
`;

function IconButton(props) {
  props = {...props, loading: Number(props.loading || 0)};
  return (
    <StyledButton {...props} disabled={props.loading || props.disabled}>
      {props.icon ? <FontAwesomeIcon icon={props.icon} /> : props.children}
    </StyledButton>
  );
}

export default IconButton;
