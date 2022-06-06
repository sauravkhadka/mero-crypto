import React, {useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import './Navbar.css'
import '../pages/Signin.js'
import '../pages/Register.js'
import { Link, useNavigate } from 'react-router-dom'


const Navbar = () => {
    const [click, setClick] = useState(false)
    function handleClick(){
        return setClick(!click)
    }
    const navigate = useNavigate()
    const handleLink = (path) => {
        navigate(`${path}`);
    }

    return (
        <div className='header'>
            <div className='container'>
                <h1 onClick={() => handleLink("/")}>Mero<span className='span-nav'>Crypto</span></h1>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <div className='btn-nav-parent'>
                    <div className='btn-group-nav'>
                            <button className='btn' onClick={() => handleLink("/signin")}>SignIn</button> 
                        </div>
                        <div className='btn-group-nav'>
                            <button className='btn' onClick={() => handleLink("/register")}>Register</button> 
                        </div>
                </div>
                    <Link onClick={() => handleClick()} to="/">
                       Home
                    </Link>
                    <Link onClick={() => handleClick()} to="/about">
                        About                      
                    </Link>
                    <Link onClick={() => handleClick()} to="/services">
                        Services                      
                    </Link>
                    <Link onClick={() => handleClick()} to="/blog">
                        Blog                      
                    </Link>
                    
                </ul>
                <div className='btn-nav'>
                    <div className='btn-group'>
                        <button className='btn' onClick={() => handleClick()} to="/signin">Sign In</button> 
                    </div>
                    <div className='btn-group'>
                        <button className='btn' onClick={() => handleClick()} to="/register">Register</button> 
                    </div>
                    <div className={click ? "hamburger active" : "hamburger"} onClick={() => handleClick()}>
                        
                        {click ? (<FaTimes size={20} style={{color: '#333'}} />) : (<FaBars size={20} style={{color: '#333'}} />)}   
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
