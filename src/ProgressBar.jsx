import React, { Component } from 'react';

import { auth, base } from './base'

class ProgressBar extends Component {
    constructor( props ) {
        super()
        this.state = {
            progresso: 0
        }
    }

    componentDidMount = async () => {
        await auth.onAuthStateChanged( user => {
            base.fetch('Questionario/ox0tJih5vAg3SiHbDXwaiZMxZiz2/progresso' /*+ user.uid + '/progresso'*/, {
                contex: this,
                asArray: false,
                then: ( data ) => {
                    console.log('data',data)
                    this.setState({
                        progresso: data
                    })
                }
            })
        } ) 
           
    }
    render() {
        console.log(this.state.progresso)
        return (
            <progress id="progress" className="top" value={this.state.progresso} max='25'>
            </progress>
        )
    }

}

export default ProgressBar