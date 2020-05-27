import React from 'react'
import './style.css'
import { FiGithub, FiInstagram } from 'react-icons/fi'

function Footer(){
    return (
        <div className="all">
            <hr></hr>
            <footer className="footer">
                <div className="footer-container">
                    <div className="text">Este projeto é meramente ilustrativo, feito apenas para o meu portifólio. Feito por: João Pedro Mata</div>
                    <div className="social">
                    <a href="https://www.instagram.com/poxajoao__/" className="instagram"><FiInstagram size={30} /></a> 
                    <a href="https://github.com/Joaopedromata" className="github"><FiGithub size={30} /></a>
                    </div>
                </div>
            </footer>
        </div>
    )
}


export default Footer