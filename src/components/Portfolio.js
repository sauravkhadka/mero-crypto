import React from 'react'
import Crypto from '../assets/portfolio.png'
import './Portfolio.css'

const Portfolio = () => {
    return (
        <div className='portfolio'>
            <div className='container'>
                <div className='left'>
                    <h2>Track Your Crypto Portfolio</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maximepp mollitia,
                        molestiae quas vel sint commodi repudiandae voluptatum laborum
                        numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                        optio, eaque rerum! Provident similiqueaaa accusantium nemo autem. Veritatis
                        obcaecati.
                    </p>
                    <button className='btn'>Get Started</button>
                </div>

                <div className='right'>
                    <img src={Crypto} alt='' />
                </div>

            </div>
            
        </div>
    )
}

export default Portfolio
