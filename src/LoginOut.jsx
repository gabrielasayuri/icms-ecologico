import React from 'react';
import { NavLink } from 'react-router-dom'

import { auth } from './base'

const handleExit = () => {
    auth.signOut()
}

const LoginOut = () => {

    return (
       <button className="btnSair" onClick={() => handleExit()}>Sair</button>  
    )
}

export default LoginOut


