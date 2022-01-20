import React, {useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import './Navbar.css'
import '../pages/Signin.js'


const Navbar = () => {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)


    return (
        <div className='header'>
            <div className='container'>
                <h1>Mero<span className='span-nav'>Crypto</span></h1>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li>
                        <a href='/'>Home</a>
                    </li>
                    <li>
                        <a href='/'>About</a>
                    </li>
                    <li>
                        <a href='/'>Services</a>
                    </li>
                    <li>
                        <a href='/'>Blogs</a>
                    </li>
                </ul>
                <div className='btn-group'>
                    <button className='btn'>Login/Register</button> 
                </div>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={20} style={{color: '#333'}} />) : (<FaBars size={20} style={{color: '#333'}} />)}   
                </div>
            </div>
        </div>
    )
}

export default Navbar
