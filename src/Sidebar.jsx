
import React, { Component } from 'react';
import {NavLink} from "react-router-dom";
import LoginOut from './LoginOut';

class Sidebar extends Component {

    render() {
        return (
            <div className="navigation-side">        
                <NavLink to='/admin' className={`link`} activeClassName="selected" activeStyle={{ fontWeight: 'bold' }}>  
                    <img className="imgMenu" src={require('./images/analise.svg')} /> 
                    <span className="sidebar-title">Análises</span>
                </NavLink>
                <NavLink to='/prazo' className={`link`} activeClassName="selected" activeStyle={{ fontWeight: 'bold' }}>
                    <img className="imgMenu" src={require('./images/prazo.svg')} />
                    <span className="sidebar-title">Prazo</span>
                </NavLink>
                <NavLink to='/municipio' className={`link`} activeClassName="selected" activeStyle={{ fontWeight: 'bold' }}>
                    <img className="imgMenu" src={require('./images/municipio.svg')} />
                    <span className="sidebar-title">Município</span>
                </NavLink>
            </div>
        );
    }
}

export default Sidebar;