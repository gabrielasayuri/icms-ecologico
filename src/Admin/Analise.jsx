import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'

import { auth } from '../base'
import Sidebar from '../Sidebar';
import Header from '../Header';

class AdminPage extends Component {

  /*move() {
    var elem = document.getElementById("barra"); 
    var width = 10;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= 100) {
            clearInterval(id);
        } else {
            width++; 
            elem.style.width = width + '%'; 
            elem.innerHTML = width * 1 + '%';
        }
    }
}*/

  render() {
    return (
      <div>
        <Header />
        <Sidebar />
        <div className="card-analise">
          <div className="container">
            <h4><b>Nova Andradina</b></h4> 
            <div id="progresso">
              <div id="barra"></div>
            </div> 
          </div>
        </div>

        <div className="card-analise">
          <div className="container">
            <h4><b>Taquarussu</b></h4> 
            <div id="progresso">
              <div id="barra"></div>
            </div> 
          </div>
        </div>

        <div className="card-analise">
          <div className="container">
            <h4><b>Ivinhema</b></h4> 
            <div id="progresso">
              <div id="barra"></div>
            </div>  
          </div>
        </div>

        <div className="card-analise">
          <div className="container">
            <h4><b>Naviraí</b></h4> 
            <div id="progresso">
              <div id="barra"></div>
            </div>  
          </div>
        </div>

        <div className="card-analise">
          <div className="container">
            <h4><b>Bataguassu</b></h4> 
            <div id="progresso">
              <div id="barra"></div>
            </div> 
          </div>
        </div>

      </div>
    )
  }
}

export default AdminPage