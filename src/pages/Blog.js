import React from 'react';
import './Blog.css'
import Trading from '../assets/trading.png'

const Blog = () => {
  return (
    <div className='blog'>
      <div className='container'>
        <h1>Latest Posts</h1>
        <div className='blog-post'>
          <div className='left'>
            <img src={Trading} alt='' />
          </div>

          <div className='right'>
            <h2>Lorem Ipsum</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Maxime mollitia, molestiae quas vel sint commodi repudiandae 
              consequuntur voluptatum laborum numquam blanditiis harum 
              quisquam eius sed odit fugiat iusto fuga praesentium optio,
              eaque rerum! Provident similique accusantium nemo autem. 
              Veritatis obcaecati tenetur iure eius earum ut molestias 
              architecto voluptate aliquam nihil, eveniet aliquid culpa 
              officia aut! Impedit sit sunt quaerat, odit, tenetur error.
            </p>
          </div>
        </div>
        <div className='blog-post-one'>
          <div className='left'>
            <h2>Lorem Ipsum</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Maxime mollitia, molestiae quas vel sint commodi repudiandae 
              consequuntur voluptatum laborum numquam blanditiis harum 
              quisquam eius sed odit fugiat iusto fuga praesentium optio,
              eaque rerum! Provident similique accusantium nemo autem. 
              Veritatis obcaecati tenetur iure eius earum ut molestias 
              architecto voluptate aliquam nihil, eveniet aliquid culpa 
              officia aut! Impedit sit sunt quaerat, odit, tenetur error.
            </p>
          </div>

          <div className='right'>
          <img src={Trading} alt='' />  
          </div>
        </div>
        <div className='blog-post-two'>
          <div className='left'>
            <img src={Trading} alt='' />
          </div>

          <div className='right'>
            <h2>Lorem Ipsum</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Maxime mollitia, molestiae quas vel sint commodi repudiandae 
              consequuntur voluptatum laborum numquam blanditiis harum 
              quisquam eius sed odit fugiat iusto fuga praesentium optio,
              eaque rerum! Provident similique accusantium nemo autem. 
              Veritatis obcaecati tenetur iure eius earum ut molestias 
              architecto voluptate aliquam nihil, eveniet aliquid culpa 
              officia aut! Impedit sit sunt quaerat, odit, tenetur error.
            </p>
          </div>
        </div>
        <div className='blog-post-three'>
          <div className='left'>
            <h2>Lorem Ipsum</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Maxime mollitia, molestiae quas vel sint commodi repudiandae 
              consequuntur voluptatum laborum numquam blanditiis harum 
              quisquam eius sed odit fugiat iusto fuga praesentium optio,
              eaque rerum! Provident similique accusantium nemo autem. 
              Veritatis obcaecati tenetur iure eius earum ut molestias 
              architecto voluptate aliquam nihil, eveniet aliquid culpa 
              officia aut! Impedit sit sunt quaerat, odit, tenetur error.
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

export default Blog;