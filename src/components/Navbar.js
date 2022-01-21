import React, {useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import './Navbar.css'
import '../pages/Signin.js'
import '../pages/Register.js'
import { useNavigate } from 'react-router-dom'


const Navbar = () => {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    const navigate = useNavigate()
    const handleLink = (path) => {
        navigate(`${path}`);
    }

    return (
        <div className='header'>
            <div className='container'>
                <h1>Mero<span className='span-nav'>Crypto</span></h1>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
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
                <div className='btn-group'>
                    <button className='btn' onClick={() => handleLink("/signin")}>Login</button> 
                </div>
                <div className='btn-group'>
                    <button className='btn' onClick={() => handleLink("/register")}>Register</button> 
                </div>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={20} style={{color: '#333'}} />) : (<FaBars size={20} style={{color: '#333'}} />)}   
                </div>
            </div>
        </div>
    )
}

export default Navbar
