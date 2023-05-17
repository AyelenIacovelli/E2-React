import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

export const NavbarContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 0 auto;
  max-width: 1200px;
  padding: 20px;
`;

export const LinkContainer = styled.ul`
  display: flex;
  gap: 20px;
`;

export const NavLinkStyled = styled(NavLink)`
  color: white;
  &.active {
    color: #4747ff;
    font-weight: 600;
  }
`