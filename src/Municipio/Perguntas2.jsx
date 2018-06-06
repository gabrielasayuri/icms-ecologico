import React, { Component } from 'react'
import { base, auth } from '../base'
import Header from '../Header'
import SidebarQuest from './SidebarQuest'
import '../CSS/Questionario.css'


class Perguntas2 extends Component {
    //Salvar no banco
    handleSave = (event) => {
        event.preventDefault()

        const p7 = this.p7.value

        const x = window.document.getElementsByClassName('medio')
        var user = auth.currentUser;

        console.log(user.uid)

        const obj = {
            p7
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

    /*function() {
        var progress         = ('#progress'), // Barra de Progresso.
            progressElements = ('.medio'), // Elementos que devem ser checados
                                                // para modificar o valor da barra.
            TOTAL             = progressElements.length; // Total de elementos.
      
        
        progressElements.on('blur, change', function() {
          
          // Faz um filtro com o total elementos válidos.
          // Nesse caso, campos que não estejam "em branco" e que não estejam marcados
          // como ':invalid'.
          var valid = progressElements.filter(function() {
            return ($(this).val() || $(this).prop('checked')) && !$(this).is(':invalid');
          }).length;
          
          // Calcula a porcentagem e altera o valor da barra.
          var percent = (valid * 100) / TOTAL,
            current = progress.val();
          
          var increase = percent > current;
              
          var transition = setInterval(function(){
            if((increase && current >= percent) ||
              (!increase && current <= percent))
                clearInterval(transition);
            
            var value = progress.val();
            value = increase ? value+1 : value-1;
            current = value;
            
            progress.val(current);
          }, 10);    
        })
      }*/

    render() {
        return (
            <div>
                <Header />
                <SidebarQuest />
                <form className="flex row quest" onSubmit={this.handleSave}>
                    <div className="flex column">
                        {/*<progress id='progress' max='100' value='0'></progress>*/}
                        <h1>Questionário</h1>
                        <div className="perguntasp flex column">
                            <p className="pergunta">2.1. O município realiza ações relevantes em educação ambiental?</p>
                            <div className='flex row'>
                                <input className="medio " type="radio" value="100%" name="p6" />
                                <p className="pAlternativas">Sim, 100%</p>
                            </div>
                            <div className='flex row'>
                                <input className="medio " type="radio" value="0%" name="p6" />
                                <p className="pAlternativas">Não, 0%</p>
                            </div>
                        </div>

                        <div className="perguntas flex column">
                            <p className="pergunta">Quais?</p>
                            <div className='flex row'>
                                <input ref={ref => this.p7 = ref} id='p7' type="text" />
                            </div>
                        </div>

                        <button className="button" onClick={this.proximo}>
                            <a className="linkProximo" /*href="/questionario/poder-publico-pela-uc"*/>
                                Próximo
                        </a>
                        </button>

                    </div>
                </form>
            </div>
        )
    }
}

export default Perguntas2