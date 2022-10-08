import React from 'react'
import logo from '../images/logo.svg'
import Cart from './Cart'
import profile from '../images/image-avatar.png'
import { useGlobalContext } from '../context'
import SideMenu from './SideMenu'
function Navbar() {
    const {currentWindow}=useGlobalContext()
    return (
        <header>
            <div className='con'>
                {currentWindow>=745?'':<SideMenu/>}
                <img src={logo} alt="logo" />
                <ul className='nav-list' >
                <li>Collection</li>
                <li>Men</li>
                <li>Women</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            </div>
            <div className='cart-con'>
                <Cart/>
                <img src={profile} alt="profile" className='profile' />
            </div>
        </header>
    )
}

export default Navbar