import React from 'react'
import {FaFacebook, FaGithub, FaLinkedin} from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='container'>
                <div className='col col-1'>
                    <h1>Mero<span className='span-footer'>Crypto</span></h1>
                </div>
                <div className='col'>
                    <h5>Support</h5>
                    <span className='bar'></span>
                        <a href='/'>Contact Us</a>
                        <a href='/'>Privacy Policy</a>
                        <a href='/'>Legal</a>
                        <a href='/'>FAQs</a>
                   
                </div>
                <div className='col'>
                    <h5>Developers</h5>
                    <span className='bar'></span>
                        <a href='/'>Cloud</a>
                        <a href='/'>Commerce</a>
                        <a href='/'>Services</a>
                        <a href='/'>API</a>
                    
                </div>
                <div className='col'>
                    <h5>Company</h5>
                    <span className='bar'></span>
                        <a href='/'>Home</a>
                        <a href='/'>About</a>
                        <a href='/'>Services</a>
                        <a href='/'>Blogs</a>      
                </div>
                <div className='col'>
                    <h5>Social</h5>
                    <span className='bar'></span>
                        <a href='/'><FaFacebook className='icon' />Facebook</a>                          
                        <a href='/'><FaGithub className='icon' />GitHub</a>
                        <a href='/'><FaLinkedin className='icon' />Linkedin</a>
                    
                </div>
            </div>
            
        </div>
    )
}

export default Footer
