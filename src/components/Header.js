import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = styled.nav`
  background: ${({ theme }) => theme.navBackground || '#4B9CE2'};
  padding: 1rem 2rem;
`;

const NavList = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;
`;

const NavItem = styled.li`
  margin: 0 1rem;

  a {
    color: ${({ theme }) => theme.text};
    text-transform: uppercase;
    font-weight: bold;

    &:hover {
      color: ${({ theme }) => theme.primaryHover || '#8A2BE2'};
    }
  }
`;

const Header = () => {
    return (
        <Navbar>
            <NavList>
                <NavItem><Link to="/">Accueil</Link></NavItem>
                <NavItem><Link to="/services">Services</Link></NavItem>
                <NavItem><Link to="/portfolio">Portfolio</Link></NavItem>
                <NavItem><Link to="/about">À propos</Link></NavItem>
                <NavItem><Link to="/blog">Blog</Link></NavItem>
                <NavItem><Link to="/contact">Contact</Link></NavItem>
            </NavList>
        </Navbar>
    );
};

export default Header;
