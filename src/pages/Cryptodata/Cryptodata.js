import React from 'react';
import './Cryptodata.css';

function Cryptodata({ image, name, symbol, price, volume, priceChange, marketcap }) {
    return (
        <div>
            <div className='cryptodata-container'>
                <div className='cryptodata-row'>   
                     <div className='cryptodata'>
                        <img src={image} alt='crypto' />
                        <h1>{name}</h1>
                        <p className='cryptodata-symbol'>{symbol}</p>
                    </div>
                    <div className="cryptodata-data">
                        <p className='cryptodata-price'>${price}</p>
                        <p className='cryptodata-volume'>{volume.toLocaleString()}</p>
                        {priceChange < 0 ? (
                            <p className="cryptodata-percent red">{priceChange.toFixed(2)}%</p>
                        ) : (
                            <p className="cryptodata-percent green">{priceChange.toFixed(2)}%</p>
                        )}
                        <p className="cryptodata-marketcap">
                            ${marketcap.toLocaleString()}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cryptodata;
