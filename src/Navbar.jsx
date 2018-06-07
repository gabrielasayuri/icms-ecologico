import React from 'react';
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  
  return (
    <header className='main-header fixed flex column'>
      <nav className='navbar flex row vertical-align-row'>
        <NavLink to='/' exact={true} className={`link`}>
          <div className='brand'>
            <h4>ICMS<span className='title'>Ecológico</span></h4>
            <h5>MATO GROSSO DO SUL</h5>
          </div>
        </NavLink>
        <div className='navigation-nav right'>
          <NavLink to='/sobre' className={`link`}>
            Sobre
          </NavLink>
          <NavLink to='/admin/analises' className={`link`}>
            Login
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;