import React, { Component } from 'react'

import '../CSS/municipio.css'
import { base } from '../base'
import InputField from '../InputField'

class CadastrosRecentes extends Component {

  constructor(props) {
    super(props)

    this.state = {
      municipios: [],
      key: null,
      search: ''
    }

    this.listItem = this.listItem.bind(this)
    this.handleSave = this.handleSave.bind(this)
    this.handleSave = this.handleSave.bind(this)

  }

  componentDidMount() {
    this.ref = base.syncState('municipios', {
      context: this,
      state: 'municipios',
      asArray: true,
      queries: {
        orderByChild: 'nome'
      }
    })
  }

  listItem(key, municipio) {
    return (
      <div key={key} className='card'>
        <p className='card-title'>{municipio.nome}</p>
        <p className='card-subtitle'>{municipio.nome}</p>
        <button className="btn" onClick={() => this.getThisItem(key)}>Editar</button>
      </div>
    )
  }

  getThisItem = (key) => {
    console.log(key)
    this.nome.value = this.state.municipios[key].nome
    this.email.value = this.state.municipios[key].email
    this.senha.value = this.state.municipios[key].senha
    this.cep.value = this.state.municipios[key].cep
    this.ibge.value = this.state.municipios[key].ibge
    this.setState({
      key: this.state.municipios[key].key
    })
  }

  handleSave(event) {
    event.preventDefault()
    const nome = this.nome.value
    const email = this.email.value
    const senha = this.senha.value
    const cep = this.cep.value
    const ibge = this.ibge.value

    this.state.key ?
      base.update('municipios/' + this.state.key, {
        data: {
          nome,
          email,
          senha,
          cep,
          ibge
        }
      }).then(() => {
        this.setState({
          key: null
        })
      }).catch(error => {
        console.log(error)
      })
      :
      base.push('municipios' + this.state.key, {
        data: {
          nome,
          email,
          senha,
          cep,
          ibge
        }
      }).then(() => {
      }).catch(error => {
        console.log(error)
      })
    this.nome = ""
    this.email = ""
    this.senha = ""
    this.cep = ""
    this.ibge = ""
  }

  /*handleSearch = () => {
    this.setState({
      search: this.search.value
    })
  }*/

  render() {
    return (
      <div className='flex row'>
        <div className='flex column vertical-align-row form-wrapper'>
          <form onSubmit={this.handleSave}>
            <InputField
              refValue={ref => this.email = ref}
              idValue='email'
              typeValue='text'
              requiredValue={true}
              labelText='E-mail'
              spanWidth='80px' />

            <InputField
              refValue={ref => this.senha = ref}
              idValue='senha'
              typeValue='text'
              requiredValue={true}
              labelText='Senha'
              spanWidth='80px' />

            <InputField
              refValue={ref => this.nome = ref}
              idValue='nome'
              typeValue='text'
              requiredValue={true}
              labelText='Município'
              spanWidth='100px' />

            <InputField
              refValue={ref => this.cep = ref}
              idValue='cep'
              typeValue='number'
              requiredValue={true}
              labelText='CEP'
              spanWidth='110px' />

            <InputField
              refValue={ref => this.ibge = ref}
              idValue='ibge'
              typeValue='text'
              requiredValue={true}
              labelText='Código IBGE'
              spanWidth='110px' />

            <button type='submit' className="button-create" >Salvar dados do município</button>

          </form>
        </div>

        <div className='flex column vertical-align-row list-wrapper'>

          {/*<InputField
            refValue={ref => this.search = ref}
            idValue='search'
            keyUp={this.handleSearch}
            typeValue='text'
            requiredValue={false}
            label='Pesquisa'
            spanWidth="70px"
          />*/}

          {
            Object
              .keys(this.state.municipios)
              .map(posicaoVet => {
                /*if (this.state.municipios[posicaoVet].nome.toUpperCase().includes(this.search.value.toUpperCase())) {}*/
                  return this.listItem(posicaoVet, this.state.municipios[posicaoVet])
              })
          }
        </div>

      </div>
    )
  }
}

export default CadastrosRecentes
