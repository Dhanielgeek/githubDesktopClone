import React from 'react'
import  Beaker from '../assets/beaker.svg'

const OtherHero = () => {
  return (
    <div className='OtherHero'>
        <div className='text_holder'>
            <div className='otherBox'>
                <span className='one'>Feeling brave?</span>
                <span>Try new features in the Icon representing an a beaker
                 <img src={Beaker} alt="" />  <a href='#'>Beta Channel before they're released.</a>   </span>
            </div>
            <div className='otherBox'>
                <span className='two'>Prefer the MSI?</span>
                <span>Download for <a href="#">Windows (MSI)</a></span>
            </div>
            <div className='otherBox'>
                <span className='three'>macOS?</span>
                <span>Download for <a href="#">macOS</a> </span>
            </div>
        </div>
        <div className='Bydownloading'>
            <span>By downloading, you agree to the <a href="#">Open Source Applications Terms.</a></span>
        </div>
    </div>
  )
}

export default OtherHero