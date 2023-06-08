import {proj} from '../personal_info.js'
import './PCards.css'
import React from 'react'

function PCards(props) {

    console.log(props.id)

    return (
        <div className="pcard">

            <div className="pcard-title">
                {proj[props.id].name}
            </div>

            <div className="pcard-tech">
                {proj[props.id].tech.map((etech) => <div className="pcard-tech-item">{etech}</div>)}
            </div>

            <div className = 'pcard-info'>
                <ul className='pcard-desc-holder'>
                    {proj[props.id].desc.map((edesc) => <li className="pcard-desc">{edesc}</li>)}
                </ul>
                
                <div className="pcard-resource">
                    <div className = 'pcard-imgholder'>
                        <img src={proj[props.id].resource} alt="resource" className="pcard-resource-img"/>
                    </div>
                    <div className="pcard-links">
                        <a href={proj[props.id].gitlink} target="_blank" rel="noopener noreferrer">
                            <button className="pcard-button">Github</button>
                        </a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default PCards;