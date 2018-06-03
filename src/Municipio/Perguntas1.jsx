import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import  {base, auth} from '../base'

import '../CSS/Questionario.css'


class Perguntas1 extends Component {
    constructor(){
        super();
     this.handleSave = this.handleSave.bind(this);   
    }

    //Salvar no banco
    handleSave = () => {
        /*var pergunta1 = document.getElementsByClassName("p1")
        var pergunta2 = document.getElementsByClassName("p2")
        var pergunta3 = document.getElementByClassName("p3").value
        var pergunta4 = document.getElementsByClassName("p4")
        var pergunta5 = document.getElementByClassName("p5").value

        for(var i = 0;i<pergunta1.length;i++){
            console.log("oi")
        }*/
    } 
    
    proximo() {
        <NavLink to="/Perguntas2">About</NavLink>
    }

    render() {
        return (
            <form className="flex row quest" onSubmit={this.handleSave}>
                <div className="flex column">
                    <h1>Questionário</h1>
                    <div className="perguntasp flex column">
                        <p className="pergunta">1.1 Que porcentagem de domicílios são atendidos com água tratada/encanada, considerando área urbana e rural?</p>
                        <div className='flex row'>
                            <input className="medio p1" type="radio" name="questao1" />
                            <p className="pAlternativas">76 a 100% 100% </p>
                        </div>
                        <div className='flex row'>
                            <input className="medio p1" type="radio" name="questao1" />
                            <p className="pAlternativas">51% a 75% 67% </p>
                        </div>
                        <div className='flex row'>
                            <input className="medio p1" type="radio" name="questao1" />
                            <p className="pAlternativas">26% a 50 33%</p>
                        </div>
                        <div className='flex row'>
                            <input className="medio p1" type="radio" name="questao1" />
                            <p className="pAlternativas">0% a 25% 0%</p>
                        </div>
                    </div>

                    <div className="perguntas flex column">
                        <p className="pergunta">1.2. Como é o sistema de esgoto no município?</p>
                        <div className='flex row'>
                            <input className="medio p2" type="radio" name="questao2" />
                            <p className="pAlternativas">tratado </p>
                        </div>
                        <div className='flex row'>
                            <input className="medio p2" type="radio" name="questao2" />
                            <p className="pAlternativas">fossa séptica com sumidouro </p>
                        </div>
                        <div className='flex row'>
                            <input className="medio p2" type="radio" name="questao2" />
                            <p className="pAlternativas">sumidouro (só fossa) </p>
                        </div>
                        <div className='flex row'>
                            <input className="medio p2" type="radio" name="questao2" />
                            <p className="pAlternativas">a céu aberto </p>
                        </div>
                    </div>

                    <div className="perguntas flex column">
                        <p className="pergunta">Quantos metros de rede já estão instalados?  </p>
                        <div className='flex row'>
                            <input className="p3" type="text" refValue={ref => this.q3 = ref} idValue='q3' />
                        </div>
                    </div>

                    <div className="perguntas flex column">
                        <p className="pergunta">1.4. Existe ETE? </p>
                        <div className='flex row'>
                            <input className="medio p4" type="radio" name="questao4" />
                            <p className="pAlternativas">Sim 100% </p>
                        </div>
                        <div className='flex row'>
                            <input className="medio p4" type="radio" name="questao4" />
                            <p className="pAlternativas">Sim, porém sem operação 50% </p>
                        </div>
                        <div className='flex row'>
                            <input className="medio p4" type="radio" name="questao4" />
                            <p className="pAlternativas">Não 0%</p>
                        </div>
                    </div>

                    <div className="perguntas flex column">
                        <p className="pergunta">1.5. Qual o destino do esgoto coletado e tratado? O local (córrego, rio) em que está sendo despejado o esgoto tratado </p>
                        <div className='flex row'>
                            <input className="p5" type="text" name="questao5" />
                        </div>
                    </div>

                    <button className="button" onClick={this.proximo}>
                        <button className="linkProximo" onClick={this.handleSave()}>
                            Próximo
                        </button>
                    </button>

                </div>
            </form>
        )
    }
}

export default Perguntas1