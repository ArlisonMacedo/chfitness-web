import React from "react";
import Header from "../../Components/Header";
import SuplementItem from "../../Components/SuplementItem";


import './styles.css'


function Home() {
    return (
        <div id="page-home">
            <Header />

            <h1>Qual o seu objetivo?</h1>

            <div className="objective">
                <div className="objective-content">
                    <div className="content">
                        <img src="https://www.gsuplementos.com.br/tema/growth/img/home/objetivos/01-mob-ab.png" alt="" />
                        <p className="text-obj">Massa muscular</p>
                    </div>
                    <div className="content">
                        <img src="https://www.gsuplementos.com.br/tema/growth/img/home/objetivos/02-mob-ab.png" alt="" />
                        <p className="text-obj">Emagrecimento</p>
                    </div>
                    <div className="content">
                        <img src="https://www.gsuplementos.com.br/tema/growth/img/home/objetivos/03-mob-ab.png" alt="" />
                        <p className="text-obj">Energia</p>
                    </div>
                    <div className="content">
                        <img src="https://www.gsuplementos.com.br/tema/growth/img/home/objetivos/04-mob-ab.png" alt="" />
                        <p className="text-obj">Qualidade de vida</p>
                    </div>
                </div>
            </div>

            <h1>Conheça nossos produtos</h1>
            <div className="content-home-page">
                <div className="wrapper">
                
                    <SuplementItem />
                    
                    <SuplementItem />
    
                    <SuplementItem />

                    <SuplementItem />
                    
                    <SuplementItem />
                
                </div>
            </div>
        </div>
    )
}

export default Home