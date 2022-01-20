import React from 'react'
import './Platform.css'
import kraken from '../assets/Kraken.png'
import ftx from '../assets/Coinbase.png'
import bitfinex from '../assets/Kraken.png'
import webull from '../assets/Webull.png'
import coinbase from '../assets/Coinbase.png'
import binance from '../assets/Binance.png'


const Platform = () => {
    return (
        <div className='platform'>
            <h1>Trade on multiple exchanges through a single platform</h1>
            
            <div className='container'>

                <div className='kraken'>
                    <img src={kraken} alt='' />
                </div>
                <div className='ftx'>
                    <img src={ftx} alt='' />
                </div>
                <div className='bitfinex'>
                    <img src={bitfinex} alt='' />
                </div>
                <div className='webull'>
                    <img src={webull} alt='' />
                </div>
                <div className='coinbase'>
                    <img src={coinbase} alt='' />
                </div>
                <div className='binance'>
                    <img src={binance} alt='' />
                </div>
            </div>
            
        </div>
    )
}

export default Platform
