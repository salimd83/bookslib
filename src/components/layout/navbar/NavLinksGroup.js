import styled from "styled-components";
import NavLink from "./NavLink";
import { breakpoints as bp } from "../../../GlobalStyle";

const LinksGroup = styled.div`
  flex-grow: ${(p) => (p.compact ? 0 : 1)};
  padding: 24px 0 14px 0;
  margin-right: 2px;
  overflow-x: hidden;
  overflow-y: auto;
  background-color: rgba(var(--color-secondary-rgb), 0.1);
  transition: flex-grow 0.3s cubic-bezier(0.4, 0, 1, 1) !important;
  ::-webkit-scrollbar {
    width: 4px;
  }
  /* Track */
  ::-webkit-scrollbar-track {
    background: transparent;
  }
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.4);
    border-radius: 4px;
  }
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
  @media (max-width: ${bp.desktop}) {
    flex-grow: 1;
  }
`;

const DenseNavLink = styled(NavLink)`
  && {
    box-shadow: none;
    min-height: 36px;
  }
`;

const links = [
  {
    to: "/books",
    icon: "fas fa-box",
    label: "Products",
  },
  {
    to: "/orders",
    icon: "fas fa-clipboard-list",
    label: "Customer Orders",
  },
  {
    to: "/subs",
    icon: "fas fa-redo-alt",
    label: "Subscriptions",
  },
  {
    to: "/automation",
    icon: "fas fa-calendar",
    label: "Automation",
  },
  {
    to: "/schedule",
    icon: "fas fa-robot",
    label: "Schedule",
  },
];

function NavLinksGroup(props) {
  return (
    <LinksGroup {...props}>
      {links.map((l) => (
        <DenseNavLink
          key={l.to}
          compact={props.compact}
          to={l.to}
          iconClassName={l.icon}
          label={l.label}
        />
      ))}
    </LinksGroup>
  );
}

export default NavLinksGroup;
