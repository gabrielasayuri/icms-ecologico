import React, { Component } from 'react'

import Sidebar from '../Sidebar'
import Prazo from './Prazo'
import Header from '../Header'

class CadastroPrazo extends Component {
    render() {
        return (
            <div>
                <Header />
                <Sidebar />
                <div className={"divCadastros"}>
                    <Prazo />
                </div>

            </div>
        )
    }
}

export default CadastroPrazo