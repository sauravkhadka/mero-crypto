import React from 'react'
import './Devices.css'
import Devicess from '../assets/dnm.png'

const Devices = () => {
    return (
        <div className='devices'>
            <div className='container'>
                <div className='left'>
                    <h2>Merocrypto Across Your Favorite Devices</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maximepp mollitia,
                        molestiae quas vel sint commodi repudiandae voluptatum laborum
                        numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                        optio, eaque rerum! Provident similiqueaaa accusantium nemo autem. Veritatis
                        obcaecati.
                    </p>
                    <div className='btn'><button className='btn-one'>Get Mobile</button> <button className='btn-two'>Get Desktop</button></div>
                </div>

                <div className='right'>
                    <img src={Devicess} alt='' />
                </div>

            </div>
            
        </div>
    )
}

export default Devices
