import React from 'react'
import {FaFacebook, FaGithub, FaLinkedin} from 'react-icons/fa'
import './Footer.css'
import { useNavigate } from 'react-router-dom' 

const Footer = () => {

    const navigate = useNavigate()
    const handleLink = (path) => {
        navigate(`${path}`);
    }
    return (
        <div className='footer'>
            <div className='container'>
                <div className='col col-1'>
                    <h1>Mero<span className='span-footer'>Crypto</span></h1>
                </div>
                <div className='col'>
                    <h5>Support</h5>
                    <span className='bar'></span>
                    <ul className='click'> 
                        <li onClick={() => handleLink("/contactus")}>
                            Contact Us
                        </li>
                        <li onClick={() => handleLink("/legal")}>
                            Legal and Privacy
                        </li>
                        <li onClick={() => handleLink("/faqs")}>
                            FAQs
                        </li>
                    </ul>
                   
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
                    <ul className='click'>
                    <li onClick={() => handleLink("/")}>
                       Home
                    </li>
                    <li onClick={() => handleLink("/about")}>
                        About                      
                    </li>
                    <li onClick={() => handleLink("/services")}>
                        Services                      
                    </li>
                    <li onClick={() => handleLink("/blog")}>
                        Blog                      
                    </li>
                </ul>    
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
