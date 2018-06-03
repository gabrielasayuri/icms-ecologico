import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'

import { auth } from '../base'
import Sidebar from '../Sidebar';
import Header from '../Header';

class AdminPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <Sidebar />
      </div>
    )
  }
}

export default AdminPage