import React from 'react'
import './style.css'
import Githead from '../assets/desktop-icon.svg'

const Header = () => {
  return (
    <div className='header'>
        <div className='Header_container'>
            <div className='LogoHolder'>
                <img src={Githead} alt="gitlogo" />
            </div>
            <div className='Text_content'>
                <span>Overview</span>
                <span style={{color:"#af3bdc"}}>Release Notes</span>
                <span style={{color:"#af3bdc"}}>Help</span>
            </div>
        </div>
    </div>
  )
}

export default Header