import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { base, auth } from '../base'
import Header from './Header'
import SidebarQuest from './SidebarQuest'
import '../CSS/Questionario.css'


class Perguntas4 extends Component {
    constructor() {
        super();
        this.handleSave = this.handleSave.bind(this);

        this.state = {
            rota: '',
            salvo: false
        }
    }
    //Salvar no banco
    handleSave = (event) => {
        event.preventDefault()

        const x = window.document.getElementsByClassName('medio')
        var user = auth.currentUser;

        console.log(user.uid)

        const obj = {}

        for (let i = 0; i < x.length; i++) {

            if (x[i].checked === true) {

                console.log(x[i].value)

                obj[x[i].name] = x[i].value
            }
        }

        user.uid ?
            base.update('Questionario/' + user.uid, {
                data: obj,
                then: () => {
                    this.setState({
                        salvo: true
                    })
                }
            }).catch(error => {
                console.log(error)
            })
            :
            base.push('Questionario', {
                data: {
                    obj,
                    then: () => {
                        this.setState({
                            salvo: true
                        })
                    }
                }
            }).then(() => {
            }).catch(error => {
                console.log(error)
            })
    }

    render() {
        {/*if (this.state.salvo) {
            return <Redirect to={this.state.rota} />
        }*/}
        return (
            <div>
                <Header />
                <SidebarQuest />
                <form className="flex row1 quest" onSubmit={this.handleSave}>
                    <div className="flex column">
                        <h1>Questionário</h1>
                        <div className="perguntasp flex column">
                            <p className="pergunta">4.1. O município possui algum tipo de ordenamento territorial?</p>
                            <div className='flex row1'>
                                <input className="medio " type="radio" value="100%" name="p23" />
                                <p className="pAlternativas">Sim, 100% </p>
                            </div>
                            <div className='flex row1'>
                                <input className="medio " type="radio" value="0%" name="p23" />
                                <p className="pAlternativas">Não, 0%</p>
                            </div>
                        </div>
                        <div className="perguntas flex column">
                            <p className="pergunta">Que tipo?</p>
                            <div className='flex row1'>
                                <input className="medio " type="radio" value="1" name="p24" />
                                <p className="pAlternativas">Plano Diretor </p>
                            </div>
                            <div className='flex row1'>
                                <input className="medio " type="radio" value="2" name="p24" />
                                <p className="pAlternativas">Zoneamento </p>
                            </div>
                            <div className='flex row1'>
                                <input className="medio " type="radio" value="3" name="p24" />
                                <p className="pAlternativas">Plano de Uso e Ocupação do Solo </p>
                            </div>
                            <div className='flex row1'>
                                <input className="medio " type="radio" value="4" name="p24" />
                                <p className="pAlternativas">Outros </p>
                            </div>
                        </div>

                        <div className="perguntas flex column">
                            <p className="pergunta">4.2. Existem viveiros de espécies vegetais nativas no município visando a recuperação de áreas degradadas e ações de educação ambiental? </p>
                            <div className='flex row1'>
                                <input className="medio " type="radio" value="100%" name="p25" />
                                <p className="pAlternativas">Sim, 100% </p>
                            </div>
                            <div className='flex row1'>
                                <input className="medio " type="radio" value="0%" name="p25" />
                                <p className="pAlternativas">Não, 0%</p>
                            </div>
                        </div>

                        <button className='button' /*disabled={this.state.rota}*/ type='submit'>Próximo</button>

                    </div>
                </form>
            </div>
        )
    }
}

export default Perguntas4