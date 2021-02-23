import styled, { css } from "styled-components";
import { Loading } from "./";

const ButtonStyled = styled.button.attrs((p) => {
  const bg = p.bg || "light";
  const size = p.size || 6;
  return {
    bg,
    color: p.color || `${bg}-contrast`,
    size,
  };
})`
  border: 1px solid rgba(0,0,0, .08);
  background-color: var(--color-${(p) => p.bg});
  color: var(--color-${(p) => p.color});
  height: calc(var(--space-${(p) => p.size}) * 0.9);
  min-height: 14px;
  width: auto;
  padding: 0 calc(var(--space-${(p) => p.size}) * 0.4);
  font-weight: bold;
  border-radius: var(--border-radius);
  font-size: var(--fsize-${(p) => Number(p.size) - 3}, var(--fsize-1));
  transition: background-color, .2s ease, box-shadow .2s ease;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  &:enabled:hover {
    background-color: var(--color-${(p) => p.bg}-hover, var(--color-${(p) => p.bg}));
    border-color: rgba(0,0,0, .15);
    box-shadow: 0px 2px 6px 1px rgba(0, 0, 0, 0.16);
  }
  &:enabled:active, &:disabled {
    box-shadow: inset 0px 2px 6px 1px rgba(0, 0, 0, 0.1);
  }
  &:disabled {
    opacity: 0.7;
  }
  ${(props) =>
    props.outline &&
    css`
      border-color: var(--color-${(p) => p.bg});
      background-color: transparent;
      color: var(--color-${(p) => p.bg});
      &:enabled:hover {
        background-color: var(--color-${(p) => p.bg});
        color: var(--color-${(p) => p.bg}-contrast);
      }
      &:enabled:active {
        background-color: var(--color-${(p) => p.bg}-hover, var(--color-${(p) => p.bg}));
      }
    `}
    ${p => p.loading && css`
      span.label {
        opacity: 0;
      }
      span.loading {
        opacity: 1;
        position: absolute;
        top: 0;
        lefT: 0;
        width: 100%;
        height: 100%;
        font-size: var(--fsize-${p => Number(p.size) - 1});
        display: flex;
        align-items: center;
        justify-content: center;
      }
    `}
`;

function Button(props) {
  props = {...props, loading: Number(props.loading || 0)};
  return (
    <ButtonStyled {...{...props, disabled: props.loading || props.disabled}}>
      <span class="label">{props.children}</span>
      {props.loading ? <span className="loading"><Loading /></span> : ""}
    </ButtonStyled>
  );
}

export default Button;
