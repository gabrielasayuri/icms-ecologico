import React, { Component } from 'react'
import Header from '../Header'
import SidebarQuest from './SidebarQuest'
import '../CSS/Questionario.css'


class Perguntas4 extends Component {
    //Salvar no banco
    handleSave = (event) => {
        event.preventDefault()
        /*const x = window.document.getElementsByName("p")
        var pergunta23 = document.getElementsByName("p24")
        var pergunta25 = document.getElementsByName("p25")*/

        const x = window.document.getElementsByClassName('medio')

        console.log(x)

        const obj = {}

        for(let i = 0; i < x.length; i++){
            
            if ( x[i].checked===true ) {
                
                console.log(x[i].value)

                obj[x[i].name] = x[i].value
            }
        }

        //save(obj).base
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
                            <input className="medio " type="radio" name="p23" />
                            <p className="pAlternativas">Sim, 100% </p>
                        </div>
                        <div className='flex row'>
                            <input className="medio " type="radio" name="p23" />
                            <p className="pAlternativas">Não, 0%</p>
                        </div>
                    </div>
                    <div className="perguntas flex column">
                        <p className="pergunta">Que tipo?</p>
                        <div className='flex row'>
                            <input className="medio " type="radio" name="p24" />
                            <p className="pAlternativas">Plano Diretor </p>
                        </div>
                        <div className='flex row'>
                            <input className="medio " type="radio" name="p24" />
                            <p className="pAlternativas">Zoneamento </p>
                        </div>
                        <div className='flex row'>
                            <input className="medio " type="radio" name="p24" />
                            <p className="pAlternativas">Plano de Uso e Ocupação do Solo </p>
                        </div>
                        <div className='flex row'>
                            <input className="medio " type="radio" name="p24" />
                            <p className="pAlternativas">Outros </p>
                        </div>
                    </div>

                    <div className="perguntas flex column">
                        <p className="pergunta">4.2. Existem viveiros de espécies vegetais nativas no município visando a recuperação de áreas degradadas e ações de educação ambiental? </p>
                        <div className='flex row'>
                            <input className="medio " type="radio" name="25" />
                            <p className="pAlternativas">Sim, 100% </p>
                        </div>
                        <div className='flex row'>
                            <input className="medio " type="radio" name="25" />
                            <p className="pAlternativas">Não, 0%</p>
                        </div>
                    </div>
                    
                    <button className="button" onClick={this.proximo}>
                        <a className="linkProximo">
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