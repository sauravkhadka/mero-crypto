import React from 'react'
import Trading from '../assets/trading.png'
import './Trade.css'

const Trade = () => {
    return (
        <div className='trade'>
            <div className='container'>
                <div className='left'>
                    <img src={Trading} alt='' />
                </div>

                <div className='right'>
                <h2>One trading ticket for every exchange</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maximepp mollitia,
                        molestiae quas vel sint commodi repudiandae voluptatum laborum
                        numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                        optio, eaque rerum! Provident similiqueaaa accusantium nemo autem. Veritatis
                        obcaecati.
                    </p>
                </div>

            </div>
            
        </div>
    )
}

export default Trade
