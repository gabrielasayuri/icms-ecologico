
import React, { Component } from 'react';
import { NavLink, Redirect } from 'react-router-dom'
import { auth } from './base'

const handleExit = () => {
    auth.signOut();
    return (<Redirect to="/login" />);
}

class Header extends Component {

    render() {
        return (
            <div className="divHeader">
                <div>
                    <h1>ICMS<span className='title'>Ecológico</span></h1>
                    <h5>MATO GROSSO DO SUL</h5>
                </div>
                <button className="btnSair" onClick={() => handleExit()}>Sair</button>
            </div>
        );
    }
}

export default Header;