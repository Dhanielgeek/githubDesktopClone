import React from 'react'
import desktop from '../assets/screenshot-macos-light.png'

const ImgContainer = () => {
  return (
    <div className='ImgContainer'>
        <div className='imghold'>
            <img src={desktop} alt="" />
        </div>
    </div>
  )
}

export default ImgContainer