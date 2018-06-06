import React from 'react'

import Navbar from './Navbar'

const AboutPage = () => {
    return (
        <div>
            <Navbar />
            <div className="divGeralInicio">
                <div className="vTextosInicio">
                    <div>
                        <img src={require('./images/10.jpg')} className="imagesInicio" />
                    </div>
                    <div className="divTexto">
                        <h1 className="titulo"> O que é ICMS ecológico? </h1>
                        <p className="textosInicio">O ICMS–ecológico é um mecanismo tributário adotado pelo Estado de Mato Grosso do Sul, por meio de leis e normativas específicas que permite aos municípios acessar a cota-parte totalizada em 5% (de 25%) dos recursos financeiros arrecadados pelos Estados através do Imposto sobre Circulação de Mercadorias e Serviços (ICMS). No ano de 2017, dos 79 (setenta e nove) municípios do estado, 63 (sessenta e três) recebem o ICMS-ecológico, com índices variados de acordo com o atendimento de alguns critérios ambientais, estabelecidos em leis estaduais. Com a dificuldade de mensuração desses dados e substituição da Tabela avaliativa utilizada até o momento para lançar os dados ambientais dos municípios, propõe-se neste trabalho um aplicativo que auxilie o preenchimento das informações relevantes para o cálculo do ICMS-ecológico, facilitando assim o lançamento das informações. Ainda foi verificado a necessidade de uma plataforma que visasse suprir essa necessidade local.</p>
                    </div>
                </div>


                <div className="vTextosInicio2">
                    <div className="divTexto">
                        <h1 className="titulo"> Legislação </h1>
                        <center><a className="textosInicio" href="http://www.imasul.ms.gov.br/wp-content/uploads/sites/74/2017/02/LEI-COMPLEMENTAR-N%C2%BA-57-DE-04_01_1991.pdf" target="_blank">
                            Lei Complementar n°. 57, de 4 de janeiro de 1991. </a> </center>

                        <center><a className="textosInicio" href="http://www.imasul.ms.gov.br/wp-content/uploads/sites/74/2016/02/Decreto-Est.-n%C2%BA-14.366-de-29_12_2015_ICMS-Ecologico.pdf" target="_blank">
                            Decreto n. 14.366, de 29 de dezembro de 2015.
                        </a> </center>

                        <center><a className="textosInicio" href="http://www.imasul.ms.gov.br/wp-content/uploads/sites/74/2016/01/Lei-estadual-n.-4.219-Dispoe-o-ICMS-Ecol%C3%B3gico.pdf" target="_blank">
                            Lei n. 4.219, de 11 de julho de 2012.
                        </a>   </center>
                    </div>
                    <div>
                        <img src={require('./images/112.jpg')} className="imagesInicio" />
                    </div>
                </div>


                <div className="vTextosInicio">
                    <div className="divTexto">
                        <h1 className="titulo"> Repasses </h1>
                        <center><a className="textosInicio" href="http://www.spdo.ms.gov.br/diariodoe/Index/Download/DO9616_16_03_2018" target="_blank">
                            Repasses 2018</a></center>

                        <center><a className="textosInicio" href="http://www.spdo.ms.gov.br/diariodoe/Index/Download/DO9495_18_09_2017" target="_blank">
                            Repasses 2017</a></center>

                        <center><a className="textosInicio" href="http://www.spdo.ms.gov.br/diariodoe/Index/Download/42493" target="_blank">
                            Repasses 2016</a></center>
                    </div>
                    <div>
                        <img src={require('./images/5.jpg')} className="imagesInicio" />
                    </div>
                </div>


            </div>
        </div>
    )
}

export default AboutPage;