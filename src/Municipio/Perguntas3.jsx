import React, { Component } from 'react'
import Header from '../Header'
import SidebarQuest from './SidebarQuest'
import '../CSS/Questionario.css'


class Perguntas3 extends Component {
    //Salvar no banco
    handleSave = (event) => {
        event.preventDefault()
        /*var pergunta8 = document.getElementsByName("p8")
        //var pergunta9 = document.getElementByClassName("p9").value
        var pergunta10 = document.getElementsByName("p10")
        //var pergunta11 = document.getElementByClassName("p11").value
        var pergunta12 = document.getElementsByName("p12")
        var pergunta13 = document.getElementsByName("p13")
        var pergunta14 = document.getElementsByName("p14")
        var pergunta15 = document.getElementsByName("p15")
        var pergunta16 = document.getElementsByName("p16")
        //var pergunta17 = document.getElementByClassName("p17").value
        var pergunta18 = document.getElementsByName("p18")
        var pergunta19 = document.getElementsByName("p19")
        var pergunta20 = document.getElementsByName("p20")
        var pergunta21 = document.getElementsByName("p21")
        var pergunta22 = document.getElementsByName("p22")*/

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
                        <p className="pergunta">3.1. Já existe no município Secretaria, núcleo, departamento ou gerência destinada à conservação ambiental?  </p>
                        <div className='flex row'>
                            <input className="medio " type="radio" name="p8" />
                            <p className="pAlternativas">Sim, 100%</p>
                        </div>
                        <div className='flex row'>
                            <input className="medio " type="radio" name="p8" />
                            <p className="pAlternativas">Não, 0%</p>
                        </div>
                    </div>
                    <div className="perguntas flex column">
                        <p className="pergunta">Quais?</p>
                        <div className='flex row'>
                            <input className="p9" type="text" name="questao5" />
                        </div>
                    </div>

                    <div className="perguntas flex column">
                        <p className="pergunta">3.1. Já existe no município Secretaria, núcleo, departamento ou gerência destinada à conservação ambiental?  </p>
                        <div className='flex row'>
                            <input className="medio " type="radio" name="p10" />
                            <p className="pAlternativas">Sim</p>
                        </div>
                        <div className='flex row'>
                            <input className="medio " type="radio" name="p10" />
                            <p className="pAlternativas">Não</p>
                        </div>
                    </div>
                    <div className="perguntas flex column">
                        <p className="pergunta">Número de funcionários:</p>
                        <div className='flex row'>
                            <input className="p11" type="text" name="questao5" />
                        </div>
                    </div>

                    <div className="perguntas flex column">
                        <p className="pergunta">3.3. A prefeitura tem apoiado a UC/TI com condições de trabalho para a equipe técnica (infraestrutura tais como: computador com internet, telefone, fax, veículo; número de funcionários suficiente para atender todo o processo de gestão das questões ambientais diretamente relacionadas a UC/TI): </p>
                        <div className='flex row'>
                            <input className="medio " type="radio" name="p12" />
                            <p className="pAlternativas">Sim, 100% </p>
                        </div>
                        <div className='flex row'>
                            <input className="medio " type="radio" name="p12" />
                            <p className="pAlternativas">Parcialmente, 50% </p>
                        </div>
                        <div className='flex row'>
                            <input className="medio " type="radio" name="p12" />
                            <p className="pAlternativas">Não, 0% </p>
                        </div>
                    </div>

                    <div className="perguntas flex column">
                        <p className="pergunta">3.4. Existem ações de divulgação das UCs/TIs por parte da prefeitura?  </p>
                        <div className='flex row'>
                            <input className="medio " type="radio" name="p13" />
                            <p className="pAlternativas">Sim</p>
                        </div>
                        <div className='flex row'>
                            <input className="medio " type="radio" name="p13" />
                            <p className="pAlternativas">Não</p>
                        </div>
                    </div>
                    <div className="perguntas flex column">
                        <p className="pergunta">Quais?  </p>
                        <div className='flex row'>
                            <input className="p14" type="text" name="questao3" />
                        </div>
                    </div>

                    <div className="perguntas flex column">
                        <p className="pergunta">3.5. Existe Fundo Municipal de Meio Ambiente legalmente criado? </p>
                        <div className='flex row'>
                            <input className="medio " type="radio" name="p15" />
                            <p className="pAlternativas">Sim 100% </p>
                        </div>
                        <div className='flex row'>
                            <input className="medio " type="radio" name="p15" />
                            <p className="pAlternativas">Não 0%</p>
                        </div>
                    </div>

                    <div className="perguntas flex column">
                        <p className="pergunta">3.6. Existe Conselho Municipal de Meio Ambiente formalmente instituído?  </p>
                        <div className='flex row'>
                            <input className="medio " type="radio" name="p16" />
                            <p className="pAlternativas">Sim 100% </p>
                        </div>
                        <div className='flex row'>
                            <input className="medio " type="radio" name="p16" />
                            <p className="pAlternativas">Não 0%</p>
                        </div>
                    </div>
                    <div className="perguntas flex column">
                        <p className="pergunta">Denominaçao: </p>
                        <div className='flex row'>
                            <input className="p17" type="text" name="questao3" />
                        </div>
                    </div>

                    <div className="perguntas flex column">
                        <p className="pergunta">3.7. O Conselho está ativo? </p>
                        <div className='flex row'>
                            <input className="medio " type="radio" name="p18" />
                            <p className="pAlternativas">Sim (com nomeação dos membros, regimento instituído, reuniões periódicas previstas em calendário e livro Ata), 100% </p>
                        </div>
                        <div className='flex row'>
                            <input className="medio " type="radio" name="p18" />
                            <p className="pAlternativas">Não, 0%</p>
                        </div>
                    </div>

                    <div className="perguntas flex column">
                        <p className="pergunta">3.8. Foi apresentado ao IMASUL plano de aplicação dos recursos de ICMS Ecológico PARA ESTE ANO, DENTRO DO PRAZO ESPECIFICADO? </p>
                        <div className='flex row'>
                            <input className="medio " type="radio" name="p19" />
                            <p className="pAlternativas">Sim, 100% </p>
                        </div>
                        <div className='flex row'>
                            <input className="medio " type="radio" name="p19" />
                            <p className="pAlternativas">Não, 0%</p>
                        </div>
                    </div>

                    <div className="perguntas flex column">
                        <p className="pergunta">3.9. O Conselho Municipal responsável pelo meio ambiente participou da elaboração do Plano de Aplicação dos recursos do ICMS Ecológico PARA ESTE ANO? </p>
                        <div className='flex row'>
                            <input className="medio " type="radio" name="p20" />
                            <p className="pAlternativas">Sim, 100% </p>
                        </div>
                        <div className='flex row'>
                            <input className="medio " type="radio" name="p20" />
                            <p className="pAlternativas">Não, 0%</p>
                        </div>
                    </div>

                    <div className="perguntas flex column">
                        <p className="pergunta">3.10. Qual percentual de ações previstas no Plano de Aplicação DO ANO ANTERIOR foi executado (VER RELATÓRIO DO ANO ANTERIOR )? </p>
                        <div className='flex row'>
                            <input className="medio " type="radio" name="p21" />
                            <p className="pAlternativas">71 a 100% das ações previstas foram realizadas ou município que esteja sendo avaliado pela primeira vez 100% </p>
                        </div>
                        <div className='flex row'>
                            <input className="medio " type="radio" name="p21" />
                            <p className="pAlternativas">46 a 70% das ações previstas foram realizadas 67% </p>
                        </div>
                        <div className='flex row'>
                            <input className="medio " type="radio" name="p21" />
                            <p className="pAlternativas">21 a 45% das ações previstas foram realizadas 33% </p>
                        </div>
                        <div className='flex row'>
                            <input className="medio " type="radio" name="p21" />
                            <p className="pAlternativas">0 a 20% das ações previstas foram realizadas 0% </p>
                        </div>
                    </div>

                    <div className="perguntas flex column">
                        <p className="pergunta">3.11. Que % do ICMS Ecológico recebido foi investido nas UCs e/ou TI? (Valores previstos no Plano de Aplicação DO ANO ANTERIOR – VER RELATÓRIO )  </p>
                        <div className='flex row'>
                            <input className="medio " type="radio" name="p22" />
                            <p className="pAlternativas">acima de 71% ou município que tenha recebido até R$20.000,00 em 2013 ou município que esteja sendo avaliado pela primeira vez. 100% </p>
                        </div>
                        <div className='flex row'>
                            <input className="medio " type="radio" name="p22" />
                            <p className="pAlternativas">de 31 a 70 % 75% </p>
                        </div>
                        <div className='flex row'>
                            <input className="medio " type="radio" name="p22" />
                            <p className="pAlternativas">de 11 a 30% 50% </p>
                        </div>
                        <div className='flex row'>
                            <input className="medio " type="radio" name="p22" />
                            <p className="pAlternativas">de 01 a 10% 25% </p>
                        </div>
                        <div className='flex row'>
                            <input className="medio " type="radio" name="p22" />
                            <p className="pAlternativas">menos de 1% 0% </p>
                        </div>
                    </div>

                    <button className="button" onClick={this.proximo}>
                        <a className="linkProximo" href="/questionario/melhoria-ambiental">
                            Próximo
                        </a>
                    </button>

                </div>
            </div>
        </div>
        )
    }
}

export default Perguntas3