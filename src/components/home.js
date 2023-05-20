import React from 'react'
import '../styles/home.css'
import img from '../icons/main-img.jpg'

function Home() {
  return (
    <>
      <div className='main-body'>
        <div className='main-body-text'>
          <p id='main-body-text1'>Find perfect plants for your home</p>
          <p id='main-body-text2'>Beautiful plants that encourage you to get creative</p>
        </div>
        <div className='main-body-btn'>
          <p id='main-body-btn-text'>Shop Now</p>
        </div>
        <div className='main-body-image'>
          <img id="main-img" src={img}/>
        </div>
      </div>
    </>
  )
}

export default Home