import React from 'react';
import { NavLink } from 'react-router-dom'

const Navbar = () => {

  return (
    <header className='fixed main-header flex column'>
      <nav className='navbar flex row vertical-align-row'>
        <NavLink to='/' exact={true} className={`link`}>
          <div className='brand'>
            <h1>ICMS<span className='title'>Ecológico</span></h1>
            <h5>MATO GROSSO DO SUL</h5>
          </div>
        </NavLink>
        <div className='navigation-nav right'>
          <NavLink to='/admin/analises' className={`link`}>
            Login
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;