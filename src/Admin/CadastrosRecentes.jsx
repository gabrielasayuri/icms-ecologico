import React, { Component, Link } from 'react'

import '../CSS/municipio.css'
import { base } from '../base'
import InputField from '../InputField'
import CreateUser from './CreateUser'

class CadastrosRecentes extends Component {

  constructor(props) {
    super(props)

    this.state = {
      municipios: [],
      key: null,
      search: ''
    }

    this.listItem = this.listItem.bind(this)
    this.handleRemove = this.handleRemove.bind(this)
    this.handleSave = this.handleSave.bind(this)
    
  }

 componentDidMount() {
   
  this.ref = base.syncState('municipios', {
      context: this,
      state: 'municipios',
      asArray: true,
      queries: {
        orderByChild: 'email'
      }
    })
  }

  handleRemove(key) {
    this.ref = base.remove('municipios/' + this.state.municipios[key].key)
      .then(() => {
        console.log('Sucesso')
      })
      .catch((error) => {
        console.log(error)
      })
  }

  listItem(key, municipio) {
    return (
      <div key={key} className='flex row card center-center'>
        <div className='grow-1'>
          <p className='card-title'>{municipio.nome}</p>
            <button className="btn" onClick={() => this.handleRemove(key)}>Excluir</button>
            <button className="btn" onClick={() => this.getThisItem(key)}>Editar</button>
        </div>
      </div>
    )
  }

  getThisItem = (key) => {
    console.log(key)
    this.email.value = this.state.municipios[key].email
    this.senha.value = this.state.municipios[key].senha
    this.setState({
      key: this.state.municipios[key].key
    })
  }

  handleSave(event) {
    event.preventDefault()
    {const email = this.email.value
    const senha = this.senha.value

    this.state.key ?
      base.update('municipios/' + this.state.key, {
        data: {
          email,
          senha
        }
      }).then(() => {
        this.setState({
          key: null
        })
      }).catch(error => {
        console.log(error)
      })
      :
      base.push('municipios', {
        data: {
          email,
          senha
        }
      }).then(() => {
      }).catch(error => {
        console.log(error)
      })
    this.email.value = ''
    this.senha.value = ''
    this.email.focus()}
    }

  handleSearch = () => {
    this.setState({
      search: this.search.value
    })
  }

 
  render() {
    return (
      <div className='flex row'>
        <div onSubmit={this.handleSave} className='flex column vertical-align-row form-wrapper'>
          
        </div>

        <div className='flex column vertical-align-row list-wrapper'>
          {
            Object
              .keys(this.state.municipios)
              .map(posicaoVet => {
                
                  return this.listItem(posicaoVet, this.state.municipios[posicaoVet])
                
              })
          }
        </div>
      </div>
    )
  }
}

export default CadastrosRecentes
