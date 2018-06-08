import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import LoginOut from '../LoginOut'
import { auth } from '../base'

class SidebarQuest extends Component {

  render() {
    return (
      <div className="navigation-side">
        <NavLink to='/questionario/qualidade-de-vida' className={`link`} activeClassName="selected" activeStyle={{ fontWeight: 'bold' }}>
          <span className="sidebar-title">Qualidade de Vida</span>
        </NavLink>
        <NavLink to='/questionario/educacao-ambiental' className={`link`} activeClassName="selected" activeStyle={{ fontWeight: 'bold' }}>
          <span className="sidebar-title">Educação Ambiental</span>
        </NavLink>
        <NavLink to='/questionario/poder-publico-pela-uc' className={`link`} activeClassName="selected" activeStyle={{ fontWeight: 'bold' }}>
          <span className="sidebar-title">Interesse do poder público pela UC</span>
        </NavLink>
        <NavLink to='/questionario/melhoria-ambiental' className={`link`} activeClassName="selected" activeStyle={{ fontWeight: 'bold' }}>
          <span className="sidebar-title">Qualidade e melhoria ambiental</span>
        </NavLink>
      </div>
    )

  }
}



export default SidebarQuest;