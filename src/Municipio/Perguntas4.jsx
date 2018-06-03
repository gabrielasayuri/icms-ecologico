import React, { Component } from 'react'
import Header from '../Header'
import SidebarQuest from './SidebarQuest'
import '../CSS/Questionario.css'


class Perguntas4 extends Component {
    //Salvar no banco
    handleSave = (event) => {
        /*event.preventDefault()
        var pergunta23 = document.getElementsByClassName("p23")
        var pergunta24 = document.getElementsByClassName("p24")
        var pergunta25 = document.getElementsByClassName("p25")*/
    }

    render() {
        return (
        <div>
         <Header />
         <SidebarQuest />
            <div className="flex row quest">
                <div className="flex column">
                    <h1>Questionário</h1>
                    <div className="perguntasp flex column">
                        <p className="pergunta">4.1. O município possui algum tipo de ordenamento territorial?</p>
                        <div className='flex row'>
                            <input className="medio p23" type="radio" name="questao1" />
                            <p className="pAlternativas">Sim, 100% </p>
                        </div>
                        <div className='flex row'>
                            <input className="medio p23" type="radio" name="questao1" />
                            <p className="pAlternativas">Não, 0%</p>
                        </div>
                    </div>
                    <div className="perguntas flex column">
                        <p className="pergunta">Que tipo?</p>
                        <div className='flex row'>
                            <input className="medio p24" type="radio" name="questao2" />
                            <p className="pAlternativas">Plano Diretor </p>
                        </div>
                        <div className='flex row'>
                            <input className="medio p24" type="radio" name="questao2" />
                            <p className="pAlternativas">Zoneamento </p>
                        </div>
                        <div className='flex row'>
                            <input className="medio p24" type="radio" name="questao2" />
                            <p className="pAlternativas">Plano de Uso e Ocupação do Solo </p>
                        </div>
                        <div className='flex row'>
                            <input className="medio p24" type="radio" name="questao2" />
                            <p className="pAlternativas">Outros </p>
                        </div>
                    </div>

                    <div className="perguntas flex column">
                        <p className="pergunta">4.2. Existem viveiros de espécies vegetais nativas no município visando a recuperação de áreas degradadas e ações de educação ambiental? </p>
                        <div className='flex row'>
                            <input className="medio 25" type="radio" name="questao4" />
                            <p className="pAlternativas">Sim, 100% </p>
                        </div>
                        <div className='flex row'>
                            <input className="medio 25" type="radio" name="questao4" />
                            <p className="pAlternativas">Não, 0%</p>
                        </div>
                    </div>
                    
                    <button className="button" onClick={this.proximo}>
                        <a className="linkProximo" href="#">
                            Enviar
                        </a>
                    </button>

                </div>
            </div>
            </div>
        )
    }
}

export default Perguntas4