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
        <div className='blog-post-one'>
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
        <div className='blog-post-two'>
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
        <div className='blog-post-three'>
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

export default Blog;