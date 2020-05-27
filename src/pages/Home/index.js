import React from 'react'
import Foto from '../../assets/home-img.jpg'
import Data from '../../services/api'
import { Link } from 'react-router-dom'
import { FiActivity, FiPhone, FiCreditCard } from 'react-icons/fi'
import './style.css'


const data = Data()


function Home(){
 

    
    return (  
   
        <div className="home-container">
               <div className="img">
                 <img src={Foto} alt="bazar" />
            </div>
            <hr></hr>
            <section className="products">
              <div className="products-card">
                {data.map(price =>(
                <Link key={price.id} to={"/" + price.id} className="card" onClick={() => {localStorage.setItem('list', price.id)}}>
                    <div className="card-img">
                        <img src={price.link} alt="Coat"/>
                    </div>
                    <hr></hr>
                    <div className="card-info">
                        <h2>{price.value}</h2>
                        <h4>{price.parcel}</h4>
                    </div>
                </Link>
               
                ))}
              </div> 
            </section>
            <hr></hr>
            <section className="best-seller">
                Melhores vendedores
                <div className="seller-container">
                    <div className="seller-card">
                        <div className="card-img">
                            <img src="https://images.unsplash.com/photo-1537815749002-de6a533c64db?ixlib=rb-1.2.1&auto=format&fit=crop&w=545&q=80" alt="seller" />
                        </div>
                        <div className="name">
                            <h4>Pug</h4>
                        </div>
                    </div>
                    <div className="seller-card">
                        <div className="card-img">
                            <img src="https://images.unsplash.com/photo-1578899957691-c9073e02a975?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80" alt="seller" />
                        </div>
                        <div className="name">
                            <h4>Dálmata</h4>
                        </div>
                    </div>
                    <div className="seller-card">
                        <div className="card-img">
                            <img src="https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=639&q=80" alt="seller" />
                        </div>
                        <div className="name">
                            <h4>Puppy</h4>
                        </div>
                    </div>
                    <div className="seller-card">
                        <div className="card-img">
                            <img src="https://images.unsplash.com/photo-1561037404-61cd46aa615b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="seller" />
                        </div>
                        <div className="name">
                            <h4>Vira-lata</h4>
                        </div>
                    </div>
                </div>
            </section>
            <hr></hr>
            <section className="whoarewe">
                <div className="whoarewe-container">
                    <div className="whoarewe-card">
                        <div className="icon">
                            <FiActivity size={90}/>
                        </div>
                        <div className="title"><h3>Tenha gráficos de suas vendas</h3></div>
                        <div className="text">Saiba exatamente quanto você ganhou no final do mês, conheça nossas ferramentas de dashboard e não tenha problemas de controle financeiro.</div>
                        <button>Saiba Mais</button>
                    </div>

                    <div className="whoarewe-card">
                        <div className="icon">
                            <FiPhone size={90}/>
                        </div>
                        <div className="title"><h3>Suporte 24 horas</h3></div>
                        <div className="text">Tenha suporte a qualquer momento, nossos atendentes estão de prontidão o dia todo.</div>
                        <button>Saiba Mais</button>
                    </div>

                    <div className="whoarewe-card">
                        <div className="icon">
                            <FiCreditCard size={90}/>
                        </div>
                        <div className="title"><h3>Aceitamos todas as bandeiras</h3></div>
                        <div className="text">Escolha a melhor forma de pagamento. Aceitamos todas as bandeiras nacionais e internacionais. Compre com segurança.</div>
                        <button>Saiba Mais</button>
                    </div>
                </div>
            
            </section>
        </div>
        
    )
}

export default Home