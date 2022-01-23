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
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Maxime mollitia, molestiae quas vel sint commodi repudiandae 
              consequuntur voluptatum laborum numquam blanditiis harum quisquam 
              eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! 
              Provident similique accusantium nemo autem. Veritatis obcaecati 
              tenetur iure eius earum ut molestias architecto voluptate aliquam 
              nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, 
              odit, tenetur error. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Maxime mollitia, molestiae quas vel sint commodi repudiandae 
              consequuntur voluptatum laborum numquam blanditiis harum quisquam 
              eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! 
              Provident similique accusantium nemo autem. Veritatis obcaecati 
              tenetur iure eius earum ut molestias architecto voluptate aliquam 
              nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, 
              odit, tenetur error. </p>
        </div>

        <div className='container'>
        <div className='about-post'>
          <div className='left'>
            <img src={Trading} alt='' />
          </div>

          <div className='right'>
            <h2>Lorem Ipsum</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Maxime mollitia, molestiae quas vel sint commodi repudiandae 
              consequuntur voluptatum laborum numquam blanditiis harum quisquam 
              eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! 
              Provident similique accusantium nemo autem. Veritatis obcaecati 
              tenetur iure eius earum ut molestias architecto voluptate aliquam 
              nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, 
              odit, tenetur error.
            </p>
          </div>
        </div>
        <div className='about-post-one'>
          <div className='left'>
            <h2>Lorem Ipsum</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Maxime mollitia, molestiae quas vel sint commodi repudiandae 
              consequuntur voluptatum laborum numquam blanditiis harum quisquam 
              eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! 
              Provident similique accusantium nemo autem. Veritatis obcaecati 
              tenetur iure eius earum ut molestias architecto voluptate aliquam 
              nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, 
              odit, tenetur error.
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
