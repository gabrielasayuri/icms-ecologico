
import React, { Component } from 'react';
import { NavLink, Redirect } from 'react-router-dom'
import { auth } from './base'

const handleExit = () => {
    auth.signOut();
    return (<Redirect to="/login"/>);
}

class Header extends Component {

    render() {
        return (
            <div className="divHeader">     
                <button className="btnSair" onClick={() => handleExit()}>Sair</button>                  
            </div>
        );
    }
}

export default Header;