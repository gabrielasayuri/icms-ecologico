import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import './CSS/App.css'
import MainPage from './Admin/MainPage'
import AboutPage from './AboutPage'
import LoginPage from './LoginPage'
import AdminPage from './Admin/AdminPage'
import Questionario from './Municipio/Questionario'
import Municipio from './Admin/Municipio'
import CadastroPrazo from './Admin/CadastroPrazo'
import Acesso from './Admin/Acesso'
import Perguntas2 from './Municipio/Perguntas2'
import Perguntas3 from './Municipio/Perguntas3'
import Perguntas4 from './Municipio/Perguntas4'
import Analise from './Admin/Analise'
import AdminCadastros from './Admin/AdminCadastros'
import TipoQuest from './Municipio/TipoQuest'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact={true} path='/' component={MainPage} />
            <Route path='/sobre' component={AboutPage} />
            <Route path='/login' component={LoginPage} />
            <Route path='/acesso' component={Acesso} />
            <Route path='/admin' component={AdminPage} />
            <Route path='/municipio' component={Municipio} />
            <Route path='/prazo' component={CadastroPrazo} />
            <Route path='/analises' component={Analise} />
            <Route path='/questionario/tipo-questionario' component={TipoQuest} />
            <Route path='/questionario/qualidade-de-vida' component={Questionario} />
            <Route path='/questionario/educacao-ambiental' component={Perguntas2} />
            <Route path='/questionario/poder-publico-pela-uc' component={Perguntas3} />
            <Route path='/questionario/melhoria-ambiental' component={Perguntas4} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
