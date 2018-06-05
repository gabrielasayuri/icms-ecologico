import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

import '../CSS/municipio.css'
import { base } from '../base'
import InputField from '../InputField'

class Prazo extends Component {

  constructor(props) {
    super(props)
    this.inicio = null
    this.fim = null

    this.state = {
        key: null
    }
  }

  handleSave(event) {
    event.preventDefault()
    const email = this.email.value
    const senha = this.senha.value
  }

  render() {
    return (
      <div className='flex row'>
        <form onSubmit={this.handleSave} className='flex column vertical-align-row form-wrapper'>
          <InputField refValue={ref => this.inicio = ref} idValue='inicio' typeValue='text' requiredValue={true} labelText='Data início' spanWidth='70px' />
          <InputField refValue={ref => this.fim = ref} idValue='fim' typeValue='text' requiredValue={true} labelText='Data término' spanWidth='80px' />
          {this.state.key ? 
            <button className='btn btn-warning' type='submit'><i className='ti-save icon'></i> Alterar </button>
            :
            <button className='btn btn-primary' type='submit'><i className='ti-save icon'></i> Salvar</button> 
        }

        </form>
      </div>
    )
  }
}

export default Prazo
