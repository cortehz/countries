import React from "react";
import Toggle from "./Toggler";
import styled from "styled-components";

const Header = ({ theme, themeToggler }) => {
  return (
    <Nav>
      <a href="/" className="brand">
        Where in the world
      </a>
      <Toggle theme={theme} toggleTheme={themeToggler} />
    </Nav>
  );
};

export default Header;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 1rem 5rem;
  background: ${({ theme }) => theme.background};

  a {
    text-decoration: none;
    font-size: 2rem;
    font-weight: 800;

    &:visited {
      color: ${({ theme }) => theme.text};
    }
  }

  @media (max-width: 1032px) {
    padding: 1rem 2rem;
    a {
      font-size: 1.5rem;
    }
  }

  @media (max-width: 660px) {
    nav {
      a {
        font-size: 1rem;
      }
    }
  }
`;
