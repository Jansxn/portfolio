import React from 'react'
import { exp } from './constants/data'

export function Experience(){
    var desc_arr = [];
    for (var i =0;i<exp.length; i++){
        desc_arr.push(exp[i].desc.map((d)=> <li>{d}</li>))
    }

    var ex = exp.map((e)=> 
    <div className={'card n'+ e.id}>
        <div className='job'>
            <a className='link' href = {e.link}>{e.job}</a> <span className='time'>{e.time}</span>
        </div>
        <div className='ex-desc px-5'>
            <ul className='list-disc'>
                {desc_arr[e.id]}
            </ul>
        </div>
    </div>)

    ex.reverse();

    return(
        <div className = 'j' id = "experience">
            <div class = "title">
                Experience
            </div>
            {ex}
        </div>
    )
}