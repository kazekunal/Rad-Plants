import React from 'react'
import '../styles/feat.css'
import in1 from '../icons/plant-in1.jpg'
import in2 from '../icons/plant-in2.jpg'

function Feat() {
  return (
    <>
        <div className='hero-content'>
          <div className='hero-left'>
          <p className='hero-content-heading'>
            Featured
          </p>
            <p className='hero-content-para-1'>
              Our plants are 100% organic, We don't use pesticides or harmful chemicals.
            </p>
            <p className='hero-content-para-2'>
              But, please don't eat them
            </p>
            <p className='hero-shop-btn'> Shop all Favourites</p>
          </div>
          <div className='hero-img-center'>
            <img src={in1} className='hero-img-1'/>
            <span className='hero-img-center-txt1'> Plant 1</span>
            <span className='hero-img-center-txt2'> $$$</span>
          </div>
          <div className='hero-img-right'>
            <img src={in2} className='hero-img-2'/>
            <span className='hero-img-right-txt1'> Plant 2</span>
            <span className='hero-img-right-txt2'> $$$</span>
          </div>
        </div>
    </>
  )
}

export default Feat