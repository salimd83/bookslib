import React, { useState, useRef } from "react";
import styled from "styled-components";
import Portal from "./Portal";

const StyledTooltip = styled.span.attrs((p) => ({
  bg: p.bg || 'dark',
  delay: p.delay || 0.01
}))`
  position: fixed;
  font-size: var(--fsize-1);
  font-weight: 700;
  letter-spacing: 0.02em;
  left: ${(p) => p.posRef.current.x}px;
  top: ${(p) => p.posRef.current.y}px;
  background-color: rgba(var(--color-${(p) => p.bg}-rgb, 0, 0, 0), 0.9);
  color: var(--color-${(p) => p.bg}-contrast, var(--color-light));
  opacity: ${(p) => Number(p.show)};
  pointer-events: none;
  padding: 7px 10px;
  border-radius: 4px;
  z-index: 99999;
  display: inline-block;
  white-space: nowrap;

  transition-property: transform, opacity !important;
  transition-duration: 0.06s !important;
  transition-timing-function: cubic-bezier(0, 0, 0.2, 1) !important;
  transition-delay: ${(p) => (p.show ? p.delay : 0.02)}s !important;

  transform-origin: ${(p) => position(p.placment).negate()};
  transform: scale(${(p) => (p.show ? 1 : 0.7)});
`;

const position = (p) => ({
  current: p,
  negate() {
    if (this.current === "left") return "right";
    if (this.current === "right") return "left";
    if (this.current === "top") return "bottom";
    if (this.current === "bottom") return "top";
  },
  isHorzontal() {
    return this.current === "left" || this.current === "right";
  },
  isVertical() {
    return this.current === "top" || this.current === "bottom";
  },
});

const point = () => ({
  x: null,
  y: null,
  restrictRect(rect) {
    if (this.x < rect.l) this.x = rect.l;
    else if (this.x > rect.r) this.x = rect.r;
    else if (this.y < rect.t) this.y = rect.t;
    else if (this.y > rect.b) this.y = rect.b;
    return this;
  },
  reset(p) {
    this.x = p.x;
    this.y = p.y;
  },
});

const getPoint = (el, tt, placement = "buttom", space = 15) => {
  // tooltip (tt) bounderies bases on container (window in our case)
  const bdys = {
    l: space,
    t: space,
    r: document.body.clientWidth - (tt.offsetWidth + space),
    b: window.innerHeight - (tt.offsetHeight + space),
  };

  const bx = el.getBoundingClientRect();
  const elRect = { l: bx.left, t: bx.top, r: bx.right, b: bx.bottom };

  const ttPt = point();
  let recurCount = 0;
  return (function recursive(placement) {
    recurCount++;
    const pos = position(placement);
    switch (pos.current) {
      case "right":
        ttPt.x = elRect.r + space;
        ttPt.y = elRect.t + (el.offsetHeight - tt.offsetHeight) / 2;
        break;
      case "left":
        ttPt.x = elRect.l - (tt.offsetWidth + space);
        ttPt.y = elRect.t + (el.offsetHeight - tt.offsetHeight) / 2;
        break;
      case "top":
        ttPt.x = elRect.l + (el.offsetWidth - tt.offsetWidth) / 2;
        ttPt.y = elRect.t - (tt.offsetHeight + space);
        break;
      default:
        ttPt.x = elRect.l + (el.offsetWidth - tt.offsetWidth) / 2;
        ttPt.y = elRect.b + space;
        break;
    }
    if (recurCount < 3)
      if (
        (pos.isHorzontal() && (ttPt.x < bdys.l || ttPt.x > bdys.r)) ||
        (pos.isVertical() && (ttPt.y < bdys.t || ttPt.y > bdys.b))
      ) {
        ttPt.reset(recursive(pos.negate()));
      }
      
    return ttPt.restrictRect(bdys);
  })(placement);
};

function Tooltip({
  children,
  text,
  placement = "bottom",
  space = 15,
  disabled = 0,
  bg,
  delay
}) {
  const [show, setShow] = useState(0);
  const posRef = useRef({ x: 0, y: 0 });
  const tooltipRef = useRef(null);

  const handleMOver = (e) => {
    setShow(1);
    posRef.current = getPoint(
      e.currentTarget,
      tooltipRef.current,
      placement,
      space
    );
  };

  const handleMOut = () => setShow(0);

  return (
    <>
      {disabled
        ? children
        : React.cloneElement(children, {
            onMouseOver: handleMOver,
            onMouseOut: handleMOut,
          })}
      {disabled || (
        <Portal>
          <StyledTooltip ref={tooltipRef} {...{ show, posRef, placement, bg, delay }}>
            {text}
          </StyledTooltip>
        </Portal>
      )}
    </>
  );
}

export default Tooltip;
