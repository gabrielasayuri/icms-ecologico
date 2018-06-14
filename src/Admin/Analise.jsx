import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'

import { auth, base } from '../base'
import Sidebar from '../Sidebar';
import Header from '../Municipio/Header'
import ProgressBar from '../ProgressBar'

class AdminPage extends Component {

  constructor(props) {
    super(props)

    this.state = {
      municipios: [],
      key: null
    }
  }

  componentDidMount = () => {
     base.syncState('municipios', {
       context: this,
       state: 'municipios',
       asArray: true
     })

     base.syncState('Questionario', {
      context: this,
      state: 'Questionario',
      asArray: true
     })
  }

  mostraMunicipio = ( chave ) => {
    const municipio = this.state.municipios[chave]
    return(
      <div className="card-analise">
          <div className="container">
            <h4><b>{municipio.nome}</b></h4> 
            <h4><b>{municipio.progresso}</b></h4>
            
            <ProgressBar/>
            
          </div>
        </div>
    )
  }

  render() {
    return (
      <div>
        <Header />
        <Sidebar />
        <div className="flex row1 analise">
        
          {
            Object
              .keys( this.state.municipios )
              .map( chave => this.mostraMunicipio(chave))
          }
        </div>
      </div>
    )
  }
}

export default AdminPage