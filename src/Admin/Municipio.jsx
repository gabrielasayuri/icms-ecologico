import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { auth } from '../base'

import Analise from './Analise'
import CadastrosRecentes from './CadastrosRecentes'
import Sidebar from '../Sidebar'
import Header from '../Municipio/Header'
import Questionario from '../Municipio/Questionario'

class Municipio extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isAuthing: true,
      isLoggedIn: false,
      user: null
    }
    
    //this.handleExit = this.handleExit.bind(this)
  }

  componentWillMount() {
    this.removeAuthListener = auth.onAuthStateChanged(user => {
      this.setState({
        isAuthing: false,
        isLoggedIn: !!user,
        user: user
      })
    })
  }

  componentWillUnmount() {
    this.removeAuthListener()
  }

  render() {
    if (this.state.isAuthing) {
      return <p>Aguarde...</p>
    }

    if (!this.state.isLoggedIn) {
      return <Redirect to='/login' />
    }

    return (
      <div className={"divMunicipios"}>
        <Header />
        <Sidebar />
        <div className={"divCadastros"}> 
          <CadastrosRecentes />
        </div>
        <Route path={ `${this.props.match.url}/analises`} component={ Analise } />
        <Route path={ `${this.props.match.url}/questionario`} component={ Questionario } />
      </div>
    )
  }
}

export default Municipio