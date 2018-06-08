import React from 'react';
import { NavLink } from 'react-router-dom'

const Navbar = () => {

  return (
    /*<nav class="nav-extended">
      <div class="nav-wrapper">
        <a href="#" class="brand-logo">
          <h1>ICMS<span className='title'>Ecológico</span></h1>
          <h5>MATO GROSSO DO SUL</h5>
        </a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li><NavLink to='/admin/analises' className={`link`}>
            Login
          </NavLink></li>
        </ul>
      </div>
      <div class="nav-content">
        <ul class="tabs tabs-transparent">
          <li class="tab"><a href="#test1">ICMS Ecológico</a></li>
          <li class="tab"><a class="active" href="#test2">O que é?</a></li>
          <li class="tab disabled"><a href="#test3">Legislação</a></li>
          <li class="tab"><a href="#test4">Repasses</a></li>
        </ul>
      </div>
    </nav>*/
    <header className='main-header fixed flex column'>
      <nav className='navbar flex row vertical-align-row'>
        <NavLink to='/' exact={true} className={`link`}>
          <div className='brand'>
            <h1>ICMS<span className='title'>Ecológico</span></h1>
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