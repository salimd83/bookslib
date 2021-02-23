import styled from "styled-components";
import Profile from "../assets/Profile";
import { initials } from "../../functions/stringFn";

const StyledAvatar = styled.span.attrs((p) => {
  const bg = p.bg || "light";
  const size = p.size || 6;
  return {
    bg,
    color: p.color || `${bg}-contrast`,
    size,
  };
})`
  width: calc(var(--space-${(p) => p.size}) + 5px);
  height: calc(var(--space-${(p) => p.size}) + 5px);
  border-radius: 9999px;
  background-color: var(--color-${(p) => p.bg});
  color: var(--color-${(p) => p.color});
  font-size: var(--fsize-${(p) => p.size}, var(--fsize-1));
  font-weight: 500;
  overflow: hidden;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  img {
    width: 100%;
  }
  svg {
    width: 75%;
    .a {
      stroke: var(--color-${(p) => p.color});
    }
  }
`;

function Avatar({image, name, ...props}) {
  let Display = <Profile />;

  if (image) Display = <img src={image} alt="User Profile" />;
  else if (name) Display = <span>{initials(name)}</span>;

  return <StyledAvatar {...props}>{Display}</StyledAvatar>;
}

export default Avatar;
