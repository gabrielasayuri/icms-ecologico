import React, { Component } from 'react'
import { base, auth } from '../base'
import Header from '../Header'
import SidebarQuest from './SidebarQuest'
import '../CSS/Questionario.css'


class Perguntas3 extends Component {
    //Salvar no banco
    handleSave = (event) => {
        event.preventDefault()

        const p9 = this.p9.value
        const p11 = this.p11.value
        const p14 = this.p14.value
        const p17 = this.p17.value

        const x = window.document.getElementsByClassName('medio')
        var user = auth.currentUser;

        console.log(user.uid)

        const obj = {
            p9,
            p11,
            p14,
            p17
        }

        for (let i = 0; i < x.length; i++) {

            if (x[i].checked === true) {

                console.log(x[i].value)

                obj[x[i].name] = x[i].value
            }
        }

        user.uid ?
            base.update('Questionario/' + user.uid, {
                data: obj
            }).catch(error => {
                console.log(error)
            })
            :
            base.push('Questionario', {
                data: {
                    obj
                }
            }).then(() => {
            }).catch(error => {
                console.log(error)
            })
    }

    render() {
        return (
            <div>
                <Header />
                <SidebarQuest />
                <form className="flex row quest" onSubmit={this.handleSave}>
                    <div className="flex column">
                        <h1>Questionário</h1>
                        <div className="perguntasp flex column">
                            <p className="pergunta">3.1. Já existe no município Secretaria, núcleo, departamento ou gerência destinada à conservação ambiental?  </p>
                            <div className='flex row'>
                                <input className="medio " type="radio" value="100%" name="p8" />
                                <p className="pAlternativas">Sim, 100%</p>
                            </div>
                            <div className='flex row'>
                                <input className="medio " type="radio" value="0%" name="p8" />
                                <p className="pAlternativas">Não, 0%</p>
                            </div>
                        </div>
                        <div className="perguntas flex column">
                            <p className="pergunta">Quais?</p>
                            <div className='flex row'>
                                <input ref={ref => this.p9 = ref} id='p9' type="text" />
                            </div>
                        </div>

                        <div className="perguntas flex column">
                            <p className="pergunta">3.1. Já existe no município Secretaria, núcleo, departamento ou gerência destinada à conservação ambiental?  </p>
                            <div className='flex row'>
                                <input className="medio " type="radio" value="Sim" name="p10" />
                                <p className="pAlternativas">Sim</p>
                            </div>
                            <div className='flex row'>
                                <input className="medio " type="radio" value="Não" name="p10" />
                                <p className="pAlternativas">Não</p>
                            </div>
                        </div>
                        <div className="perguntas flex column">
                            <p className="pergunta">Número de funcionários:</p>
                            <div className='flex row'>
                                <input ref={ref => this.p11 = ref} id='p11' type="text" />
                            </div>
                        </div>

                        <div className="perguntas flex column">
                            <p className="pergunta">3.3. A prefeitura tem apoiado a UC/TI com condições de trabalho para a equipe técnica (infraestrutura tais como: computador com internet, telefone, fax, veículo; número de funcionários suficiente para atender todo o processo de gestão das questões ambientais diretamente relacionadas a UC/TI): </p>
                            <div className='flex row'>
                                <input className="medio " type="radio" value="100%" name="p12" />
                                <p className="pAlternativas">Sim, 100% </p>
                            </div>
                            <div className='flex row'>
                                <input className="medio " type="radio" value="50%" name="p12" />
                                <p className="pAlternativas">Parcialmente, 50% </p>
                            </div>
                            <div className='flex row'>
                                <input className="medio " type="radio" value="0%" name="p12" />
                                <p className="pAlternativas">Não, 0% </p>
                            </div>
                        </div>

                        <div className="perguntas flex column">
                            <p className="pergunta">3.4. Existem ações de divulgação das UCs/TIs por parte da prefeitura?  </p>
                            <div className='flex row'>
                                <input className="medio " type="radio" value="Sim" name="p13" />
                                <p className="pAlternativas">Sim</p>
                            </div>
                            <div className='flex row'>
                                <input className="medio " type="radio" value="Não" name="p13" />
                                <p className="pAlternativas">Não</p>
                            </div>
                        </div>
                        <div className="perguntas flex column">
                            <p className="pergunta">Quais?  </p>
                            <div className='flex row'>
                                <input ref={ref => this.p14 = ref} id='p14' type="text" />
                            </div>
                        </div>

                        <div className="perguntas flex column">
                            <p className="pergunta">3.5. Existe Fundo Municipal de Meio Ambiente legalmente criado? </p>
                            <div className='flex row'>
                                <input className="medio " type="radio" value="100%" name="p15" />
                                <p className="pAlternativas">Sim 100% </p>
                            </div>
                            <div className='flex row'>
                                <input className="medio " type="radio" value="0%" name="p15" />
                                <p className="pAlternativas">Não 0%</p>
                            </div>
                        </div>

                        <div className="perguntas flex column">
                            <p className="pergunta">3.6. Existe Conselho Municipal de Meio Ambiente formalmente instituído?  </p>
                            <div className='flex row'>
                                <input className="medio " type="radio" value="100%" name="p16" />
                                <p className="pAlternativas">Sim 100% </p>
                            </div>
                            <div className='flex row'>
                                <input className="medio " type="radio" value="0%" name="p16" />
                                <p className="pAlternativas">Não 0%</p>
                            </div>
                        </div>
                        <div className="perguntas flex column">
                            <p className="pergunta">Denominaçao: </p>
                            <div className='flex row'>
                                <input ref={ref => this.p17 = ref} id='p17' type="text" />
                            </div>
                        </div>

                        <div className="perguntas flex column">
                            <p className="pergunta">3.7. O Conselho está ativo? </p>
                            <div className='flex row'>
                                <input className="medio " type="radio" value="100%" name="p18" />
                                <p className="pAlternativas">Sim (com nomeação dos membros, regimento instituído, reuniões periódicas previstas em calendário e livro Ata), 100% </p>
                            </div>
                            <div className='flex row'>
                                <input className="medio " type="radio" value="0%" name="p18" />
                                <p className="pAlternativas">Não, 0%</p>
                            </div>
                        </div>

                        <div className="perguntas flex column">
                            <p className="pergunta">3.8. Foi apresentado ao IMASUL plano de aplicação dos recursos de ICMS Ecológico PARA ESTE ANO, DENTRO DO PRAZO ESPECIFICADO? </p>
                            <div className='flex row'>
                                <input className="medio " type="radio" value="100%" name="p19" />
                                <p className="pAlternativas">Sim, 100% </p>
                            </div>
                            <div className='flex row'>
                                <input className="medio " type="radio" value="0%" name="p19" />
                                <p className="pAlternativas">Não, 0%</p>
                            </div>
                        </div>

                        <div className="perguntas flex column">
                            <p className="pergunta">3.9. O Conselho Municipal responsável pelo meio ambiente participou da elaboração do Plano de Aplicação dos recursos do ICMS Ecológico PARA ESTE ANO? </p>
                            <div className='flex row'>
                                <input className="medio " type="radio" value="100%" name="p20" />
                                <p className="pAlternativas">Sim, 100% </p>
                            </div>
                            <div className='flex row'>
                                <input className="medio " type="radio" value="0%" name="p20" />
                                <p className="pAlternativas">Não, 0%</p>
                            </div>
                        </div>

                        <div className="perguntas flex column">
                            <p className="pergunta">3.10. Qual percentual de ações previstas no Plano de Aplicação DO ANO ANTERIOR foi executado (VER RELATÓRIO DO ANO ANTERIOR )? </p>
                            <div className='flex row'>
                                <input className="medio " type="radio" value="100%" name="p21" />
                                <p className="pAlternativas">71 a 100% das ações previstas foram realizadas ou município que esteja sendo avaliado pela primeira vez 100% </p>
                            </div>
                            <div className='flex row'>
                                <input className="medio " type="radio" value="67%" name="p21" />
                                <p className="pAlternativas">46 a 70% das ações previstas foram realizadas 67% </p>
                            </div>
                            <div className='flex row'>
                                <input className="medio " type="radio" value="33%" name="p21" />
                                <p className="pAlternativas">21 a 45% das ações previstas foram realizadas 33% </p>
                            </div>
                            <div className='flex row'>
                                <input className="medio " type="radio" value="0%" name="p21" />
                                <p className="pAlternativas">0 a 20% das ações previstas foram realizadas 0% </p>
                            </div>
                        </div>

                        <div className="perguntas flex column">
                            <p className="pergunta">3.11. Que % do ICMS Ecológico recebido foi investido nas UCs e/ou TI? (Valores previstos no Plano de Aplicação DO ANO ANTERIOR – VER RELATÓRIO )  </p>
                            <div className='flex row'>
                                <input className="medio " type="radio" value="100%" name="p22" />
                                <p className="pAlternativas">acima de 71% ou município que tenha recebido até R$20.000,00 em 2013 ou município que esteja sendo avaliado pela primeira vez. 100% </p>
                            </div>
                            <div className='flex row'>
                                <input className="medio " type="radio" value="75%" name="p22" />
                                <p className="pAlternativas">de 31 a 70 % 75% </p>
                            </div>
                            <div className='flex row'>
                                <input className="medio " type="radio" value="50%" name="p22" />
                                <p className="pAlternativas">de 11 a 30% 50% </p>
                            </div>
                            <div className='flex row'>
                                <input className="medio " type="radio" value="25%" name="p22" />
                                <p className="pAlternativas">de 01 a 10% 25% </p>
                            </div>
                            <div className='flex row'>
                                <input className="medio " type="radio" value="0%" name="p22" />
                                <p className="pAlternativas">menos de 1% 0% </p>
                            </div>
                        </div>

                        <button className="button" onClick={this.proximo}>
                            <a className="linkProximo" /*href="/questionario/melhoria-ambiental"*/>
                                Próximo
                        </a>
                        </button>

                    </div>
                </form>
            </div>
        )
    }
}

export default Perguntas3