import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'

import { auth } from '../base'
import Questionario from '../Municipio/Questionario'
import AdminCadastros from './AdminCadastros'
import Analise from  './Analise'

class AdminPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isAuthing: true,
      isLoggedIn: false,
      user: null
    }
    
    //this.handleExit = this.handleExit.bind(this)
  }

  componentDidMount() {
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

    if(this.state.user.email !== 'gabriela.ribeiro@novaandradina.org'){
      return <Redirect to='/questionario/qualidade-de-vida' />
    }
    return (
      <div>        
        <Route exact path={ `${this.props.match.url}/analises`} component={ Analise } />
        
        <Route path={ `${this.props.match.url}/cadastros`} component={ AdminCadastros } />
        
      </div>
    )
  }
}

export default AdminPage