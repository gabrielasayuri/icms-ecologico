import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

import { auth } from './base'
import InputField from './InputField'
import Navbar from './Navbar'
import './CSS/login.css'

class LoginPage extends Component {
  constructor(props) {
    super(props)

    this.email = null
    this.passwd = null

    this.state = {
      isLogging: false,
      isLoggedIn: false,
      error: false,
      rota: ''
    }

    this.removeAuth = auth.onAuthStateChanged(user => {
      if (user) {
        this.setState({
          isLoggedIn: true
        })
      }
    })

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    event.preventDefault()
    this.setState({ isLogging: true, error: false })
    auth
      .signInWithEmailAndPassword(this.email.value, this.passwd.value)
      .then((user) => {
        user.user.email === 'gabriela.ribeiro@novaandradina.org' ?
          this.setState({
            isLoggedIn: true,
            rota: '/admin/analises'
          })
          :
          this.setState({
            isLoggedIn: true,
            rota: '/questionario/qualidade-de-vida'
          })
      })
      .catch((error) => {
        this.setState({
          error: true,
          isLogging: false
        })
      })
  }

  render() {

    if (this.state.isLoggedIn) {
      return <Redirect to={this.state.rota} />
    }

    return (
      <div>
        <Navbar />
        <div className='header-container flex row center-center full-view' >
          <form onSubmit={this.handleClick} className="login-wrapper login flex column justify-center">

            {/*<div className='brand-login'>
                <h1>ICMS<span className='title'>Ecológico</span></h1>
                <h5>MATO GROSSO DO SUL</h5>
              </div>*/}

            <div className="brand-login">
              <img className="user" src={require('./images/user-preto.svg')} />
            </div>

            <InputField refValue={ref => this.email = ref} idValue='email' typeValue='text' requiredValue={true} labelText='E-mail' />

            <InputField refValue={ref => this.passwd = ref} idValue='pass' typeValue='password' requiredValue={true} labelText='Senha' />

            {this.state.error && <p>Usuário e/ou senha inválido(s)!</p>}

            <button className='button-loggout' disabled={this.state.isLogging} type='submit'>Acessar</button>

          </form>
        </div>
      </div>
    )
  }
}

export default LoginPage