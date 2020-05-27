import React from 'react'
import {FiShoppingCart} from 'react-icons/fi'
import logoImg from '../../assets/logo.svg'
import './style.css'

function Header(){
    return(
        <header className="App-header">
            <div className="Header-container">
                
                <div className="logo">
                    <img src={logoImg} alt="e-commerce" />
                </div>
                <div className="inside">
                    <input type="text" placeholder="digite o que você precisa..."/>
                    <small>Bem-vindo ao e-commerce João Pedro</small>
                </div>
                <div className="buy">
                    <div className="quantity">3</div>
                    <FiShoppingCart size={24}/>
                </div>
            </div>
            <hr></hr>
        </header>
    )
}


export default Header