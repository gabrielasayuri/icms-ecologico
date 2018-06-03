import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'

import { auth } from '../base'
import AdminCadastros from '../Admin/AdminCadastros'
import Perguntas1 from './Perguntas1'
import Header from '../Header'
import SidebarQuest from './SidebarQuest'
import '../CSS/Questionario.css'

class Questionario extends Component {
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
      <div>
        <Header />
        <SidebarQuest />
        <div> 
          <Perguntas1 />
        </div>
      </div>
    )
  }
}

export default Questionario