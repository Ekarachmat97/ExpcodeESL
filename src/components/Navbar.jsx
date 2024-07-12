import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav>
    <h2 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>EXPCODE ESL</h2>
      <ul>
        <li className={location.pathname === '/' ? 'active' : ''}>
          <Link to="/">Home</Link>
        </li>
        <li className={location.pathname === '/generate' ? 'active' : ''}>
          <Link to="/generate">Generate</Link>
        </li>
        <li className={location.pathname === '/setting' ? 'active' : ''}>
          <Link to="/setting">Setting</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;