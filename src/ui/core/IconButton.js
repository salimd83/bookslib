import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled, { css, keyframes } from "styled-components";

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
  border-radius: 9999px;
  width: calc(var(--space-${(p) => p.size}) + 14px);
  height: calc(var(--space-${(p) => p.size}) + 14px);
  background-color: transparent;
  color: var(--color-${(p) => p.bg});
  padding: 0;
  border: transparent 4px solid;
  overflow: hidden;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: var(--fsize-${(p) => p.size});
  position: relative;
  cursor: pointer;
  transition: background-color 0.2s ease, box-shadow 0.2s ease;
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
  ${(p) =>
    p.solid &&
    css`
      background-color: var(--color-${(p) => p.bg});
      color: var(--color-${(p) => p.bg}-contrast);
      box-shadow: 0 1px 2px 1px rgba(0, 0, 0, 0.15);
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
        border-radius: 9999px;
        border: black 2px solid;
        border-color: ${(p) =>
            ("var(--color-" + p.bg + (!p.solid && p.icon ? ") " : "-contrast) ")).repeat(
              3
            )}
          transparent;
        animation: ${spin} 0.8s linear infinite;
      }
    `}
`;

function IconButton(props) {
  props = { ...props, loading: Number(props.loading || 0) };
  return (
    <StyledButton {...{ ...props, disabled: props.loading || props.disabled }}>
      {props.icon ? <FontAwesomeIcon icon={props.icon} /> : props.children}
    </StyledButton>
  );
}

export default IconButton;
