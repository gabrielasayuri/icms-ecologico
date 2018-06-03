import React, { Component } from 'react'
import Header from '../Header'
import SidebarQuest from './SidebarQuest'
import '../CSS/Questionario.css'


class Perguntas2 extends Component {
    //Salvar no banco
    handleSave = (event) => {
        /*event.preventDefault()
        var pergunta6 = document.getElementsByClassName("p6")
        var pergunta7 = document.getElementByClassName("p7").value*/
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
                        <p className="pergunta">2.1. O município realiza ações relevantes em educação ambiental?</p>
                        <div className='flex row'>
                            <input className="medio p6" type="radio" name="questao1" />
                            <p className="pAlternativas">Sim, 100%</p>
                        </div>
                        <div className='flex row'>
                            <input className="medio p6" type="radio" name="questao1" />
                            <p className="pAlternativas">Não, 0%</p>
                        </div>
                    </div>

                    <div className="perguntas flex column">
                        <p className="pergunta">Quais?</p>
                        <div className='flex row'>
                            <input className="p7" type="text" name="questao5" />
                        </div>
                    </div>

                    <button className="button" onClick={this.proximo}>
                        <a className="linkProximo" href="/questionario/poder-publico-pela-uc">
                            Próximo
                        </a>
                    </button>

                </div>
            </div>
            </div>
        )
    }
}

export default Perguntas2