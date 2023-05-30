import React from 'react'
import '../styles/footer.css'
import social from '../icons/social-links.png'

function Footer() {
  return (
    <>
        <div className='footer-bgblack'></div> 
        <div className='footer-content'>
            <div className='footer-content1'>
                <div className='footer-logo-content'>
                <p id='navbar-logo-txt'>Rad Plants</p>
                </div>
                <p className='para-footer'>A plant shop run by Mr. and Mrs. Bansal, freshly grown plants supplied from Bansal farms</p>
                <img className='img-footer' src={social} alt='links'/>
            </div>
            <div className='footer-content2'>
                <p className='head-footer1'>Pages</p>
                <ul>
                    <li className='list1'>Overview</li>
                    <li className='list1'>Home</li>
                    <li className='list1'>About</li>
                    <li className='list1'>Features</li>
                    <li className='list1'>Pricing</li>
                </ul>
            </div>
            <div className='footer-content3'>
                <p className='head-footer2'>Company</p>
                <ul className='head-footer'>
                    <li className='list1'>Integration</li>
                    <li className='list1'>Blog</li>
                    <li className='list1'>Blog Article</li>
                    <li className='list1'>Contact</li>
                </ul>
            </div>
            <div className='footer-content4'>
                <p className='head-footer3'>Contact</p>
                <ul className='head-footer'>
                    <li className='list1'>Login</li>
                    <li className='list1'>Register</li>
                    <li className='list1'>Forgot Password</li>
                    <li className='list1'>Update Password</li>
                </ul>
            </div>
        </div>
    </>
  )
}

export default Footer