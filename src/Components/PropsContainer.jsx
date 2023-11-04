import React from 'react'

const PropsContainer = ({img,Fdir,a,h3,text}) => {
  return (
    <div className='propsbox' style={{flexDirection:Fdir}}>
        <div className='imgBox'>
            <img src={img} alt="" />
        </div>
        <div className='textHold'>
            <h3>{h3}</h3>
            <p>{text} <a href="#">{a}</a>  </p>
        </div>
    </div>
  )
}

export default PropsContainer