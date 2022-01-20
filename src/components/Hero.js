import React from 'react'
import './Hero.css'
import Crypto from '../assets/3828543.png'


const Hero = () => {
    return (
        <div className='hero'>
            <div className='container'>
                <div className='left'>
                    <h1>Invest in <span className='span-hero'>Cryptocurrency</span></h1>
                    <h2>Buy <span className='span-hero'>&</span> Sell Cryptocurrency</h2><br />
                    <p>Gain a competitive edge tracking your holdings 
                        over time with customizable charts 
                        and watchlists,instant price alerts, 
                        and frictionless multi-exchange trading all in one place.</p> 
                    <div className='input-container'>
                        <input type='email' placeholder='Your Email'/>
                        <button className='btn'>Learn More</button>
                    </div>
                </div>

                <div className='right'>
                    <div className='img-container'>
                        <img src={Crypto} alt=''/>
                    </div>
                </div>

            </div>
            
        </div>
    )
}

export default Hero
