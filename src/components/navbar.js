import React from 'react'
import '../styles/navbar.css'
import search from '../icons/search.png'
import cart from '../icons/cart.png'

function Navbar() {
  return (
    <>
        <div className='main-navbar'>
            <div className='navbar-logo'>
                <p id='navbar-logo-txt'>Rad Plants</p>
            </div>
            <div className='navbar-content'>
                <p id='navbar-content-txt1'>Home</p>
                <p id='navbar-content-txt2'>Catagories</p>
                <p id='navbar-content-txt3'>Contact Us</p>
            </div>
            <div className='signup-container'>
                <img id="search-icon" src={search}/>
                <img id="cart-icon" src={cart}/>
            </div>
        </div>
    </>
  )
}

export default Navbar