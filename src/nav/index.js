import React from 'react';
import NavLink from './NavLink';
import { navLinks } from './navLinks';
import './Nav.css';

const Nav = () => {
  return (
    <header class="container-fluid">
      <div className="container">
        <p class="float-md-start mb-0">Logo</p>
        <nav className="nav nav-masthead justify-content-center float-md-end">
          {navLinks.map(({ navLinkId, scrollToId }, idx) => (
            <NavLink key={idx} navLinkId={navLinkId} scrollToId={scrollToId} />
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Nav;
