import React from 'react'
import article1 from '../icons/article1.jpg'
import article2 from '../icons/article2.jpg'
import '../styles/article.css'


function Article() {
  return (
    <>
        <div className='article-content'>
            <div className='article-content-left'>
                <img src={article1} className='article-img-1'/>
                <div className='card-content-left'>
                    <p className='card-content-leftpara'>Written By</p>
                    <p>Mellissa Bail</p>
                </div>
                <span className='card-content-leftno'>Editiion 291</span>
                <p className='card-content-desc1'>What is the best quality of manure used by farmers to keep their plants healthy all throughout the season?</p>
            </div>
            <div className='article-content-right'>
                <img src={article2} className='article-img-2'/>
                <div className='card-content-right'>
                    <p className='card-content-rightpara'>Written By</p>
                    <p>Jesse Rowe</p>
                </div>
                <span className='card-content-rightno'>Edition 292</span>
                <p className='card-content-desc2'>Kitchen Gardens: A healthy way of living or nutritional hazard?</p>
            </div>
        </div>
    </>
  )
}

export default Article