import React from 'react'
import File from '../assets/file-media.svg'
import Organise from  '../assets/organization.svg'
import Terminal from '../assets/terminal.svg'

const BuildHold = () => {


const BuildData = [
    {
        img: File,
        H5 : "Expanded image diff support",
        P : "Easily compare changed images. See the before and after, swipe or fade between the two, or look at just the changed parts."
    },
    {
        img: Terminal,
        H5 : "Extensive editor & shell integrations",
        P : "Open your favorite editor or shell from the app, or jump back to GitHub Desktop from your shell. GitHub Desktop is your springboard for work.."
    },
    {
        img: Organise,
        H5 : "Community supported",
        P : "GitHub Desktop is open source now! Check out our roadmap, contribute, and help us make collaboration even easier."
    }
]







  return (
    <div className='BuildHold'>
        <div className='build'>
           <div className="buildContainer">
           {
            BuildData.map((props)=>(
                <div className='buildBox'>
            <div className='buildImg'>
                <img src={props.img} alt="" />
            </div>
            <div className='buildText'>
                <h5>
                    {props.H5}
                </h5>
                <p>
                    {props.P}
                </p>
            </div>
           </div>
            ))
           }
           </div>
            <div className='buildButton'>
                <button>See what's been built</button>
            </div>
        </div>
    </div>
  )
}

export default BuildHold