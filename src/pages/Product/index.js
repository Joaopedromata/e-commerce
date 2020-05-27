import React from 'react'
import './style.css'
import { FiTruck, FiCreditCard, FiShieldOff } from 'react-icons/fi'
import Data from '../../services/api'

function Product(){
    
    const id = JSON.parse(localStorage.getItem('list'))
    const data = Data(id)
    const api = data[id - 1]
    

    return( 
        <div className="product-container">
            <div className="product-card">
                <div className="product-img">
                    <div className="card-img">
                    <img src={api.link} alt="product" />         
                    </div>
                </div>
                <div className="product-info">
                    <div className="title">
                        <h2>{api.title}</h2>
                    </div>
                    <div className="parcels">
                        <ul>
                            <li><FiTruck />Frete Grátis para a região sudeste e sul, demais regiões somente R$ 25,00</li>
                            <li><FiCreditCard />Aceitamos todas as bandeiras de cartão de crédito nacionais e internacionais</li>
                            <li><FiShieldOff />Compra segura: Devolução garantida do seu dinheiro caso haja algum problema com a compra</li>
                        </ul>
                    </div>
                    <div className="price">
                        <h3>{api.value}</h3>
                        <h4>{api.parcel}</h4>
                    </div>
                    <div className="buy">
                        <button>Comprar agora</button>
                    </div>
                </div>
            </div>
         
        </div>
    )
}


export default Product