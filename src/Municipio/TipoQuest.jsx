import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Header from '../Header'
import SidebarQuest from './SidebarQuest'
import '../CSS/Questionario.css'


class TipoQuest extends Component {

    Confirma() {
        <NavLink to="/Perguntas1">About</NavLink>
    }

    render() {
        return (
        <div>
         <Header />
         <SidebarQuest />
            <div className="flex row quest">
                <div className="flex column">
                    <select className="typeQuest">
                        <option value="questionario">Selecione o Questionário</option>
                        <option value="1">Quest 1</option>
                        <option value="2">Quest 2</option>
                        <option value="3">Quest 3</option>
                        <option value="4">Quest 4</option>
                    </select>

                    <button className="button" onClick={this.proximo}>
                        <a className="linkProximo" href="/questionario/poder-publico-pela-uc">
                            Confirma
                        </a>
                    </button>

                </div>
            </div>
        </div>
        )
    }
}

export default TipoQuest