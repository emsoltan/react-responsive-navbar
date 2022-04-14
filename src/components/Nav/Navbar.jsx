import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';

const Nav = styled.nav`
  width: 100%;
  height: 4rem;
  border-bottom: 2px solid #f1f1f1;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;

  .logo {
    padding: 1rem 0;
  }
`

const Navbar = () => {
  return (
    <Nav>
      <div className="logo">
        Nav Bar
      </div>
      <Burger />
    </Nav>
  )
}

export default Navbar
