import React, { Component } from 'react';

import { auth, base } from './base'

class ProgressBarOk extends Component {
    constructor( props ) {
        super()
        this.state = {
            progresso: 0
        }
    }

    componentDidMount = async () => {
        await auth.onAuthStateChanged( user => {
            base.fetch('Questionario/' + user.uid + '/progresso', {
                contex: this,
                asArray: false,
                then: ( data ) => {
                    console.log('data',data)
                    console.log(user.uid)
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

export default ProgressBarOk