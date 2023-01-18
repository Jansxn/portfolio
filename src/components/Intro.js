import React from 'react'
import portrait from './images/portrait.jpg'

export default function Intro() {
    return (
        <div className='Intro' id='intro'>
            <div className = "in-flex-container">
                <div className='item'>
                    <div className='item1'>
                        <div className = "in-name">
                            <div className='in-iam'>
                                I am Jason DMello - 
                            </div>
                            I am a sophomore at MIT, Manipal. <br />An enthusiastic learner, currently working on multiple projects in multiple tech stacks.
                        </div>
                        <div className = 'in-links'>
                        </div>
                    </div>
                </div>
                <div className = "item2 portait">
                    <img src={portrait} className = "portrait-img" alt="robot_hand_image" />
                </div>
            </div>
        </div>
    )
}