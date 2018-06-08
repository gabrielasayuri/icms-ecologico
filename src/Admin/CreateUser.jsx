import React, { Component } from 'react'

import { auth, base } from '../base'
import InputField from '../InputField';


class CreateUser extends Component {
  constructor(props) {
    super(props)

    this.email = null

    this.state = {
      municipios: []
    }
  }

  componentDidMount() {
    base.syncState('municipios', {
      context: this,
      state: 'municipios',
      asArray: true, 
      queries: {
        orderByChild: 'nome_razao',
      }
    })
  }

  handleSave = (event) => {
    event.preventDefault()
    console.log(this.email.value)
    const email = this.email.value
    const password = this.senha.value
    const displayName = this.nomeMunicipio.value
    const nomeUC = this.nomeUC.value
    const categM = this.categM.value
    const nomeInterface = this.nomeInterface.value
    const areaInterface = this.areaInterface.value

    auth.createUserAndRetrieveDataWithEmailAndPassword(email, password)
      .then(function () {
        console.log('Tudo certo')
      }).catch(function (error) {
        console.log(error)
      })

    const user = auth.currentUser
    console.log(user)

    user.updateProfile({
      displayName
    }).then(function () {
      console.log('Tudo certo')
    }).catch(function (error) {
      console.log(error)
    })

    base.post(`municipios/${user.uid}`, {
      data: {
        nomeUC,
        categM,
        nomeInterface,
        areaInterface
      }
    })
  }

  render() {
    const user = auth.currentUser
    
    return (
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
          refValue={ref => this.nomeMunicipio = ref}
          idValue='nomeMunicipio'
          typeValue='text'
          requiredValue={true}
          labelText='Município'
          spanWidth='100px' />

        <InputField
          refValue={ref => this.nomeUC = ref}
          idValue='nomeUC'
          typeValue='text'
          requiredValue={true}
          labelText='Nome da UC'
          spanWidth='110px' />

          <InputField
          refValue={ref => this.categM = ref}
          idValue='categM'
          typeValue='text'
          requiredValue={true}
          labelText='Categoria de Manejo'
          spanWidth='110px' />

          <InputField
          refValue={ref => this.nomeInterface = ref}
          idValue='nomeInterface'
          typeValue='text'
          requiredValue={true}
          labelText='Nome do município de interface'
          spanWidth='200px' />

          <InputField
          refValue={ref => this.areaInterface = ref}
          idValue='areaInterface'
          typeValue='text'
          requiredValue={true}
          labelText='Área total do município de interface'
          spanWidth='220px' />
          
        <button type='submit' className="button-create" >Salvar dados do município</button>
      </form>
    )
  }
}

export default CreateUser