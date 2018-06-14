import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { base, auth } from '../base'
import Header from './Header'
import SidebarQuest from './SidebarQuest'
import '../CSS/Questionario.css'
import ProgressBar from '../ProgressBar'


class Perguntas2 extends Component {

    constructor(props) {
        super(props)

        this.state = {
            progresso: 0,
            rota: '/questionario/poder-publico-pela-uc',
            salvo: false
        }
    }

    //Salvar no banco
    handleSave = (event) => {
        event.preventDefault()

        const p7 = this.p7.value;
        var progresso = " "

        const x = window.document.getElementsByClassName('medio')
        const y = window.document.querySelectorAll('input[type=text]')
        var user = auth.currentUser;

        const obj = {
            p7,
            progresso
        }

        for (let i = 0; i < x.length; i++) {

            if (x[i].checked === true) {

                console.log(x[i].value)

                obj[x[i].name] = x[i].value

                this.setState({
                    progresso: this.state.progresso++
                })

            }

            obj.progresso = this.state.progresso

        }

        for (let i = 0; i < y.length; i++) {
            if (y[i].value != "") {
                obj.progresso++
            }
        }



        user.uid ?
            base.update('municipios/' + user.uid, {
                data: obj,
                then: () => {
                    this.setState({
                        salvo: true,
                        progresso: this.state.progresso
                    })
                }
            }).catch(error => {
                console.log(error)
            })
            :
            base.push('municipios' + user.uid, {
                data: {
                    obj,
                    then: () => {
                        this.setState({
                            salvo: true,
                            progresso: this.state.progresso
                        })
                    }
                }
            }).then(() => {
            }).catch(error => {
                console.log(error)
            })
    }

    render() {
        if (this.state.salvo) {
            return <Redirect to={this.state.rota} />
        }

        return (
            <div>
                <Header />
                <SidebarQuest />
                <form className="flex row1 quest" onSubmit={this.handleSave}>
                    <div className="flex column">
                        <ProgressBar/>
                        <h1 className="branco">Questionário</h1>
                        <div className="perguntasp flex column">
                            <p className="pergunta">2.1. O município realiza ações relevantes em educação ambiental?</p>
                            <div className='flex row1'>
                                <input className="medio " type="radio" value="100%" name="p6" />
                                <p className="pAlternativas">Sim, 100%</p>
                            </div>
                            <div className='flex row1'>
                                <input className="medio " type="radio" value="0%" name="p6" />
                                <p className="pAlternativas">Não, 0%</p>
                            </div>
                        </div>

                        <div className="perguntas flex column">
                            <p className="pergunta">Quais?</p>
                            <div className='flex row1'>
                                <input ref={ref => this.p7 = ref} id='p7' type="text" />
                            </div>
                        </div>

                        <button className='button' /*disabled={this.state.rota}*/ type='submit'>Próximo</button>

                    </div>
                </form>
            </div>
        )
    }
}

export default Perguntas2