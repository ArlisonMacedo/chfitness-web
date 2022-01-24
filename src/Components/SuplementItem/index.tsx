import React from "react";
import { Link } from "react-router-dom";


import "./styles.css"

function SuplementItem() {
    return (
        <div id="suplementItem-page">
            <div className="card">
                <div className="card-content">
                    <img src="https://landerlan.com.br/img/produto/testenat-4ml-landerlan.jpg" alt="" className="thumbnail" />
                    <p className="name-product">TESTENAT/ENANTATO 250MG/4ML</p>
                    <p className="price">R$ 100,00</p>
                    <div className="about-more-description">
                        <p className="description">
                            Entre em contato com esse revendendor pelo WhatsApp. 
                            Aceitamos {"   "}
                            <strong>
                                 Pix, Depositos e Dinheiro
                            </strong>
                            
                        </p>
                    </div>
                </div>
                <div className="footer-card">
                    <Link to="/" id="button-detail">
                    
                        Ver Detalhes
                    
                    </Link>
                    <Link to="/" id="button-contact">
                        Adiquirir
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default SuplementItem