import React from 'react'

import '.CSS/toast.css'

class Toast extends React.Component {
  constructor( props ) {
    super( props )

    this.state = {
      class: 'show'
    }
  }

  componentDidMount = () => {
    console.log('cú')
    setTimeout( () => {
      this.setState({class: this.props.show}), 3000
    }) 
  }
  render(){
  return (
      <h4 className={ this.state.class } id="snackbar" >Some text some message..</h4>
  )}
}

export default Toast
