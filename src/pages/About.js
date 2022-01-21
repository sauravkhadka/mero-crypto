import React from 'react';
import './About.css'
import Extra from '../assets/crypto.jpg'
import Trading from '../assets/trading.png'

const About = () => {
  return (
    <div className='about'>
      <div className='about-image'>
          <img src={Extra} alt='' />
        </div>
      <div className='mission'>
          <h1>Mission</h1>
          <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
          Lorem ipsum dolor sit ametLorem ipsum dolor sit amet
          Lorem ipsum dolor sit ametLorem ipsum dolor sit amet
          Lorem ipsum dolor sit ametLorem ipsum dolor sit amet
          Lorem ipsum dolor sit ametLorem ipsum dolor sit 
          amet Lorem ipsum dolor sit amet ipsum dolor
          Lorem ipsum dolor sit ametLorem ipsum dolor sit amet
          Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum 
          Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem 
          ipsum dolor sit ametLorem ipsum dolor sit amet dolor sit amet
          Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet </p>
        </div>

        <div className='container'>
        <div className='about-post'>
          <div className='left'>
            <img src={Trading} alt='' />
          </div>

          <div className='right'>
            <h2>Lorem Ipsum</h2>
            <p>Lorem ipsum dolor sit ametLorem Lorem ipsum dolor sit ametLorem
            Lorem ipsum dolor sit ametLoremLorem ipsum dolor sit ametLorem
            Lorem ipsum dolor sit ametLoremLorem ipsum dolor sit ametLorem
            Lorem ipsum dolor sit ametLoremLorem ipsum dolor sit ametLorem
            Lorem ipsum dolor sit ametLorem LoremLorem ipsum dolor sit 
            ametLorem Lorem ipsum dolor sit ametLoremLorem ipsum 
            dolor sit ametLorem Lorem ipsum dolor sit amet Lorem Lorem 
            ipsum dolor sit ametLorem Lorem ipsum dolor sit ametLorem
            </p>
          </div>
        </div>
        <div className='about-post-one'>
          <div className='left'>
            <h2>Lorem Ipsum</h2>
            <p>Lorem ipsum dolor sit ametLorem Lorem ipsum dolor sit ametLorem
            Lorem ipsum dolor sit ametLoremLorem ipsum dolor sit ametLorem
            Lorem ipsum dolor sit ametLoremLorem ipsum dolor sit ametLorem
            Lorem ipsum dolor sit ametLoremLorem ipsum dolor sit ametLorem
            Lorem ipsum dolor sit ametLorem LoremLorem ipsum dolor sit 
            ametLorem Lorem ipsum dolor sit ametLoremLorem ipsum 
            dolor sit ametLorem Lorem ipsum dolor sit amet Lorem Lorem 
            ipsum dolor sit ametLorem Lorem ipsum dolor sit ametLorem
            </p>
          </div>

          <div className='right'>
          <img src={Trading} alt='' />  
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default About;
