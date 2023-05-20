import React from 'react'
import '../styles/categories.css'
import indoor from '../icons/indoor.jpg'
import outdoor from '../icons/outdoor.jpg'
import bedroom from '../icons/bedroom.jpg'

function Categories() {
  return (
    <div className='cat-main'>
        <div className='cat-text1'>
            <p>Categories</p>
        </div>
        <div className='cat-image-tray'>
            <div className='cat-tray1'>
               <img id="cat-img"src={indoor}/> 
               <p id='cat-img-txt'>Jungle Plants</p>
            </div>
            <div className='cat-tray1'>
                <img id="cat-img"src={outdoor}/>
                <p id='cat-img-txt'>Outdoor Plants</p>
            </div>
            <div className='cat-tray1'>
                <img id="cat-img"src={bedroom}/>
                <p id='cat-img-txt'>Bedroom Plants</p>
            </div>
        </div>
        <div className='cat-text2'>
            <p id='cat-txt2'>Love and work are to people what water and sunshine are to plants</p>
        </div>
    </div>
  )
}

export default Categories