import React from 'react'
import './Features.css'
import bic from '../assets/bic.png'

const Features = () => {
    return (
        <div className='features'>
              <h1>Features to Fit Any Trader</h1>
            <div className='container'>

                <div className='coin-icon'>
                    <img src={bic} alt='' />
                    <h2>Visual Trading</h2>
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Maximepp mollitia, molestiae quas vel sint commodi repudiandae voluptatum
                    </p>
                </div>
                <div className='coin-icon'>
                    <img src={bic} alt='' />
                    <h2>Visual Trading</h2>
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Maximepp mollitia, molestiae quas vel sint commodi repudiandae voluptatum
                    </p>
                </div>
                <div className='coin-icon'>
                    <img src={bic} alt='' />
                    <h2>Visual Trading</h2>
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Maximepp mollitia, molestiae quas vel sint commodi repudiandae voluptatum
                    </p>
                </div>
            </div> 
        </div>
    )
}

export default Features
