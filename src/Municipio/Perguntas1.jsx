import React, { Component } from 'react'
import { NavLink, Redirect } from 'react-router-dom'
import { base, auth } from '../base'

import '../CSS/Questionario.css'


class Perguntas1 extends Component {
    constructor() {
        super();
        this.handleSave = this.handleSave.bind(this);

        this.state = {
            rota: '/questionario/educacao-ambiental',
            salvo: false
        }
    }

    //Salvar no banco
    handleSave = (event) => {
        event.preventDefault()

        const p3 = this.p3.value
        const p5 = this.p5.value

        const x = window.document.getElementsByClassName('medio')
        var user = auth.currentUser;

        console.log(user.uid)

        const obj = {
            p3,
            p5
        }

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
            base.push('Questionario' + user.uid, {
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

        if (this.state.salvo) {
            return <Redirect to={this.state.rota} />
        }

        return (
            <form className="flex row1 quest" onSubmit={this.handleSave}>
                <div className="flex column">
                    <h1>Questionário</h1>
                    <div className="perguntasp flex column">
                        <p className="pergunta">1.1 Que porcentagem de domicílios são atendidos com água tratada/encanada, considerando área urbana e rural?</p>
                        <div className='flex row1'>
                            <input className="medio" value="100%" type="radio" name="p1" />
                            <p className="pAlternativas" >76 a 100% 100% </p>
                        </div>
                        <div className='flex row1'>
                            <input className="medio" value="67%" type="radio" name="p1" />
                            <p className="pAlternativas">51% a 75% 67% </p>
                        </div>
                        <div className='flex row1'>
                            <input className="medio" value="33%" type="radio" name="p1" />
                            <p className="pAlternativas">26% a 50 33%</p>
                        </div>
                        <div className='flex row1'>
                            <input className="medio" value="0%" type="radio" name="p1" />
                            <p className="pAlternativas">0% a 25% 0%</p>
                        </div>
                    </div>

                    <div className="perguntas flex column">
                        <p className="pergunta">1.2. Como é o sistema de esgoto no município?</p>
                        <div className='flex row1'>
                            <input className="medio " value="1" type="radio" name="p2" />
                            <p className="pAlternativas">tratado </p>
                        </div>
                        <div className='flex row1'>
                            <input className="medio " value="2" type="radio" name="p2" />
                            <p className="pAlternativas">fossa séptica com sumidouro </p>
                        </div>
                        <div className='flex row1'>
                            <input className="medio " value="3" type="radio" name="p2" />
                            <p className="pAlternativas">sumidouro (só fossa) </p>
                        </div>
                        <div className='flex row1'>
                            <input className="medio " value="4" type="radio" name="p2" />
                            <p className="pAlternativas">a céu aberto </p>
                        </div>
                    </div>

                    <div className="perguntas flex column">
                        <p className="pergunta">Quantos metros de rede já estão instalados?  </p>
                        <div className='flex row1'>
                            <input type="text" ref={ref => this.p3 = ref} id='p3' />
                        </div>
                    </div>

                    <div className="perguntas flex column">
                        <p className="pergunta">1.4. Existe ETE? </p>
                        <div className='flex row1'>
                            <input className="medio " value="100%" type="radio" name="p4" />
                            <p className="pAlternativas">Sim 100% </p>
                        </div>
                        <div className='flex row1'>
                            <input className="medio " value="50%" type="radio" name="p4" />
                            <p className="pAlternativas">Sim, porém sem operação 50% </p>
                        </div>
                        <div className='flex row1'>
                            <input className="medio " value="0%" type="radio" name="p4" />
                            <p className="pAlternativas">Não 0%</p>
                        </div>
                    </div>

                    <div className="perguntas flex column">
                        <p className="pergunta">1.5. Qual o destino do esgoto coletado e tratado? O local (córrego, rio) em que está sendo despejado o esgoto tratado </p>
                        <div className='flex row1'>
                            <input ref={ref => this.p5 = ref} id='p5' type="text" />
                        </div>
                    </div>

                    <button className='button' /*disabled={this.state.rota}*/ type='submit'>Próximo</button>

                </div>
            </form>
        )
    }
}

export default Perguntas1